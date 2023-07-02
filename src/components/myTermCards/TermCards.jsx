import { BiArrowBack } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { BsFillPrinterFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import TermDisplay from "./subComponents/termDisplay";
import { useDispatch } from "react-redux";
import { AiOutlineShareAlt } from "react-icons/ai";
import idSendingSlice from "../../stateManagement/slice/idSendingSlice";
import './subComponents/modal.css'
import Modal from "./subComponents/modal";
import { useState } from "react";

// recieving idSender action by object destructuring.

const { idSender} =  idSendingSlice.actions;

function TermCards(){

    const [showModal, setShowModal] = useState(false);
    // recieving value to set for setShowModal from child component i.e Modal
      const closeModal = (val) => {
        setShowModal(val);
        document.body.style.overflow = 'auto'; // Enable scrolling on the background page
      };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // getting the value of which term to be view in termpage 
    
    const myState = useSelector((state)=>{
        return state.termToBeViewed;
    })


    return(<>


{showModal && (<div className="backdrop"></div>)}

{showModal && (<Modal closeModal={closeModal}/>)}


{

<div className="main-term">

{
    // here it will only map the state if termtoviewed has only one one item to view 

    myState.length === 1 ? myState.map((item,index)=>{
        return(
        <div className="grp-details" key={index}>
        <div className="term-back">
            {/* button to navigate back to flashcardpage */}
            <button onClick={()=>{
                navigate('/flashCards') 
                window.location.reload();
                }}><BiArrowBack/></button>
        </div>

        <div className="grp-head">
            <h2>{item.groupName}</h2>
            <p> <strong></strong>{item.groupDescription}</p>
        </div>
        </div>
        )
    }) : window.location.assign("http://localhost:3000/flashCards")
}

    <div className="term-details">
  
                <div className="termlist">
                
                    <h3 className="termlist-heading">TermCards List</h3>
                   
          
                    <div className="termlist-button">
                        { myState ? myState[0].term.map((item,index)=>{
                            return(
                            
                            <button key={index} onClick={()=>{
                               dispatch(idSender(index))  // here sending index to filter which term need to display
                            }}><span>Card</span> {index + 1}</button>
                          
                            )
                        }) : "null" }
                        </div>
                </div>
    
                <TermDisplay/>  
               
                <div className="socialMedia">
                    
                        <button className="otherbutton" 
                                    onClick={()=>{
                                    setShowModal(!showModal);
                                    document.body.style.overflow = 'hidden';
                            }}><AiOutlineShareAlt/>Share
                        </button>

                        <button onClick={()=>{
                                            window.print()
                                            }} className="otherbutton"><span><FaDownload/> </span>Download
                        </button>

                        <button onClick={()=>{
                                window.print()
                                }}className="otherbutton"> <span><BsFillPrinterFill/> </span> Print
                        </button>

                </div>
    </div>
</div>  


}
    </>)
}

export default TermCards;