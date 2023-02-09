import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBValidation,
    MDBValidationItem,
    MDBCheckbox,
    MDBCardText
}
    from 'mdb-react-ui-kit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


function AdminLogin() {
    let refvalueemail = useRef(null);
    let refvaluepassword = useRef(null);
    let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        if (refvalueemail.current.value == "admin@gmail.com" && refvaluepassword.current.value == '123') {
            navigate('/admin')
        } else {
            toast.error("Invalid credentials")
            // navigate(0);
            refvaluepassword.current.value = null;
        }
    }


    // let handleClick = () => {
    //     refvalueemail.current.value = null;
    //     refvaluepassword.current.value = null;
    return (
        <>
            <MDBValidation onSubmit={handleSubmit} noValidate>
                <MDBContainer fluid className='my-4'>
                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>
                            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column' >

                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>
                                    <MDBValidationItem className='col-12 text-danger' feedback='Please provide a title.' invalid>
                                        <MDBInput wrapperClass='mb-4 w-100' ref={refvalueemail} label='Email address' id='formControlLg' type='email' size="lg" />
                                    </MDBValidationItem>
                                    <MDBInput wrapperClass='mb-4 w-100' ref={refvaluepassword} label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                                    <MDBBtn size='lg'>
                                        Login
                                    </MDBBtn>
                                    <MDBCardText>
                                    </MDBCardText>
                                    <MDBCardText>
                                        Email : admin@gmail.com Password : 123
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBValidation>
            <ToastContainer />
        </>
    );
}
export default AdminLogin;




