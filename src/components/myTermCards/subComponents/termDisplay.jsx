
import avatar from '../../../images/avatar.png';
import { useSelector } from "react-redux";


function TermDisplay(props){

    const myState = useSelector((state)=>{
        return state.termToBeViewed;
    })

    const idValue = useSelector((state)=>{
        return state.id;
    })

    return(<>
    { 

    // here individual termcard is being filtered as per the idvalue recieved after clicking the button & same is being displayed after mapping.

    
        myState[0].term.filter((item,index)=>{return index === idValue}).map((item,index)=>{
                    return(
                            <div key={index} className="termdisplay" >
                                <div className="photo">
                                <img src={item.termImage ? item.termImage : avatar} alt=""/>
                            </div>

                            <div className="term-description">
                                <h3>Term Name:- {item.termName}</h3>
                                <p> Term Description:- {item.termDescription}</p>
                            </div>
                    </div>
                    
                    )
            })
    }


    </>)
}

export default TermDisplay;