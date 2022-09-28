import React, { createContext, ReactNode, useContext } from "react";

type ContextType = {
  meals: [];
  newMenu : [];
  setMeals: () => void;
};

export const MealsContext = createContext<ContextType | null>(null);

const MealsContextProvider = ({
  value,
  children,
}: {
  value: ContextType;
  children: ReactNode;
}) => <MealsContext.Provider value={value}>{children}</MealsContext.Provider>;


export const useMeals = () => {
    const value = useContext(MealsContext)
    if (value === null) {
        throw new Error(
            'You must wrape your component inside <OfferContextProvider>'
            )
    }
    return value
}




export default MealsContextProvider;
