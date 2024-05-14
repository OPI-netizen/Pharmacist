'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AddMedicine = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        description: ''
    });
    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('myfile', file);

            await axios.post('http://localhost:3000/user/add-medicine', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success('Medicine added successfully!');
            setFormData({
                name: '',
                price: 0,
                description: ''
            });
            setFile(null);
        } catch (error) {
            console.error('Error adding medicine:', error);
            toast.error('Error adding medicine. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-center">Add Medicine</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image:</label>
                    <input type="file" id="image" name="image" onChange={handleFileChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Medicine</button>
                </div>
            </form>
        </div>
    );
};

export default AddMedicine;
