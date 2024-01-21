import {Col, Container, Row} from "react-bootstrap";
import Produce from "../components/Produce";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";
import {useEffect, useState} from "react";

const HomePage = () => {
    const [produceCollection, setProductCollection] = useState([]);

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
            <h1>Listings</h1>
            {rows}
        </Container>
    )
}

export default HomePage;