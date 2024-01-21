import React, { useState, useEffect } from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';

const Header = () => {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('Choose Location');

    // useEffect(() => {
    //     // Replace with your actual API call
    //     fetch('https://your-api-url.com/locations')
    //         .then(response => response.json())
    //         .then(data => setLocations(data));
    // }, []);

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Ugly Produce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedLocation}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        
                        {locations.map((location, index) => (
                            <Dropdown.Item key={index} onClick={() => setSelectedLocation(location)}>Victoria</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;