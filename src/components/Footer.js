import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {AiFillFilePdf} from "react-icons/ai"
import {AiFillInfoCircle} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import "../css/Footer.css"
import Pdf from "../Data/CurriculumVitae.pdf"
import { useRef } from 'react'
import WhiteLine from './WhiteLine'

const Footer = () => {
    const footerItem1=useRef()
    const footerItem2=useRef()
    const personalInfo=useRef()
    function handleClick(){
        footerItem1.current.classList.toggle("display-none")
        footerItem2.current.classList.toggle("display-none")
        personalInfo.current.classList.toggle("display-none")
        personalInfo.current.scrollIntoView()
    }
    return (
           <footer className="footer">
               <span className="footer-message">Feel Free to Contact me</span>
               <div className="footer-container">
                   <div ref={footerItem1} className="footer-item">
                        <a className="footer-item" target="_blank" href="https://github.com/Theobirmp" rel="noopener noreferrer" id="git"><AiFillGithub/></a>
                        <label className="footer-item-label" htmlFor="git">Github</label>
                   </div>
                   <div ref={footerItem2} className="footer-item">
                        <a className="footer-item" href={Pdf} rel="noopener noreferrer" target="_blank" id="cv"><AiFillFilePdf/></a>
                        <label className="footer-item-label" htmlFor="cv">CV</label>
                   </div>
                   <div className="footer-item">
                        <button onClick={handleClick} className="footer-item" id="info"><AiFillInfoCircle/></button>
                        <label className="footer-item-label" htmlFor="info">Personal Info</label>
                   </div>
               </div>
               <WhiteLine colour="white"/>
               <div ref={personalInfo} className="personal-info display-none">
                            <span className="info-email"><AiOutlineMail/> theobirmpil@gmail.com</span>
                            <span className="info-phone"><AiOutlinePhone/> 6986615856</span>
                        </div>
           </footer>
    )
}

export default Footer
