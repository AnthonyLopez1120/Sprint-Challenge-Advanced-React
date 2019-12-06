import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"
import DarkModeBtn from "../components/DarkModeBtn"

function useDarkMode (){
    const [isDarkMode, setDarkMode] = useLocalStorage("darkMode")

    useEffect(()=>{
        if(isDarkMode){
            document.body.classList.add("darkmode")
            document.getElementById("dark-mode-btn").innerHTML = "🌙"
        }else{
            document.body.classList.remove("darkmode")
            document.getElementById("dark-mode-btn").innerHTML = "🌞"
        }
    }, [isDarkMode])

    return [isDarkMode, setDarkMode]
}

export default useDarkMode
// 🌞
// 🌙