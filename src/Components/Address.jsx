import React, { useState } from 'react';
import axios from 'axios';

const Address = ({ userId }) => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/address', {
                user_id: userId,
                street,
                city,
                state,
                zip_code: zipCode,
            });
            setMessage('Address added successfully!');
            setStreet('');
            setCity('');
            setState('');
            setZipCode('');
        } catch (error) {
            setMessage('Failed to add address.');
            console.error('Add address error:', error);
        }
    };

    return (
        <div>
            <h1>Add Address</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                />
                <button type="submit">Add Address</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Address;
