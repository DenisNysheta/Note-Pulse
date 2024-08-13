import React, { useState } from 'react'
import cl from "./Settings.module.scss"

function Settings() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div style={{top: isOpen ? 0 : "-60px"}} className={cl.settings }>
      <div className={cl.settings__btn_theme}>

      </div>
      <button onClick={() => setOpen(!isOpen)} className={ isOpen ? `${cl.settings__btn} ${cl.open_settings}` : `${cl.settings__btn}`}>
      </button>
    </div>
  )
}

export default Settings