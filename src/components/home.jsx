import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import ViewBlog from "./ViewBlog";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        try {
            fetching();
        }
        catch (error) {
            console.log(error);
        }
    }, [data])
    let fetching = async () => {
        let response = await fetch('http://localhost:5000/blogs')
        if (response.status == 200) {
            let data1 = await response.json();
            setData(data1);
        } else {
            toast.error("Something went wrong")
        }
    }


    const handledelete = async (id, title) => {
        if (window.confirm("Are you sure that you wanted to delete that blog?")) {
            await fetch(`http://localhost:5000/blogs/${id}`, {
                method: 'DELETE'
            });
            toast.success(`Blog has been permanently deleted.`);
        }
    }

    const excerpt = (str =>
        str.substring(0, 150) + "... "
    )
    return (
        <>
            <MDBRow className="w-100">
                {/* {data.length == 0 && (
                    <MDBTypography className="text-center mb-0" tag="h2">
                        No Blog Found
                    </MDBTypography>
                )} */}
                <MDBCol>
                    <MDBContainer>
                        <MDBRow>
                            {data.map(item =>
                                <ViewBlog
                                    title={item.title} description={item.description} category={item.category}
                                    date={item.date} id={item.id} imageUrl={item.imageUrl}
                                    excerpt={excerpt}
                                    handledelete={handledelete}
                                />
                            )}
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
            <ToastContainer/>
        </>

    );
}

export default Home;