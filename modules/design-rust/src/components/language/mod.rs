#![allow(non_snake_case)]

pub mod flags;

pub mod LanguageSwitcher;
pub mod LanguageSwitcherOption;

pub use LanguageSwitcher::{LanguageSwitcher, LanguageSwitcherProps, LanguageSwitcherSizeType};
pub use LanguageSwitcherOption::{
    LANGUAGES, LanguageSwitcherOption, LanguageSwitcherOptionProps, LanguageSwitcherOptionSizeType,
    LanguageType, language_label,
};
