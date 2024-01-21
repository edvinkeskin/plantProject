import {Col, Container, Row} from "react-bootstrap";
import Produce from "../components/Produce";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import * as React from "react";
import AddProduce from "../components/AddProduce";

const HomePage = () => {
    const [produceCollection, setProductCollection] = useState([{ name: "Item 1", price: 10 },
        { name: "Item 2", price: 15 },
        { name: "Item 3", price: 20 },
        { name: "Item 1", price: 10 },
        { name: "Item 2", price: 15 },
        { name: "Item 3", price: 20 },
        { name: "Item 1", price: 10 },
        { name: "Item 2", price: 15 },
        { name: "Item 3", price: 20 }]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveListing = (newListing) => {
        // Handle saving the listing data
        console.log('Listing saved:', newListing);
        setIsModalOpen(false);
    };
    useEffect(() => {

    }, []);

    const rows = [];
    for (let i = 0; i < produceCollection.length; i += 3) {
        const rowItems = produceCollection.slice(i, i + 3);
        const row = (
            <Row className="mb-5" key={i}>
                {rowItems.map((produce, index) => (
                    <Col key={index} xs={12} md={4}>
                        <Produce />
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