import React from "react";
import { useNavigate } from "react-router";


function NavBar(){
        const navigate = useNavigate();
    return(<>
        <div className="nav">
            <div className="heading">FlashCard Generator</div>
                <div className="nav-links">

                    <div>
                            <button onClick={()=>{navigate("/")
                            window.location.reload();
                        }}>Create New</button>
                    </div>

                    <div>
                            <button onClick={()=>{navigate("flashCards")
                                window.location.reload();
                                    }}>My FlashCards</button>
                    </div>

                </div>
        </div>
       
    </>)
}

export default NavBar;



