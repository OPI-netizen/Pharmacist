'use client'
import { useEffect, useState } from "react";
import { SessionCheck } from "../components/signin/sessionCheck";
import axios from "axios";
import { useRouter } from "next/navigation";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [selectedOption, setSelectedOption] = useState('personal');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getUserByEmail = async () => {
            try {
                // Assuming you need to pass the email as a query parameter
                const response = await axios.get('http://localhost:3000/user/get-user-by-email', {
                    params: {
                        email: localStorage.getItem('email') // Assuming the email is stored in local storage
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        getUserByEmail();
    }, []);

    const handleDeleteProfile = async () => {
        try {
            // Make HTTP DELETE request to backend endpoint to delete user profile
            await axios.delete('http://localhost:3000/user/delete-profile', {
                params: {
                    email: localStorage.getItem('email') // Assuming the email is stored in local storage
                }
            });

            // Clear email from local storage
            localStorage.removeItem('email');
            // Clear user data
            setUser(null);
            // Close the confirmation modal
            setShowDeleteConfirmation(false);
        } catch (error) {
            console.error('Error deleting profile:', error);
        }
    };

    const handleEditProfile = () => {
        // Redirect to edit profile page
        router.push('/edit-profile');
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <SessionCheck />
            <div className="max-w-3xl mx-auto mt-8 p-4">
                <div className="flex justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-bold">Profile</h1>
                    </div>
                    <div>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="personal"
                                checked={selectedOption === 'personal'}
                                onChange={() => setSelectedOption('personal')}
                                className="form-radio text-blue-500"
                            />
                            <span className="ml-2">Personal Info</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                value="professional"
                                checked={selectedOption === 'professional'}
                                onChange={() => setSelectedOption('professional')}
                                className="form-radio text-blue-500"
                            />
                            <span className="ml-2">Professional Info</span>
                        </label>
                    </div>
                </div>
                {user && (
                    <div className="bg-white p-6 rounded shadow">
                        {selectedOption === 'personal' && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
                                <p><span className="font-semibold">Name:</span> {user.name}</p>
                                <p><span className="font-semibold">Email:</span> {user.email}</p>
                                <p><span className="font-semibold">Password:</span> {user.password}</p>
                                {/* Render other personal info */}
                            </>
                        )}
                        {selectedOption === 'professional' && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Professional Info</h2>
                                <p><span className="font-semibold">Specialization:</span> {user.specialization}</p>
                                <p><span className="font-semibold">Workplace:</span> {user.workplace}</p>
                                <p><span className="font-semibold">Experience (years):</span> {user.years_of_experience}</p>
                                
                                {/* Render other professional info */}
                            </>
                        )}
                        {/* Delete profile button */}
                        <button onClick={() => setShowDeleteConfirmation(true)} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                            Delete Profile
                        </button>
                        <button onClick={handleEditProfile} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Edit Profile
                            </button>
                    </div>
                )}
            </div>
            {/* Delete confirmation modal */}
            {showDeleteConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow">
                        <p className="text-lg font-semibold mb-4">Are you sure you want to delete your profile?</p>
                        <div className="flex justify-end">
                            <button onClick={() => setShowDeleteConfirmation(false)} className="mr-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                                Cancel
                            </button>
                            <button onClick={handleDeleteProfile} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
