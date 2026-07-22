export const DropdownMenuGroup = (props: React.ComponentProps<"div">) => {
  // biome-ignore lint/a11y/useSemanticElements: fieldset is not valid inside a menu; role="group" is the ARIA menu grouping pattern
  return <div role="group" data-slot="dropdown-menu-group" {...props} />;
};

DropdownMenuGroup.displayName = "DropdownMenu.Group";
