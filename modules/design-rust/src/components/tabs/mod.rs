#![allow(non_snake_case)]

pub mod Tabs;
pub mod TabsContent;
pub mod TabsIndicator;
pub mod TabsList;
pub mod TabsTrigger;

pub use Tabs::{Tabs, TabsProps};
pub use TabsContent::{TabsContent, TabsContentProps};
pub use TabsIndicator::{TabsIndicator, TabsIndicatorProps};
pub use TabsList::{
    TabsList, TabsListProps, TabsListSizeType, TabsListVariantType, tabs_list_variants,
};
pub use TabsTrigger::{TabsTrigger, TabsTriggerProps};
