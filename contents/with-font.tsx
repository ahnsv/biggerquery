import type { PlasmoCSConfig } from "plasmo"
import iconBase64 from "data-base64:~assets/icon.png"
// import cssText from "data-text:~/contents/with-font.css"
import cssText2 from "data-text:~/contents/google-sidebar.css"
import "./google-sidebar-base.css"

import { useEffect, useState } from "react"
 
export const config: PlasmoCSConfig = {
  matches: ["https://console.cloud.google.com/bigquery?*"],
  world: "MAIN"
}

console.log('%cPowered by BiggerQuery', 'background-color: yellow; font-size: larger');


export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText2
  return style
}

export const getShadowHostId = () => "plasmo-google-sidebar"

const GoogleSidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    document.body.classList.toggle("plasmo-google-sidebar-show", isOpen)
  }, [isOpen])

  return (
    <div id="sidebar" className={isOpen ? "open" : "closed"}>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "🟡 Close" : "🟣 Open"}
      </button>
      <img src={iconBase64} alt="Extension Icon" width={128} height={128} />
      <p>The Easiest Way to Build, Test, and Ship browser extensions</p>
    </div>
  )
}

export default GoogleSidebar
