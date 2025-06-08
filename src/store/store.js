import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            name: "",
            phone: "",
            coin: 0,
            setUser: (name, phone) => set((state) => ({ ...state, name, phone })),
            setCoin: (coin) => set((state) => ({ ...state, coin })),
        }),
        {
            name: "user-storage",
        }
    )
);

export default useUserStore;
