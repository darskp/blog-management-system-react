import { MDBBadge, MDBRow, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Link, useLocation } from 'react-router-dom';
const ViewBlog = (props) => {
    let url = useLocation();
    let title = props.title;
    let description = props.description;
    let category = props.category;
    let imageUrl = props.imageUrl;
    let id = props.id;
    let date = props.date;
    let excerpt = props.excerpt;
    let handledelete = props.handledelete;
    let colorkey = {
        Travel: "primary",
        Fashion: "success",
        Fitness: "danger",
        Sports: "warning",
        Food: "info",
        Tech: "dark"
    }
    return (<>
        <MDBCol size="5" className="my-4 w-auto mx-auto">
            <MDBCard className="h-100 my-1 border" style={{ maxWidth: "303px" }}>

                <MDBCardImage
                    src={imageUrl}
                    alt={title}
                    position='top'
                    style={{ width: "100%", height: "180px" }}
                />

                <MDBCardBody className="p-3">
                    <h5 className="mb-3">
                        <MDBBadge color={colorkey[category]}>
                            {category}
                        </MDBBadge>
                    </h5>
                    <MDBCardTitle>
                        {url.pathname == '/admin' ?
                            <Link to={`/blog/${id}`} target="_blank" className="text-dark">{title}</Link> :
                            <Link to={`/blog/${id}`} className="text-dark">{title}</Link>}
                    </MDBCardTitle>
                    <MDBCardText className="mt-2">
                        <small className='text-muted fs-8'>Published on {date}</small>
                    </MDBCardText>
                    <MDBCardText>{excerpt(description)}
                        {url.pathname == '/admin' ?
                            <Link to={`/blog/${id}`} target="_blank"><small>Read More</small></Link> :
                            <Link to={`/blog/${id}`}><small>Read More</small></Link>}
                    </MDBCardText>
                    {url.pathname == '/admin' &&
                        <span>
                            <MDBBtn className="mt-1" tag="a" color="none" onClick={() => handledelete(id, title)}>
                                <MDBIcon
                                    fas
                                    icon="trash"
                                    style={{ color: "#dd4b39" }}
                                />
                            </MDBBtn>
                            <Link to={`/admin/editblog/${id}`}>
                                <MDBIcon
                                    fas
                                    icon="edit"
                                    style={{ color: "#55acee", marginLeft: "10px" }}
                                />
                            </Link>
                        </span>}
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </>
    );
}

export default ViewBlog;