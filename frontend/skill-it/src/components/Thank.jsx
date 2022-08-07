import { useLocation } from "react-router-dom";

function Thank(){
    const location = useLocation();
    const {instructor} = location.state;
    // console.log(instructor);
    return(
        <>  <div className="background-thanks">
                <div class="quote floating-text"> THANK YOU!! <br /> {instructor}<br />For Contributing. </div>
            </div>
        </>
    )
}

export default Thank;