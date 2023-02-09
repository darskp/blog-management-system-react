import { MDBBtn, MDBCardImage, MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
const Pagenotfound = () => {
    let navigate=useNavigate();
    return (
        <div style={{minHeight:"75vh"}}>
            <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
                <img src="/images/pagenotfound.png" height="300px" alt="" />                
                <MDBBtn title="Go back" 
                    onClick={() => navigate('/')} className="mt-5 fs-6 bg-dark text-capitalize"> &lt;&lt; Go Back to Main Page
                </MDBBtn>
            </MDBContainer>

        </div>
    );
}

export default Pagenotfound;