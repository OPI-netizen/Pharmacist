'use client'
import React, { useEffect, useState } from 'react';
import { SessionCheck } from './signin/sessionCheck';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditProfile = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        years_of_experience: 0,
        specialization: '',
        workplace: '',
    });
    const [selectedOption, setSelectedOption] = useState('personal');
    const router = useRouter();

    useEffect(() => {
        const getUserByEmail = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/get-user-by-email', {
                    params: {
                        email: localStorage.getItem('email')
                    }
                });
                console.log(response.data);
                setUser(response.data);
                // Initialize form data with user data
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password,
                    years_of_experience: response.data.years_of_experience,
                    specialization: response.data.specialization,
                    workplace: response.data.workplace,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        getUserByEmail();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make HTTP PUT request to update user profile
            const response = await axios.put('http://localhost:3000/user/update-profile', formData);
            // Redirect to profile page after successful update
            if(response.data.affected > 0){
                toast.success('Profile updated successfully!');
                router.push('/profile');
            }

        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div>
            <SessionCheck />
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            disabled
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="years_of_experience" className="block text-gray-700 font-bold mb-2">
                            Years of Experience
                        </label>
                        <input
                            type="number"
                            id="years_of_experience"
                            name="years_of_experience"
                            value={formData.years_of_experience}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="specialization" className="block text-gray-700 font-bold mb-2">
                            Specialization
                        </label>
                        <input
                            type="text"
                            id="specialization"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="workplace" className="block text-gray-700 font-bold mb-2">
                            Workplace
                        </label>
                        <input
                            type="text"
                            id="workplace"
                            name="workplace"
                            value={formData.workplace}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
