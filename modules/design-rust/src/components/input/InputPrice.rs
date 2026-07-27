use dioxus::prelude::*;

use crate::components::combobox::{
    Combobox, ComboboxContent, ComboboxContentAlignType, ComboboxItem, ComboboxList,
    ComboboxTrigger,
};
use crate::components::input::InputGroup::InputGroup;
use crate::components::input::InputGroupAddon::{InputGroupAddon, InputGroupAddonAlignType};
use crate::components::input::InputGroupInput::InputGroupInput;
use crate::utils::cn;

#[derive(Clone, PartialEq)]
struct CurrencyEntry {
    code: &'static str,
    name: &'static str,
    icon: &'static str,
    symbol: &'static str,
}

/// Inlined subset of `@ooneex/currencies` — the 84 currencies used by the
/// original `InputPrice`.
const CURRENCIES: &[CurrencyEntry] = &[
    CurrencyEntry {
        code: "USD",
        name: "US Dollar",
        icon: "🇺🇸",
        symbol: "$",
    },
    CurrencyEntry {
        code: "EUR",
        name: "Euro",
        icon: "🇪🇺",
        symbol: "€",
    },
    CurrencyEntry {
        code: "GBP",
        name: "British Pound",
        icon: "🇬🇧",
        symbol: "£",
    },
    CurrencyEntry {
        code: "JPY",
        name: "Japanese Yen",
        icon: "🇯🇵",
        symbol: "¥",
    },
    CurrencyEntry {
        code: "CAD",
        name: "Canadian Dollar",
        icon: "🇨🇦",
        symbol: "$",
    },
    CurrencyEntry {
        code: "AUD",
        name: "Australian Dollar",
        icon: "🇦🇺",
        symbol: "$",
    },
    CurrencyEntry {
        code: "CHF",
        name: "Swiss Franc",
        icon: "🇨🇭",
        symbol: "Fr",
    },
    CurrencyEntry {
        code: "CNY",
        name: "Chinese Yuan",
        icon: "🇨🇳",
        symbol: "¥",
    },
    CurrencyEntry {
        code: "SEK",
        name: "Swedish Krona",
        icon: "🇸🇪",
        symbol: "kr",
    },
    CurrencyEntry {
        code: "NZD",
        name: "New Zealand Dollar",
        icon: "🇳🇿",
        symbol: "$",
    },
    CurrencyEntry {
        code: "MXN",
        name: "Mexican Peso",
        icon: "🇲🇽",
        symbol: "$",
    },
    CurrencyEntry {
        code: "SGD",
        name: "Singapore Dollar",
        icon: "🇸🇬",
        symbol: "$",
    },
    CurrencyEntry {
        code: "HKD",
        name: "Hong Kong Dollar",
        icon: "🇭🇰",
        symbol: "$",
    },
    CurrencyEntry {
        code: "NOK",
        name: "Norwegian Krone",
        icon: "🇳🇴",
        symbol: "kr",
    },
    CurrencyEntry {
        code: "KRW",
        name: "South Korean Won",
        icon: "🇰🇷",
        symbol: "₩",
    },
    CurrencyEntry {
        code: "TRY",
        name: "Turkish Lira",
        icon: "🇹🇷",
        symbol: "₺",
    },
    CurrencyEntry {
        code: "INR",
        name: "Indian Rupee",
        icon: "🇮🇳",
        symbol: "₹",
    },
    CurrencyEntry {
        code: "BRL",
        name: "Brazilian Real",
        icon: "🇧🇷",
        symbol: "R$",
    },
    CurrencyEntry {
        code: "ZAR",
        name: "South African Rand",
        icon: "🇿🇦",
        symbol: "R",
    },
    CurrencyEntry {
        code: "RUB",
        name: "Russian Ruble",
        icon: "🇷🇺",
        symbol: "₽",
    },
    CurrencyEntry {
        code: "DKK",
        name: "Danish Krone",
        icon: "🇩🇰",
        symbol: "kr",
    },
    CurrencyEntry {
        code: "PLN",
        name: "Polish Zloty",
        icon: "🇵🇱",
        symbol: "zł",
    },
    CurrencyEntry {
        code: "THB",
        name: "Thai Baht",
        icon: "🇹🇭",
        symbol: "฿",
    },
    CurrencyEntry {
        code: "IDR",
        name: "Indonesian Rupiah",
        icon: "🇮🇩",
        symbol: "Rp",
    },
    CurrencyEntry {
        code: "HUF",
        name: "Hungarian Forint",
        icon: "🇭🇺",
        symbol: "Ft",
    },
    CurrencyEntry {
        code: "CZK",
        name: "Czech Koruna",
        icon: "🇨🇿",
        symbol: "Kč",
    },
    CurrencyEntry {
        code: "ILS",
        name: "Israeli New Shekel",
        icon: "🇮🇱",
        symbol: "₪",
    },
    CurrencyEntry {
        code: "CLP",
        name: "Chilean Peso",
        icon: "🇨🇱",
        symbol: "$",
    },
    CurrencyEntry {
        code: "PHP",
        name: "Philippine Peso",
        icon: "🇵🇭",
        symbol: "₱",
    },
    CurrencyEntry {
        code: "AED",
        name: "UAE Dirham",
        icon: "🇦🇪",
        symbol: "د.إ",
    },
    CurrencyEntry {
        code: "COP",
        name: "Colombian Peso",
        icon: "🇨🇴",
        symbol: "$",
    },
    CurrencyEntry {
        code: "SAR",
        name: "Saudi Riyal",
        icon: "🇸🇦",
        symbol: "﷼",
    },
    CurrencyEntry {
        code: "MYR",
        name: "Malaysian Ringgit",
        icon: "🇲🇾",
        symbol: "RM",
    },
    CurrencyEntry {
        code: "RON",
        name: "Romanian Leu",
        icon: "🇷🇴",
        symbol: "lei",
    },
    CurrencyEntry {
        code: "BGN",
        name: "Bulgarian Lev",
        icon: "🇧🇬",
        symbol: "лв",
    },
    CurrencyEntry {
        code: "HRK",
        name: "Croatian Kuna",
        icon: "🇭🇷",
        symbol: "kn",
    },
    CurrencyEntry {
        code: "NGN",
        name: "Nigerian Naira",
        icon: "🇳🇬",
        symbol: "₦",
    },
    CurrencyEntry {
        code: "PKR",
        name: "Pakistani Rupee",
        icon: "🇵🇰",
        symbol: "₨",
    },
    CurrencyEntry {
        code: "EGP",
        name: "Egyptian Pound",
        icon: "🇪🇬",
        symbol: "£",
    },
    CurrencyEntry {
        code: "VND",
        name: "Vietnamese Dong",
        icon: "🇻🇳",
        symbol: "₫",
    },
    CurrencyEntry {
        code: "BDT",
        name: "Bangladeshi Taka",
        icon: "🇧🇩",
        symbol: "৳",
    },
    CurrencyEntry {
        code: "UAH",
        name: "Ukrainian Hryvnia",
        icon: "🇺🇦",
        symbol: "₴",
    },
    CurrencyEntry {
        code: "KWD",
        name: "Kuwaiti Dinar",
        icon: "🇰🇼",
        symbol: "د.ك",
    },
    CurrencyEntry {
        code: "QAR",
        name: "Qatari Rial",
        icon: "🇶🇦",
        symbol: "ر.ق",
    },
    CurrencyEntry {
        code: "MAD",
        name: "Moroccan Dirham",
        icon: "🇲🇦",
        symbol: "د.م.",
    },
    CurrencyEntry {
        code: "KES",
        name: "Kenyan Shilling",
        icon: "🇰🇪",
        symbol: "KSh",
    },
    CurrencyEntry {
        code: "GHS",
        name: "Ghanaian Cedi",
        icon: "🇬🇭",
        symbol: "₵",
    },
    CurrencyEntry {
        code: "TZS",
        name: "Tanzanian Shilling",
        icon: "🇹🇿",
        symbol: "TSh",
    },
    CurrencyEntry {
        code: "ETB",
        name: "Ethiopian Birr",
        icon: "🇪🇹",
        symbol: "Br",
    },
    CurrencyEntry {
        code: "XAF",
        name: "CFA Franc BEAC",
        icon: "🌍",
        symbol: "FCFA",
    },
    CurrencyEntry {
        code: "XOF",
        name: "CFA Franc BCEAO",
        icon: "🌍",
        symbol: "CFA",
    },
    CurrencyEntry {
        code: "UGX",
        name: "Ugandan Shilling",
        icon: "🇺🇬",
        symbol: "USh",
    },
    CurrencyEntry {
        code: "ARS",
        name: "Argentine Peso",
        icon: "🇦🇷",
        symbol: "$",
    },
    CurrencyEntry {
        code: "PEN",
        name: "Peruvian Sol",
        icon: "🇵🇪",
        symbol: "S/.",
    },
    CurrencyEntry {
        code: "VEF",
        name: "Venezuelan Bolívar",
        icon: "🇻🇪",
        symbol: "Bs.F",
    },
    CurrencyEntry {
        code: "BOB",
        name: "Bolivian Boliviano",
        icon: "🇧🇴",
        symbol: "Bs.",
    },
    CurrencyEntry {
        code: "PYG",
        name: "Paraguayan Guaraní",
        icon: "🇵🇾",
        symbol: "₲",
    },
    CurrencyEntry {
        code: "UYU",
        name: "Uruguayan Peso",
        icon: "🇺🇾",
        symbol: "$U",
    },
    CurrencyEntry {
        code: "DOP",
        name: "Dominican Peso",
        icon: "🇩🇴",
        symbol: "RD$",
    },
    CurrencyEntry {
        code: "GTQ",
        name: "Guatemalan Quetzal",
        icon: "🇬🇹",
        symbol: "Q",
    },
    CurrencyEntry {
        code: "HNL",
        name: "Honduran Lempira",
        icon: "🇭🇳",
        symbol: "L",
    },
    CurrencyEntry {
        code: "NIO",
        name: "Nicaraguan Córdoba",
        icon: "🇳🇮",
        symbol: "C$",
    },
    CurrencyEntry {
        code: "CRC",
        name: "Costa Rican Colón",
        icon: "🇨🇷",
        symbol: "₡",
    },
    CurrencyEntry {
        code: "PAB",
        name: "Panamanian Balboa",
        icon: "🇵🇦",
        symbol: "B/.",
    },
    CurrencyEntry {
        code: "CUP",
        name: "Cuban Peso",
        icon: "🇨🇺",
        symbol: "₱",
    },
    CurrencyEntry {
        code: "JMD",
        name: "Jamaican Dollar",
        icon: "🇯🇲",
        symbol: "J$",
    },
    CurrencyEntry {
        code: "TTD",
        name: "T&T Dollar",
        icon: "🇹🇹",
        symbol: "TT$",
    },
    CurrencyEntry {
        code: "BBD",
        name: "Barbadian Dollar",
        icon: "🇧🇧",
        symbol: "Bds$",
    },
    CurrencyEntry {
        code: "XCD",
        name: "East Caribbean Dollar",
        icon: "🌎",
        symbol: "$",
    },
    CurrencyEntry {
        code: "BSD",
        name: "Bahamian Dollar",
        icon: "🇧🇸",
        symbol: "$",
    },
    CurrencyEntry {
        code: "BZD",
        name: "Belize Dollar",
        icon: "🇧🇿",
        symbol: "BZ$",
    },
    CurrencyEntry {
        code: "GYD",
        name: "Guyanese Dollar",
        icon: "🇬🇾",
        symbol: "$",
    },
    CurrencyEntry {
        code: "SRD",
        name: "Surinamese Dollar",
        icon: "🇸🇷",
        symbol: "$",
    },
    CurrencyEntry {
        code: "AWG",
        name: "Aruban Florin",
        icon: "🇦🇼",
        symbol: "ƒ",
    },
    CurrencyEntry {
        code: "ANG",
        name: "Netherlands Antillean Guilder",
        icon: "🇧🇶",
        symbol: "ƒ",
    },
    CurrencyEntry {
        code: "BMD",
        name: "Bermudian Dollar",
        icon: "🇧🇲",
        symbol: "$",
    },
    CurrencyEntry {
        code: "KYD",
        name: "Cayman Islands Dollar",
        icon: "🇰🇾",
        symbol: "$",
    },
    CurrencyEntry {
        code: "FJD",
        name: "Fijian Dollar",
        icon: "🇫🇯",
        symbol: "$",
    },
    CurrencyEntry {
        code: "PGK",
        name: "Papua New Guinean Kina",
        icon: "🇵🇬",
        symbol: "K",
    },
    CurrencyEntry {
        code: "SBD",
        name: "Solomon Islands Dollar",
        icon: "🇸🇧",
        symbol: "$",
    },
    CurrencyEntry {
        code: "WST",
        name: "Samoan Tālā",
        icon: "🇼🇸",
        symbol: "WS$",
    },
    CurrencyEntry {
        code: "TOP",
        name: "Tongan Paʻanga",
        icon: "🇹🇴",
        symbol: "T$",
    },
    CurrencyEntry {
        code: "VUV",
        name: "Vanuatu Vatu",
        icon: "🇻🇺",
        symbol: "Vt",
    },
];

