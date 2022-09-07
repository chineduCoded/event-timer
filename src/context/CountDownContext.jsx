import { useState, useContext, createContext } from "react"

export const CountDownContext = createContext()

export const CountDownProvider = ({ children }) => {
    const [timer, setTimer] = useState(new Date().getTime() + (3 * 60 * 1000))
    return (
        <CountDownContext.Provider value={{ timer, setTimer }}>
            {children}
        </CountDownContext.Provider>
    )
}

export const useTimer = () => {
    return useContext(CountDownContext)
}