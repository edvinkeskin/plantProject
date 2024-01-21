import {useState} from "react";
import {Button, Card, Container, Image, Modal, Row, Col} from "react-bootstrap";

const Product = ({ produce }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const imagePath = `${process.env.PUBLIC_URL}/UglyPotato.jpeg`;

    return (
        <Container>
            <Card onClick={handleOpenModal}>
                <Card.Img variant="top" src={imagePath} alt="Ugly Potato"/>
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
                            <Image src={imagePath} alt={produce.name} rounded fluid/>
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
                                    <p className="m-0 p-0">Richard Lee</p>
                                    <p className="m-0 p-0">{produce.city} {produce.province} {produce.country}</p>
                                </div>
                                <hr/>
                                <div>
                                    <h5>Contact Seller</h5>
                                    <Button className="w-100">Send</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Product;
