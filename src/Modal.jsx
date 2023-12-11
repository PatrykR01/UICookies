import React from 'react'

const Modal = ({open, onClose}) => {
    if(!open) return null
    return (
    <div onClick={onClose} className='overlay'>
        <div 
        onClick={(e) => {
            e.stopPropagation();
        }}
        className='modalContainer'
        >
            <div className='text'>
                <div className='txt-1'>
                    <h3 className='cookies_txt'>Cookies for React</h3>
                </div>
                <div className='txt-2'>
                    <p>This modal can be used on Your sites with styling on Your preferences.</p><br></br>
                    <p>You can add and style this as You wish and as You need.</p><br />
                    <p>Made by <a href="https://patryk-romanski.netlify.app">Patryk</a> to start share with passion and knowledge to building in programming.</p>
                </div>
                <div className="buttons">
                    <button className='btnFirst' onClick={onClose}>Confirm</button>
                    <button className='btnSecond' onClick={onClose}>Deny</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Modal;