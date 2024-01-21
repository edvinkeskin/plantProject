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
    }, [produceCollection]);

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
            <Row>
                <Col className="mb-3">
                    <h1>Produces</h1>
                </Col>
            </Row>
            <Row>
                <Col className="p-0">
                    {rows}
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;