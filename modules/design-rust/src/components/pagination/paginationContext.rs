use crate::components::button::ButtonSizeType;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum PaginationSizeType {
    Xs,
    Sm,
    #[default]
    Md,
    Lg,
}

impl PaginationSizeType {
    pub fn content_gap(&self) -> &'static str {
        match self {
            Self::Xs => "gap-0",
            Self::Sm => "gap-0.5",
            Self::Md => "gap-1",
            Self::Lg => "gap-1.5",
        }
    }

    pub fn link_icon_size(&self) -> ButtonSizeType {
        match self {
            Self::Xs => ButtonSizeType::IconXs,
            Self::Sm => ButtonSizeType::IconSm,
            Self::Md => ButtonSizeType::Icon,
            Self::Lg => ButtonSizeType::IconLg,
        }
    }

    pub fn chevron_icon_size_class(&self) -> &'static str {
        match self {
            Self::Xs => "size-3",
            Self::Sm => "size-4",
            Self::Md => "size-5",
            Self::Lg => "size-6",
        }
    }

    pub fn ellipsis_size(&self) -> &'static str {
        match self {
            Self::Xs => "size-6",
            Self::Sm => "size-8",
            Self::Md => "size-9",
            Self::Lg => "size-10",
        }
    }

    pub fn link_text_size(&self) -> &'static str {
        match self {
            Self::Xs => "text-xs",
            Self::Sm => "text-xs",
            Self::Md => "text-sm",
            Self::Lg => "text-base",
        }
    }
}
