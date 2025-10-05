import { createContext } from "react";
import { teachers } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {




    const value = {
        teachers
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider