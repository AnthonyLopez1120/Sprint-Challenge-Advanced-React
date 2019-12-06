import React from "react"
import useDarkMode from "../hooks/useDarkMode"

function DarkModeBtn (props){
    const [darkMode, setDarkmode] = useDarkMode(false)

    const toggle = e =>{
        e.preventDefault()
        setDarkmode(!darkMode)
    }

    return (
    <>
        <button id= "dark-mode-btn" className= "dark-mode-btn" onClick={toggle}> 🌙 </button>
    </>
    )
}

export default DarkModeBtn