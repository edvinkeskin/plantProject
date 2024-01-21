import {Col, Container, Row} from "react-bootstrap";
import Produce from "../components/Produce";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import * as React from "react";
import AddProduce from "../components/AddProduce";

const HomePage = () => {
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
        formData.append("seller", 1);
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
            <Row className="mb-5" key={i}>
                {rowItems.map((item, index) => (
                    <Col key={index} xs={12} md={4}>
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
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button style={{fontSize: '4vh'}} onClick={handleOpenModal}>Add Produce</Button>
            </div>
            <AddProduce className="m-0 p-0"
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveListing}
            />
            {rows}
        </Container>
    )
}

export default HomePage;