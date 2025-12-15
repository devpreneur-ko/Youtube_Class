import { create } from "zustand";

interface StoreType {
  // 상태
  isOpen: boolean;
  children: React.ReactNode | null;
  direction: "left" | "right" | "top" | "bottom";

  // 액션
  setIsOpen: (isOpen: boolean) => void;
  setChildren: (children: React.ReactNode) => void;
  setDirection: (direction: "left" | "right" | "top" | "bottom") => void;
}

export const useCommonDrawerStore = create<StoreType>((set) => ({
  // 상태
  isOpen: false,
  children: null,
  direction: "left",

  // 액션
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  setChildren: (children: React.ReactNode) => set({ children }),
  setDirection: (direction: "left" | "right" | "top" | "bottom") => set({ direction }),
}));
