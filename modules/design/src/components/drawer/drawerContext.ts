import { createContext, type RefObject, useContext } from "react";

export const DrawerContentContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export const useDrawerContentRef = () => useContext(DrawerContentContext) ?? undefined;
