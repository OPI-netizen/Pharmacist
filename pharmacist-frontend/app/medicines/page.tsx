import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation
import ShowAllMedicine from '../components/ShowAllMedicine';

const Page = () => {
    return (
        <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center">
            <ShowAllMedicine />
            <div className="text-center">
                <Link href="/add-medicine" passHref>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Medicine
                    </button>
                </Link>
            </div>
            
        </div>
    );
};

export default Page;
