import React, {useEffect, useState} from 'react';
import { Button } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

const AddProduce = ({isOpen, onClose, onSave}) => {
    const initialListingState = {
        name: '',
        description: '',
        city: '',
        price: '',
        expiryDate: null,
        image: null,
    };

    const [listing, setListing] = useState(initialListingState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setListing((prevListing) => ({
            ...prevListing,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setListing((prevListing) => ({
            ...prevListing,
            image: file,
        }));
    };

    const handleExpiryDateChange = (date) => {
        setListing((prevListing) => ({
            ...prevListing,
            expiryDate: date,
        }));
    };

    const handleSave = () => {
        onSave(listing);
        setListing(initialListingState);
    };

    const upperCaseFirstLetter = (name) => {
        return name === "expiryDate" ? "Expiry Date" : name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '30vw',
                    height: 'auto',
                    marginTop: '7vh',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },
            }}
        >
            <h2>New Produce</h2>
            <form className="d-flex flex-column justify-content-center">
                {Object.entries(listing).map(([key, value]) => (
                    <div className="mb-2" key={key}>
                        <label htmlFor={key}>{upperCaseFirstLetter(key)}:</label>
                        {key === 'expiryDate' ? (
                            <div>
                                <DatePicker
                                    selected={value}
                                    onChange={handleExpiryDateChange}
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        ) : key === 'image' ? (
                            <div className="mb-2">
                                <input
                                    type="file"
                                    id={key}
                                    name={key}
                                    onChange={handleImageChange}
                                />
                            </div>
                        ) : (
                            <div className="mb-2">
                                <input
                                    type="text"
                                    id={key}
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        )}
                    </div>
                ))}
                <div className="mt-4 d-flex flex-column flex-md-row justify-content-md-end">
                    <Button className="me-2 mb-2 mb-md-0" type="button" onClick={handleSave}>
                        Add Produce
                    </Button>
                    <Button type="button" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddProduce;

