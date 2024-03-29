import {useState, useEffect} from "react";
import {Button, Card, Container, Image, Modal, Row, Col} from "react-bootstrap";
import {Snackbar} from "@mui/material";

const Product = ({ produce }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [showContactSellerMsg, setShowContactSellerMsg] = useState(false);
    const handleOpenContactSellerMsg = () => setShowContactSellerMsg(true);
    const handleCloseContactSellerMsg = () => setShowContactSellerMsg(false);
    const [seller, setSeller] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/users/${produce.seller}/`, {
                    method: "GET",
                    credentials: "include"
                });
                const data = await response.json();
                setSeller(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [])

    return (
        <Container>
            <Card onClick={handleOpenModal}>
                <Card.Img
                    className="maxImage"
                    variant="top"
                    src={`http://localhost:8000${produce.image}`}
                    alt="Ugly Potato"
                />
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
                            <Image
                                src={`http://localhost:8000${produce.image}`}
                                alt={produce.name}
                                rounded
                                fluid
                                style={{ width: '540px', height: '400px' }}
                             />
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
                                    <p className="m-0 p-0">Name: {seller?.first_name} {seller?.last_name}</p>
                                    <p className="m-0 p-0">Location: {produce.city}</p>
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
                message="Seller notified. Hang tight!"
            />
        </Container>
    );
};

export default Product;
