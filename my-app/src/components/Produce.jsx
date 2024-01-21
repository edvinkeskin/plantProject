import {useState} from "react";
import {Button, Card, Container, Image, Modal} from "react-bootstrap";

const Product = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const imagePath = `${process.env.PUBLIC_URL}/UglyPotato.jpeg`;

    return (
        <Container style={{width: "20rem"}}>
            <Card onClick={handleOpenModal}>
                <Card.Img variant="top" src={imagePath} alt="Ugly Potato"/>
                <Card.Body>
                    <Card.Title>Potato</Card.Title>
                    <Card.Text className="m-0">Price: $10.00</Card.Text>
                    <Card.Text>Expires: 01-01-2024</Card.Text>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <div className="d-flex flex-row">
                        <Image src={imagePath} alt="Ugly Potato" rounded/>
                        <div className="ps-3 d-flex flex-column justify-content-center">
                            <div>
                                <h1>Potato</h1>
                                <p className="m-0 p-0">Price: $10.00</p>
                                <p>Expires: 2024-01-01</p>
                                <p className="m-0 p-0">
                                    Despite its unconventional appearance, the Ugly Potato boasts a hearty and earthy
                                    taste that adds depth to a variety of dishes.
                                </p>
                            </div>
                            <hr/>
                            <div>
                                <h5>Seller Information</h5>
                                <p className="m-0 p-0">Richard Lee</p>
                                <p className="m-0 p-0">Vancouver, BC Canada</p>
                            </div>
                            <hr/>
                            <div>
                                <h5>Contact Seller</h5>
                                <Button className="w-100">Send</Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Product;