#[derive(Props, Clone, PartialEq)]
pub struct InputPriceProps {
    #[props(default)]
    pub group_class: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(default = "USD".to_string())]
    pub currency: String,
    #[props(default)]
    pub on_currency_change: Option<EventHandler<String>>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPrice(props: InputPriceProps) -> Element {
    let mut currency = use_signal(|| props.currency.clone());
    let mut search = use_signal(String::new);
    let placeholder = props.placeholder.unwrap_or_else(|| "0.00".into());

    let search_val = search.read().to_lowercase();
    let filtered: Vec<&CurrencyEntry> = CURRENCIES
        .iter()
        .filter(|c| {
            search_val.is_empty()
                || c.code.to_lowercase().contains(&*search_val)
                || c.name.to_lowercase().contains(&*search_val)
        })
        .collect();

    let selected_code = currency.read().clone();
    let selected = CURRENCIES.iter().find(|c| c.code == selected_code);
    let selected_icon = selected.map(|c| c.icon).unwrap_or("🌐");
    let selected_code_display = selected_code.clone();

    rsx! {
        InputGroup { class: props.group_class,
            InputGroupInput {
                r#type: "number",
                placeholder: "{placeholder}",
                class: cn([props.class.as_deref().unwrap_or_default()]),
                attributes: props.attributes,
            }
            InputGroupAddon { align: InputGroupAddonAlignType::InlineStart,
                Combobox {
                    value: selected_code.clone(),
                    on_value_change: {
                        let on_currency_change = props.on_currency_change.clone();
                        move |val: String| {
                            currency.set(val.clone());
                            if let Some(ref cb) = on_currency_change {
                                cb.call(val);
                            }
                        }
                    },
                    input_value: search.read().clone(),
                    on_input_value_change: move |val: String| { search.set(val); },
                    ComboboxTrigger { class: "flex h-7 items-center gap-1 rounded px-2 text-xs hover:bg-accent",
                        span { "{selected_icon}" }
                        span { "{selected_code_display}" }
                    }
                    ComboboxContent { align: ComboboxContentAlignType::Start, class: "w-56 shadow-none ring ring-ring-active p-1",
                        ComboboxList {
                            for entry in filtered {
                                ComboboxItem { key: "{entry.code}", value: "{entry.code}",
                                    span { "{entry.icon}" }
                                    span { "{entry.code}" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
