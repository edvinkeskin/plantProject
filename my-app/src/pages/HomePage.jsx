import {Col, Container, Row} from "react-bootstrap";
import Produce from "../components/Produce";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";
import {useEffect, useState} from "react";

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
            {rows}
        </Container>
    )
}git 

export default HomePage;