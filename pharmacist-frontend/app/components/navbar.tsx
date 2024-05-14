
'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation

const Navbar: React.FC = () => {
    const [loggedInEmail, setLoggedInEmail] = useState('')

    useEffect(() => {
        // Check if email exists in local storage
        const email = localStorage.getItem('email');
        if (email) {
            setLoggedInEmail(email);
        }
        else
        setLoggedInEmail('')
    }, []);

    const handleEmail = () => {
        

    }

    const handleLogout = () => {
        localStorage.setItem('email', '');
        setLoggedInEmail('');
        // Reload the page
        window.location.reload();

    }

    return (
        <nav className="bg-green-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link href="/">
                        <span className="cursor-pointer text-3xl font-semibold">TelePharma</span>
                    </Link>
                </div>
                <div>
                    <ul className="flex space-x-6">
                        {/* <li>
                            <Link href="/home">
                                <span className="cursor-pointer hover:text-gray-300 transition-colors duration-300 font-bold">Home</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/about">
                                <span className="cursor-pointer hover:text-gray-300 transition-colors duration-300 font-bold">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/medicines">
                                <span className="cursor-pointer hover:text-gray-300 transition-colors duration-300 font-bold">Medicines</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile">
                                <span className="cursor-pointer hover:text-gray-300 transition-colors duration-300 font-bold">Profile</span>
                            </Link>
                        </li>

                        <li>
                            {
                                loggedInEmail ?
                                    <button className="cursor-pointer hover:text-gray-300 transition-colors duration-300 font-bold" onClick={handleLogout}>Logout</button>
                                    :
                                    <Link href="/signin">
                                        <span className="cursor-pointer hover:text-gray-300 transition-colors duration-300 font-bold">Sign In</span>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

