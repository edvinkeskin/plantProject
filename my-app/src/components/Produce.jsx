import {useState} from "react";
import {Card, Container, Image, Modal} from "react-bootstrap";

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
                    <Card.Text className="m-0">Price: $100.00</Card.Text>
                    <Card.Text>Expires: 01-01-2024</Card.Text>
                </Card.Body>
            </Card>

            // Seller
            // Product Name
            // Price
            // Quantity

            // Description

            // Contact Buyer

            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton/>
                <Modal.Body>
                    <div className="d-flex flex-row">
                        <Image src={imagePath} alt="Ugly Potato" rounded/>
                        <div className="ps-3">
                            <h1>Potato</h1>
                            <p>Price: $100.00</p>
                            <p>Expires: 01-01-2024</p>
                            <p>Despite its unconventional appearance, the Ugly Potato boasts a hearty and earthy taste
                                that adds depth to a variety of dishes.
                            </p>
                            <hr/>
                            <p>Seller Information</p>
                            <p>Jackson Wang</p>
                            <p>Vancouver, British Columbia</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Product;