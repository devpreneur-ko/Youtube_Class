import { create } from "zustand";
import { persist } from "zustand/middleware";

////////////////////////////////////////////////// 기본 스토어 타입 정의
type StoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// 기본 스토어 예시 (localStorage 저장 안 됨)
export const useExampleStore = create<StoreType>((set) => ({
  // 상태 : 카운트
  count: 0,

  // 액션1 : 이전 상태를 고려하지 않고 새 값으로 직접 설정
  increment: () =>
    set(() => ({
      count: 1,
    })),
  // 액션2 : 이전 상태(prev)에 접근하여 업데이트
  decrement: () =>
    set((prev) => ({
      count: prev.count - 1,
    })),
}));

////////////////////////////////////////////////// Persist 스토어 타입 정의
type PersistStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Persist 스토어 예시 (localStorage에 자동 저장)
export const usePersistExampleStore = create<PersistStoreType>()(
  persist(
    (set) => ({
      // 상태 : 카운트
      count: 0,

      // 액션1 : 이전 상태를 고려하지 않고 새 값으로 직접 설정
      increment: () =>
        set(() => ({
          count: 1,
        })),
      // 액션2 : 이전 상태(prev)에 접근하여 업데이트
      decrement: () =>
        set((prev) => ({
          count: prev.count - 1,
        })),
    }),
    {
      name: "persist-example-storage", // localStorage 키 이름
    }
  )
);
