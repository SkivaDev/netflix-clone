import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { UserNetflix } from "@prisma/client";
import { set } from "zod";

interface UseCurrentUser {
  currentUser: UserNetflix | null;
  changeCurrentUser: (user: UserNetflix) => void;
}

export const useCurrentNetflixUser = create(
  persist<UseCurrentUser>(
    (set) => ({
      currentUser: null,
      changeCurrentUser: (user: UserNetflix) => {
        set({ currentUser: user });
      },
    }),
    {
      name: "current-netflix-user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
