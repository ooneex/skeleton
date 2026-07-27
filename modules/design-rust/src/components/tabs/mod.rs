#![allow(non_snake_case)]

mod Tabs;
mod TabsContent;
mod TabsIndicator;
mod TabsList;
mod TabsTrigger;

pub use Tabs::{Tabs, TabsProps};
pub use TabsContent::{TabsContent, TabsContentProps};
pub use TabsIndicator::{TabsIndicator, TabsIndicatorProps};
pub use TabsList::{
    TabsList, TabsListProps, TabsListSizeType, TabsListVariantType, tabs_list_variants,
};
pub use TabsTrigger::{TabsTrigger, TabsTriggerProps};
