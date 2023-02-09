import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    MDBCard,
    MDBBadge,
    MDBCardBody,
    MDBTypography,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
const Readblog = () => {
    let navigate = useNavigate();
    let [blog, setblog] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        if (id) {
            getsingleblog();
        }
    }, []);
    let getsingleblog = async () => {
        const response = await fetch(`http://localhost:5000/blogs/${id}`)
        if (response.status == 200) {
            let data = await response.json()
            setblog(data);
            toast.info("Loading...")
        }
        else {
            toast.error("Something went wrong")
        }
    }
    let colorkey = {
        Travel: "primary",
        Fashion: "success",
        Fitness: "danger",
        Sports: "warning",
        Food: "info",
        Tech: "dark"
    }
    return (
        <>
            <MDBCard className='mb-3 mx-auto mt-4 w-75' >
                <MDBCardImage position='top' src={blog.imageUrl} alt={blog.title} />
                <MDBCardBody>
                    <div className="mx-4 mt-2 p-0 d-flex justify-content-between align-items-center">
                        <MDBCardText className="mt-2">
                            <small className='text-muted'>Blog by <strong>Blogify Admin</strong> / {blog.date}</small>
                        </MDBCardText>
                        <h6>
                            <MDBBadge className="styleinfo me-2" color={colorkey[blog.category]}>
                                {blog.category}
                            </MDBBadge>
                        </h6>
                    </div>
                    <MDBTypography
                        tag="h2"
                        className="text-dark mx-4 my-0 text-left"
                        style={{ display: "inline-block", width: "100%" }}
                    >
                        {blog.title}
                    </MDBTypography>

                    <MDBCardBody>
                        <MDBTypography className="md-0 my-0 lead" style={{whiteSpace:"pre-line"}}>
                            {blog.description}
                        </MDBTypography>
                     
                            <MDBCardText className="mt-5">
                                <small title="Go back"
                                    onClick={() => navigate('/')} className="mt-5 fs-8 " style={{ cursor: "pointer" }}> &lt;&lt; Go Back</small>
                            </MDBCardText>
                    </MDBCardBody>
                </MDBCardBody>
            </MDBCard>
            <ToastContainer />
        </>
    );
}

export default Readblog;