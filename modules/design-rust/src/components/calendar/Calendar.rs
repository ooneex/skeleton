use dioxus::document::eval;
use dioxus::prelude::*;

use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::icons::outline::arrows::sm::{ChevronLeftIcon, ChevronRightIcon};
use crate::utils::cn;

const WEEKDAY_NAMES: [&str; 7] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH_NAMES: [&str; 12] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

#[derive(Clone, Copy, PartialEq, Eq)]
struct CalendarDayType {
    year: i32,
    month: u8,
    day: u8,
    outside: bool,
}

fn is_leap_year(year: i32) -> bool {
    year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

fn days_in_month(year: i32, month: u8) -> u32 {
    match month {
        1 | 3 | 5 | 7 | 8 | 10 | 12 => 31,
        4 | 6 | 9 | 11 => 30,
        2 if is_leap_year(year) => 29,
        2 => 28,
        _ => 30,
    }
}

/// Returns 0=Monday … 6=Sunday.
fn day_of_week_mon_first(year: i32, month: u8, day: u8) -> u8 {
    const T: [i32; 12] = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    let adjusted_year = if month < 3 { year - 1 } else { year };
    let month_index = usize::from(month.saturating_sub(1));
    let dow = (adjusted_year + adjusted_year / 4 - adjusted_year / 100
        + adjusted_year / 400
        + T.get(month_index).copied().unwrap_or_default()
        + i32::from(day))
        % 7;
    ((dow + 6) % 7) as u8
}

fn prev_month(year: i32, month: u8) -> (i32, u8) {
    if month <= 1 {
        (year - 1, 12)
    } else {
        (year, month - 1)
    }
}

fn next_month(year: i32, month: u8) -> (i32, u8) {
    if month >= 12 {
        (year + 1, 1)
    } else {
        (year, month + 1)
    }
}

fn build_calendar_days(year: i32, month: u8) -> Vec<CalendarDayType> {
    let mut days = Vec::with_capacity(42);
    let first_weekday = i32::from(day_of_week_mon_first(year, month, 1));
    let current_month_days = days_in_month(year, month) as i32;
    let (prev_year, prev_month_num) = prev_month(year, month);
    let prev_month_days = days_in_month(prev_year, prev_month_num) as i32;
    let (next_year, next_month_num) = next_month(year, month);

    for index in 0..42_i32 {
        let day_number = index - first_weekday + 1;
        if day_number < 1 {
            days.push(CalendarDayType {
                year: prev_year,
                month: prev_month_num,
                day: (prev_month_days + day_number) as u8,
                outside: true,
            });
        } else if day_number > current_month_days {
            days.push(CalendarDayType {
                year: next_year,
                month: next_month_num,
                day: (day_number - current_month_days) as u8,
                outside: true,
            });
        } else {
            days.push(CalendarDayType {
                year,
                month,
                day: day_number as u8,
                outside: false,
            });
        }
    }

    days
}

#[derive(Props, Clone, PartialEq)]
pub struct CalendarProps {
    /// Currently selected date as (year, month, day). When set, the component mirrors it.
    #[props(default)]
    pub selected: Option<(i32, u8, u8)>,
    /// Month to display initially (year, month). Defaults to the current month.
    #[props(default)]
    pub default_month: Option<(i32, u8)>,
    /// Dates that are not selectable.
    #[props(default)]
    pub disabled_days: Vec<(i32, u8, u8)>,
    /// Show days from adjacent months in the grid.
    #[props(default = true)]
    pub show_outside_days: bool,
    /// Stretch to the container width.
    #[props(default = false)]
    pub full_width: bool,
    /// Called with the newly selected (year, month, day) when the user picks a day.
    #[props(default)]
    pub on_select: Option<EventHandler<(i32, u8, u8)>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Calendar(props: CalendarProps) -> Element {
    let mut today_signal = use_signal(|| None::<(i32, u8, u8)>);
    let mut selected_signal = use_signal(|| props.selected);
    let mut view_month_signal = use_signal(|| {
        props
            .default_month
            .or(props.selected.map(|(year, month, _)| (year, month)))
    });

    let selected_prop = props.selected;
    use_effect(use_reactive!(|(selected_prop,)| {
        selected_signal.set(selected_prop);
        if let Some((year, month, _)) = selected_prop {
            view_month_signal.set(Some((year, month)));
        }
    }));

    let default_month_prop = props.default_month;
    use_effect(use_reactive!(|(default_month_prop,)| {
        if let Some(month) = default_month_prop {
            view_month_signal.set(Some(month));
        }
    }));

    use_future(move || async move {
        let mut e = eval(
            "dioxus.send([new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()])",
        );
        if let Ok(arr) = e.recv::<Vec<i64>>().await
            && arr.len() == 3
        {
            let today = (arr[0] as i32, arr[1] as u8, arr[2] as u8);
            today_signal.set(Some(today));
            if view_month_signal.read().is_none() {
                view_month_signal.set(Some((today.0, today.1)));
            }
        }
    });

    let (view_year, view_month) = view_month_signal().unwrap_or((1970, 1));
    let visible_days = build_calendar_days(view_year, view_month);
    let month_label = MONTH_NAMES
        .get(usize::from(view_month.saturating_sub(1)))
        .copied()
        .unwrap_or_default();
    let caption = format!("{month_label} {view_year}");
    let outer_class = cn([
        if props.full_width { "w-full" } else { "w-fit" },
        props.class.as_deref().unwrap_or_default(),
    ]);
    let weekday_class = cn([
        "p-0 text-xs text-muted-foreground",
        if props.full_width {
            "flex-1 h-9 flex items-center justify-center"
        } else {
            "size-9"
        },
    ]);
    let day_button_class = cn([
        "relative flex items-center justify-center whitespace-nowrap rounded-full p-0 cursor-pointer text-foreground outline-offset-2 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary group-data-[selected]:hover:bg-primary hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[selected]:hover:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-accent group-data-[selected]:group-[.range-middle]:text-foreground text-xs",
        if props.full_width { "size-8" } else { "size-9" },
    ]);
    let prev_button_class = cn([
        &button_variants(ButtonVariantType::Ghost, ButtonSizeType::Icon, None),
        "size-9 text-foreground p-0",
    ]);
    let next_button_class = cn([
        &button_variants(ButtonVariantType::Ghost, ButtonSizeType::Icon, None),
        "size-9 text-foreground p-0",
    ]);
    let today = today_signal();
    let selected = selected_signal();
    let disabled_days = props.disabled_days.clone();
    let show_outside_days = props.show_outside_days;
    let full_width = props.full_width;
    let on_select = props.on_select;

    rsx! {
        div {
            "data-slot": "calendar",
            class: outer_class,
            ..props.attributes,
            div { class: "relative flex flex-col sm:flex-row gap-4",
                div { class: "w-full",
                    div { class: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
                        button {
                            "data-slot": "button",
                            type: "button",
                            class: button_variants(ButtonVariantType::Ghost, ButtonSizeType::Sm, Some("font-bold")),
                            onclick: move |_| {
                                if let Some((today_year, today_month, _)) = today {
                                    view_month_signal.set(Some((today_year, today_month)));
                                }
                            },
                            "{caption}"
                        }
                    }
                    div { class: "absolute top-0 flex w-full justify-between z-10",
                        button {
                            "data-slot": "button",
                            type: "button",
                            class: prev_button_class.clone(),
                            "aria-label": "Go to previous month",
                            onclick: move |_| {
                                view_month_signal.set(Some(prev_month(view_year, view_month)));
                            },
                            ChevronLeftIcon { class: "size-4", "aria-hidden": "true" }
                        }
                        button {
                            "data-slot": "button",
                            type: "button",
                            class: next_button_class.clone(),
                            "aria-label": "Go to next month",
                            onclick: move |_| {
                                view_month_signal.set(Some(next_month(view_year, view_month)));
                            },
                            ChevronRightIcon { class: "size-4", "aria-hidden": "true" }
                        }
                    }
                    table { class: cn([if full_width { "w-full" } else { "" }]),
                        thead { class: cn([if full_width { "flex w-full" } else { "" }]),
                            tr { class: cn([if full_width { "flex w-full" } else { "" }]),
                                for weekday in WEEKDAY_NAMES {
                                    th {
                                        scope: "col",
                                        class: weekday_class.clone(),
                                        "{weekday}"
                                    }
                                }
                            }
                        }
                        tbody {
                            for week in visible_days.chunks(7) {
                                tr { class: cn([if full_width { "flex w-full" } else { "" }]),
                                    for day_info in week.iter().copied() {
                                        {
                                            let date = (day_info.year, day_info.month, day_info.day);
                                            let is_selected = selected == Some(date);
                                            let is_disabled = disabled_days.contains(&date);
                                            let is_today = today == Some(date);
                                            let is_hidden = day_info.outside && !show_outside_days;
                                            let day_class = cn([
                                                "group px-0 text-xs",
                                                if full_width { "flex-1 flex justify-center py-0.5" } else { "size-9" },
                                                if day_info.outside { "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground" } else { "" },
                                                if is_today {
                                                    "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors"
                                                } else {
                                                    ""
                                                },
                                                if is_hidden { "invisible" } else { "" },
                                            ]);
                                            rsx! {
                                                td {
                                                    class: day_class,
                                                    "data-selected": is_selected.then_some("true"),
                                                    "data-disabled": is_disabled.then_some("true"),
                                                    "data-outside": day_info.outside.then_some("true"),
                                                    button {
                                                        class: day_button_class.clone(),
                                                        disabled: is_disabled || is_hidden,
                                                        onclick: move |_| {
                                                            if is_disabled || is_hidden {
                                                                return;
                                                            }
                                                            selected_signal.set(Some(date));
                                                            if let Some(handler) = on_select {
                                                                handler.call(date);
                                                            }
                                                        },
                                                        "{day_info.day}"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
