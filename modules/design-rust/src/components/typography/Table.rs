use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct TableProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Table(props: TableProps) -> Element {
    rsx! {
        div { class: "my-6 w-full overflow-y-auto",
            table {
                class: cn(["w-full", props.class.as_deref().unwrap_or_default()]),
                ..props.attributes,
                {props.children}
            }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct TableHeaderProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn TableHeader(props: TableHeaderProps) -> Element {
    rsx! {
        thead {
            class: cn([props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct TableBodyProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn TableBody(props: TableBodyProps) -> Element {
    rsx! {
        tbody {
            class: cn([props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct TableRowProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn TableRow(props: TableRowProps) -> Element {
    rsx! {
        tr {
            class: cn(["m-0 border-t p-0 even:bg-muted", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct TableHeadProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn TableHead(props: TableHeadProps) -> Element {
    rsx! {
        th {
            class: cn([
                "border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct TableCellProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn TableCell(props: TableCellProps) -> Element {
    rsx! {
        td {
            class: cn([
                "border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
