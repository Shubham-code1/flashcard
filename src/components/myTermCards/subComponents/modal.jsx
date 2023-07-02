import { BiCopy } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import './modal.css'
import { useState,useRef } from "react";
import ModalShareButton from "./modalShareButton";
import modalShareData from "../modalShareData";


function Modal({closeModal}){

    const inputRef = useRef(null);
    const [close] = useState(false);
    const [link,setLink] = useState("");


    //function to copy the link
    const copyToClipboard = ()=>{
       
        inputRef.current.select();
               
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(inputRef.current.value)
                        .then(() => {
                            alert('Copied to clipboard: ' + inputRef.current.value);
                        })
                        .catch((error) => {
                            console.error('Failed to copy:', error);
                        });
                    } else {
                        // Fallback for mobile browsers
                        inputRef.current.select();
                        inputRef.current.setSelectionRange(0, 99999); // For devices where clipboard is not working
                        document.execCommand('copy');
                        alert('Copied to clipboard: ' + inputRef.current.value);
                    }
                    
    }

    // sending close value to parent Component i.e TermCards
 
    const handlechange = () =>{
        closeModal(close);
    }

       // recieving value from ModalShareButton.

    const linkValue = (myLink)=>[
            setLink(myLink)
    ]


    return (<>
        <div className={`main-modal`}>
            <button className="modal-close-button"
              onClick={handlechange}
            >X</button>
            <div>
                <h2 className="modal-head">Share</h2>

                <div className="middle-modal">
                    <div className="mm-link">
                                                                                 {/* Here below dummy default link is provided */}
                        <input  readOnly ref={inputRef} value={link ? link : "https://flashcardshubham.netlify.app/"}></input>
                        
                    </div>
                  
                    <div className="mm-button">
                            <button title="click to copy" onClick={copyToClipboard}><BiCopy/></button>
                        <button><AiOutlineShareAlt/></button> 
                    </div>
                
                </div>

                <div className="below-modal">
                       
                        {
                                modalShareData.map((item,index)=>{
                                    return(<>
                                            <div key={item.id}>
                                                <ModalShareButton item={item} link={linkValue}/>
                                            </div>
                                             
                                    </>)
                                })
                        }

                </div>

            </div>
        </div>

        
    </>)
}

export default Modal;