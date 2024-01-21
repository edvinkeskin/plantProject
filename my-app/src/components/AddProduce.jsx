import React, {useEffect, useState} from 'react';
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
        postData()
    };


    const postData = async () => {
        try {
            let data = {
                "user_id": 99,
                "listing": listing
            }
            await fetch("http://localhost:8000/listings/", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: data
            });
        } catch (err) {
            console.error(err);
        }
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
            <h2>Add Listing</h2>
            <form>
                {Object.entries(listing).map(([key, value]) => (
                    <div key={key}>
                        <label htmlFor={key}>{key}:</label>
                        {key === 'expiryDate' ? (
                            <DatePicker
                                selected={value}
                                onChange={handleExpiryDateChange}
                                dateFormat="yyyy-MM-dd"
                            />
                        ) : key === 'image' ? (
                            <input
                                type="file"
                                id={key}
                                name={key}
                                onChange={handleImageChange}
                            />
                        ) : (
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={value}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                ))}
                <button type="button" onClick={handleSave}>
                    Save
                </button>
                <button type="button" onClick={onClose}>
                    Cancel
                </button>
            </form>
        </Modal>
    );
};

export default AddProduce;

