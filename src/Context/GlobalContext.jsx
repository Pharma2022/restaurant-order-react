import { createContext,useContext } from "react";
import useGlobal from "../hooks/useGlobal";

export const GlobalContext=createContext()

export const GlobalContextProvider=({children})=>{

    return (<GlobalContext.Provider
        value={useGlobal()}
    >
        {children}
    </GlobalContext.Provider>)

}

export  const useGlobalContext =()=>useContext(GlobalContext)