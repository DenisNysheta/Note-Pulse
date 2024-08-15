import React, { useEffect, useMemo, useState } from 'react'
import cl from "./Contact.module.scss"

import instagram from "../../assets/images/socials/instagram.png"
import linkedin from "../../assets/images/socials/linkedin.png"
import github from "../../assets/images/socials/github.png"
import gmail from "../../assets/images/socials/gmail.png"
import animateLetters from '../../assets/scripts/animateLetters'

function Contact() {

    const [appearance, setAppearance] = useState(0)
    let phrase = `I will be glad to receive both your wishes and criticism on networks.`
    let listLetters =  animateLetters(phrase, cl.letter_grettings, "greetings", 1, ".4s")

    useEffect(() => {
        setTimeout(() => {
            setAppearance(1)
        },3500)
    },[])

  return (
    <>
        <p style={{opacity: appearance}} className={cl.infoForm__describe}>
          {listLetters.map(letter => letter)}
        </p>
        <ul className={cl.list}>
            <li className={cl.list__item}>
                <a target='blank' href="https://www.instagram.com/realn_o.nerealn_o/">
                    <img src={instagram} alt="" />
                </a>
            </li>
            <li className={cl.list__item}>
                <a target='blank' href="https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D0%BD%D0%B8%D1%89%D0%B5%D1%82%D0%B0-927b522a8/">
                    <img src={linkedin} alt="" />
                </a>
            </li>
            <li className={cl.list__item}>
                <a href="mailto:nisetadenis@gmail.com">
                    <img src={gmail} alt="" />
                </a>
            </li>
            <li className={cl.list__item}>
                <a target='blank' href="https://github.com/DenisNysheta">
                    <img src={github} alt="" />
                </a>
            </li>
        </ul>
    </>
  )
}

export default Contact