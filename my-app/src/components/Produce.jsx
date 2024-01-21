import {useState} from "react";
import {Button, Card, Container, Image, Modal, Row, Col} from "react-bootstrap";
import {Snackbar} from "@mui/material";

const Product = ({ produce }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [showContactSellerMsg, setShowContactSellerMsg] = useState(false);
    const handleOpenContactSellerMsg = () => setShowContactSellerMsg(true);
    const handleCloseContactSellerMsg = () => setShowContactSellerMsg(false);

    return (
        <Container>
            <Card onClick={handleOpenModal}>
                <Card.Img variant="top" src={`http://localhost:8000/${produce.image}`} alt="Ugly Potato"/>
                <Card.Body>
                    <Card.Title>{produce.name}</Card.Title>
                    <Card.Text className="m-0">Price: ${produce.price}</Card.Text>
                    <Card.Text>Expires: {produce.expiryDate}</Card.Text>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <Row>
                        <Col md={12} lg={6}>
                            <Image src={`http://localhost:8000/${produce.image}`} alt={produce.name} rounded fluid/>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="my-2 d-flex flex-column justify-content-center">
                                <div>
                                    <h1>{produce.name}</h1>
                                    <p className="m-0 p-0">Price: ${produce.price}</p>
                                    <p>Expires: {produce.expiryDate}</p>
                                    <p className="m-0 p-0">{produce.description}</p>
                                </div>
                                <hr/>
                                <div>
                                    <h5>Seller Information</h5>
                                    <p className="m-0 p-0">{produce.seller.first_name} {produce.seller.last_name}</p>
                                    <p className="m-0 p-0">{produce.city} {produce.province} {produce.country}</p>
                                </div>
                                <hr/>
                                <div>
                                    <h5>Contact Seller</h5>
                                    <Button 
                                        className="w-100"
                                        onClick={handleOpenContactSellerMsg}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <Snackbar 
                open={showContactSellerMsg}
                autoHideDuration={3000}
                onClose={handleCloseContactSellerMsg}
                message="Seller notified"
            />
        </Container>
    );
};

export default Product;
