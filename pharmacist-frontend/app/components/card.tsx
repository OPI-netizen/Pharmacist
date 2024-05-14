import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  id: number
}

const Card: React.FC<CardProps> = ({id, name, description, price, imageUrl }) => {
    return (
      <>
      <Link href={`/medicine/${id}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 hover:scale-105 transition duration-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          
        </div>
        <div className="relative h-40 w-full">
        <Image src={`http://localhost:3000/user/getimage/${imageUrl}`} alt={name} layout="fill" objectFit="contain" />
        </div>
        {/* <p className="px-5 text-gray-700 text-base text-center ">
            {description}
        </p> */}
        <div className="px-5 pt-4 pb-2">
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${price.toFixed(2)}
          </span>
        </div>
      </Link>
      </>
    );
  };
  
  export default Card;