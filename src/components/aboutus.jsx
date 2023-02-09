import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBTypography,
    MDBCardFooter,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';

export default function Aboutus() {
    return (
        <>
            <MDBContainer style={{ height: "73.5vh" }}>
                <MDBCard alignment='center' className='mt-5 w-75 mx-auto'>
                    <MDBTypography
                        tag="h2"
                        className="text-dark mx-4 my-4 text-center"
                    >
                        About Us
                    </MDBTypography>
                    <MDBCardBody className='mx-auto w-100'>
                        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                        <MDBCardText>
                            <p>
                                Welcome to Blogify, your one-stop solution for managing and optimizing your blog. We understand the importance of having a well-maintained and engaging blog, which is why we have developed this user-friendly and efficient blog management system.<br /><br />

                                With Blogify, you can easily create, edit, and publish content, and engage with your audience. Start managing your blog like a pro with Blogify today.
                            </p>

                        </MDBCardText>
                        {/* <MDBBtn href='#'>Button</MDBBtn> */}
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    );
}