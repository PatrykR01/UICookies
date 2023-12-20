import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import "./index.css";

const Modal = ({open, onClose}) => {
    if(!open) return null

    return (
        <div  
        className='overlay'>
            <AnimatePresence>
            <motion.div 
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20 }}
                className='modalContainer'>
            <div className='text'>
                <div className='txt-1'>
                    <h3 className='cookies_txt'>Cookies for React</h3>
                </div>
                <div className='txt-2'>
                    <p>This modal can be used on Your sites with styling on Your preferences.</p><br></br>
                    <p>You can add and style this as You wish and as You need.</p><br />
                    <p>Made by <a href="https://patryk-romanski.netlify.app">Patryk</a> to start share with passion and knowledge to building in programming.</p><br />
                    <p>I have been inspired by this <a href="https://twitter.com/emilkowalski_/status/1683832539490942978">tweet</a>.</p><br />
                    <p>Made with some components from <a href="">Emil</a> and <a href="https://www.framer.com/motion/">Framer Motion</a>. Thank You for inspiration.</p>
                </div>
                <div className="buttons">
                    <button 
                    className='btnFirst' onClick={onClose}><span>Accept</span></button>
                    <button className='btnSecond' onClick={onClose}><span>Deny</span></button>
                </div>
            </div>

        </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Modal;