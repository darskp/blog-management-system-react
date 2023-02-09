// a4d3j9m4 - basic cloudnary
import { MDBBtn, MDBInput, MDBValidationItem, MDBValidation, MDBTextArea, MDBContainer } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
// import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Crud = () => {

    let { id } = useParams();
    const options = ["Travel", "Fashion", "Fitness", "Sports", "Food", "Tech"]
    const navigate = useNavigate();
    let [title, stitle] = useState('');
    let [description, sdescription] = useState('');
    let [imageUrl, onuploadImage] = useState('');
    let [category, onCategoryChange] = useState('');
    const [categoryErrmsg, setcategoryErrmsg] = useState(null);
    const [editmode, setEditmode] = useState(false);
    let data = { title, description, imageUrl, category };
    let updatedata = { title, description, category };
    useEffect(() => {
        if (id) {
            setEditmode(true);
            getsingleblog(id);
        } else {
            setEditmode(false);
            stitle('');
            sdescription('');
            onCategoryChange('');
        }

    }, [id])
    let getsingleblog = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/blogs/${id}`)
            if (response.status == 200) {
                let data = await response.json()
                stitle(data.title);
                sdescription(data.description);
                onCategoryChange(data.category);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category) {
            setcategoryErrmsg("Please select a category")
        }
        const getDate = () => {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var today = new Date();
            return today.toLocaleDateString("en-US", options);
            // let today = new Date();
            // let dd = String(today.getDate()).padStart(2, "0");
            // let mm = String(today.getMonth() + 1).padStart(2, "0")
            // let yyyy = today.getFullYear();
            // today = mm + '/' + dd + '/' + yyyy;
            // return today;
        }
        const imageValidation = (!editmode) ? imageUrl : true;
        if (title && description && category && imageValidation) {
            const currentDate = getDate();
            if (!editmode) {
                let newdata = { ...data, date: currentDate }
                try {
                    let fetching = async () => {
                        let response = await fetch('http://localhost:5000/blogs', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newdata)
                        })
                        if (response.status == 201) {
                            toast.success("Blog created successfully");
                            navigate('/admin');
                        } else {
                            toast.error("failed");
                        }
                    }
                    fetching();
                } catch (error) {
                    console.log("Failed to fetch, network issue!", error);
                }
            } else {
                let fetching = async () => {
                    const response1 = await fetch(`http://localhost:5000/blogs/${id}`)
                    let fetcheddata = await response1.json()
                    let newurl = fetcheddata.imageUrl;
                    let olddate = fetcheddata.date;
                    let updateddata = { ...updatedata, imageUrl: newurl, date: olddate };
                    await fetch(`http://localhost:5000/blogs/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updateddata)
                    })
                    toast.success("Blog updated successfully");
                    navigate('/admin');
                }
                fetching();
            }
        }
    }


    let onuploadimg = async (e) => {
        let file = e.target.files[0];
        const formData = new FormData(); //key:value pair to interact with cloudinary
        formData.append("file", file);
        formData.append("upload_preset", "a4d3j9m4");
        let response = await fetch(`https://api.cloudinary.com/v1_1/dcaky93ip/image/upload`, {
            method: "POST",
            body: formData
        });
        let imgurl = await response.json();
        onuploadImage(imgurl.url);
        // axios.post('https://api.cloudinary.com/v1_1/dcaky93ip/image/upload', formData).then((response) => {
        //     toast.info("Image uploaded successfully");
        //     // console.log(response.data.url);
        //     onuploadImage(response.data.url);
        // }).catch((error) => ("something went wrong", error));
    }
    let handleCategory = (e) => {
        setcategoryErrmsg(null);
        onCategoryChange(e.target.value)
    }
    return (
        <>
            <MDBContainer style={{ minHeight: '80vh' }}>
                <MDBValidation className="row g-3 w-100 text-center my-3" style={{ marginTop: "25px" }} noValidate onSubmit={handleSubmit}>
                    <h2 className="fs-2 fw-bold mb-4">{editmode ? "Update Blog" : "Add Blog"}</h2>
                    <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>
                        <MDBValidationItem className='col-12' feedback='Please provide a title.' invalid>
                            <MDBInput value={title || ""} name="title" type="text" onChange={(e) => stitle(e.target.value)} required label="Title" />
                        </MDBValidationItem>
                        <br />
                        <MDBValidationItem className='col-12' feedback='Please provide a description.' invalid>
                            <MDBTextArea rows={5} value={description || ""} type="text" name="Description" onChange={(e) => sdescription(e.target.value)} required label="Description" />
                        </MDBValidationItem>
                        <br />

                        {!editmode && (
                            <>
                                <MDBValidationItem className='col-12' feedback='Please upload a image.' invalid>
                                    <MDBInput type="file" required onChange={onuploadimg} label="" />
                                </MDBValidationItem>
                                <br />
                            </>
                        )}
                        <select className="categoryDropdown" onChange={handleCategory} value={category}>
                            <option>Please select Category</option>
                            {options.map((option, index) => <option value={option || ""} key={index}>{option}</option>)}
                        </select>
                        {
                            categoryErrmsg && (<div className="categoryErrmsg">{categoryErrmsg}</div>)
                        }
                        <div className="mt-4">
                            <MDBBtn type="submit" style={{ marginRight: "20px" }}>{editmode ? "Update" : "Add"}</MDBBtn>
                            <MDBBtn color="danger" style={{ marginRight: "20px" }} onClick={() => navigate("/admin")}>Back</MDBBtn>
                        </div>
                    </div>

                </MDBValidation>
                <ToastContainer />
            </MDBContainer>
        </>
    );
}

export default Crud;