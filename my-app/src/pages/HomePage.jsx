import {Container} from "react-bootstrap";
import Produce from "../components/Produce";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";

const HomePage = () => {
    return (
        <Container>
            <NewHeader/>
            <p>UglyProduce</p>
            <Produce/>
        </Container>
    )
}

export default HomePage;