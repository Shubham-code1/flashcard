import avatar from '../../images/avatar.png';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import localStorageSlice from '../../stateManagement/slice/LocalStorageSlice';
import termViewSlice from '../../stateManagement/slice/viewTermSlice';
const {deleteCard} = localStorageSlice.actions;
const {termToView} = termViewSlice.actions;


function EachFlashCard(props){

    const {item} = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isDisabled] = useState(false);

    return(<>
                       
            <div className='holder'>
                <div className="img-holder">
                    {item.grpImage ? <img src={item.grpImage} alt="...brk"/> : <img src={avatar} alt="...brk"/>} 
                </div>
            </div>

            <div className='grp-name'>{item.groupName}</div>
  
            <div className="grp-description">
                 <p>{item.groupDescription}</p>
            </div>
  
         <div className="countcards">
                 <h3>No. of Term Cards :- <span> {item.term.length} </span></h3>
         </div>
  
         <div className="card-button">
             <button 
             className={item.term.length > 0 ? "cardview" : "cardnotView"}
             title={item.term.length > 0 ? "Click to view the terms" : "No Terms are present"}
             
             disabled={item.term.length > 0 ? isDisabled : !isDisabled} onClick={()=>{

                navigate("termcards");
                // dispatching id to termtoView reducer inorder to filter the item which is to be shown in term page
                dispatch(termToView(item.groupId));  
            }
            }>View Terms</button>

             
             <button 
             className="carddelete"
             title="Click to delete"
             onClick={()=>{
               const deleteMe =  window.confirm("Are you sure want to delete ?")

            //    dispatching the id of card to be deleted from the flashcardpage
                deleteMe ? dispatch(deleteCard(item.groupId)) : dispatch(deleteCard())
                window.location.reload();
             }}>Delete Card</button>
         </div>
        
    </>)
}

export default EachFlashCard;