
import { useEffect,useState } from 'react';
import EachFlashCard from './eachFlashCard';


function FlashCards(){

    const localStorageValue = JSON.parse(localStorage.getItem("formValue"))
    


    const [showFlashCard,setshowFlashCard] = useState(true);


    let slicedeightItem = localStorageValue.slice(0,4); 

const [showButton, setShowButton] = useState(true);
const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
        const handleScroll = () => {
          // here clearing the previous timeout
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
    
          // hiding the button after 1 second of scrolling
          setShowButton(false);
    
          // setting a new timeout to show the button after scrolling stops
          const timeout = setTimeout(() => {
            setShowButton(true);
          }, 1000);
    
          setScrollTimeout(timeout);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollTimeout]);
    


    return(<>
          {/* flashcard starts here */}
    <div className="card-page">  
      <div className="card-section">

   {/* show more & less button */}
                <div className="show-btn-div">
                            { 
                                localStorageValue.length > 4 ?  
                                    <button 
                                    style={{ display: showButton ? 'block' : 'none' }}
                                    className={`sm-sl ${showFlashCard ? "show-more" : "show-less"}`}
                                    onClick={()=>{
                                                    setshowFlashCard(!showFlashCard);
                                                }}>
                                                    {showFlashCard ? "Show all Cards" : "Show less cards"}
                                    </button> : null  
                            }
                </div> 

           {/* eachcard starts here*/}

            {/* if no card is created create-message div will appear */}

           {
                localStorageValue.length === 0 ?  

                <div className="create-message">
                        <h1>Sorry !</h1> 
                        <h3 id="msg1">No FlashCards are available</h3>
                        <h3 id="msg2">Please visit to Create New Section...</h3>
                </div>
            
            :
                    showFlashCard ? 
                     // here only eight items will be mapped at initial render
                    slicedeightItem.map((item,index)=>{
                            return (<>
                                    <div className='each-card' key={index}>
                                            <EachFlashCard item={item}/>
                                    </div>
                            </>)
                          })  

:
                            
                  localStorageValue.map((item,index)=>{
                    return (<>
                      {/* here all cards will be mapped */}
                            <div className='each-card' key={index}>
                                                    <EachFlashCard item={item}/>
                                            </div>
                    </>)
})   
   
   }
    {/* eachcard ends here*/} 
    </div>
    </div>
    {/* flashcard ends here */}
    </>

    )
}

export default FlashCards;