import {Col, Container, Row, Button} from "react-bootstrap";
import Produce from "../components/Produce";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";
import {useEffect, useState} from "react";
import * as React from "react";
import AddProduce from "../components/AddProduce";
import Cookies from "js-cookie";

const HomePage = ({userId}) => {
    const [produceCollection, setProductCollection] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveListing = async (newListing) => {
        // Handle saving the listing data
        console.log('Listing saved:', newListing);
        // Create a new FormData object
        const formData = new FormData();

        // Add each field to the FormData object
        formData.append("name", newListing.name);
        formData.append("description", newListing.description);
        formData.append("city", newListing.city);
        formData.append("seller", userId);
        formData.append("price", newListing.price);
        formData.append("expiryDate", newListing.expiryDate.toISOString().split("T")[0]);

        // Add the image file if it exists
        if (newListing.image) {
            formData.append("image", newListing.image);
        }

        try {
            // Send the POST request with FormData
            const response = await fetch("http://localhost:8000/listings/", {
                method: "POST",
                credentials: "include",
                headers: {
                    "X-CSRFToken": Cookies.get("csrftoken")
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Server response:", responseData);
        } catch (error) {
            console.error("Error during POST request:", error);
        }
        setIsModalOpen(false);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/listings/?filter=expiryDate", {
                    method: "GET",
                    credentials: "include"
                });
                const data = await response.json();
                setProductCollection(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    const rows = [];
    for (let i = 0; i < produceCollection.length; i += 3) {
        const rowItems = produceCollection.slice(i, i + 3);
        const row = (
            <Row key={i}>
                {rowItems.map((item, index) => (
                    <Col className="mb-4" key={index} xs={12} md={4}>
                        <Produce produce={item}/>
                    </Col>
                ))}
            </Row>
        );
        rows.push(row);
    }

    return (
        <Container>
            <NewHeader/>
            <Row className="d-flex flex-row justify-content-between align-items-center">
                <Col className="mb-3">
                    <h1>Produce</h1>
                </Col>
                <Col>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleOpenModal}>Add Produce</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="p-0">
                    {rows}
                </Col>
            </Row>
            <AddProduce className="m-0 p-0"
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveListing}
            />
        </Container>
    )
}

export default HomePage;