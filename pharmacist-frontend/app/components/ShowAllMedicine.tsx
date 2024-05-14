'use client'
import React, { useEffect, useState } from 'react';
import { SessionCheck } from './signin/sessionCheck';
import axios from 'axios';
import Card from './card';

const ShowAllMedicine = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const getAllMedicines = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/get-all-medicines');
                setMedicines(response.data);
            } catch (error) {
                console.error('Error fetching medicines:', error);
            }
        };

        getAllMedicines();
    }, []);

    return (
        <div>
            <SessionCheck />
            <div className="flex flex-wrap justify-center">
                {medicines.map((medicine) => (
                    <Card key={medicine.id} id={medicine.id} name={medicine.name} description={medicine.description} price={medicine.price} imageUrl={medicine.filename} />

                ))}
            </div>
        </div>
    );
};

export default ShowAllMedicine;
