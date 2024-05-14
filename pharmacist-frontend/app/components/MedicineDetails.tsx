'use client'
import { useEffect, useState } from "react";
import { SessionCheck } from "./signin/sessionCheck";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const MedicineDetails = ({ id }) => {
    const router = useRouter()
    const [medicine, setMedicine] = useState(null);

    useEffect(() => {
        const getMedicine = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/user/get-medicine-by-id/${id}`
                );
                setMedicine(response.data);
            } catch (error) {
                console.error("Error fetching medicine:", error);
            }
        };
        getMedicine();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(
                `http://localhost:3000/user/delete-medicine/${id}`
            )
            .then(resp => toast.success('medicine deleted'))

            router.push('/medicines')

            console.log("Medicine deleted successfully");
            // Redirect to the medicine list page after deletion
            // Example: router.push('/medicine-list');
        } catch (error) {
            console.error("Error deleting medicine:", error);
        }
    };

    return (
        <div>
            <SessionCheck />
            {medicine && (
                <div>
                    <Image src={`http://localhost:3000/user/getimage/${medicine.filename}`} alt={medicine.name} height={100} width={100} />
                    <h1>{medicine.name}</h1>
                    <p>Price: {medicine.price}</p>
                    <p>Description: {medicine.description}</p>

                    <div>
                        <Link href={`/medicine/edit/${id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Edit
                            </button>
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedicineDetails;
