"use client"

import React from 'react';
import Card from './components/card';
import SearchBar from './components/search'; // Correct the import path
import { SessionCheck } from './components/signin/sessionCheck';

export default function Home() {
  const medications = [
    {
      name: 'Amoxicillin',
      description: 'Used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.',
      price: 23.50,
      imageUrl: '/Amoxicillin-500mg.jpg'
    },
    {
      name: 'Ibuprofen',
      description: 'It can be used to relieve pain and inflammation in conditions such as osteoarthritis, rheumatoid arthritis, and acute gout.',
      price: 8.99,
      imageUrl: '/Ibuprofen.jpg'
    },
    {
      name: 'Metformin',
      description: 'Used to improve blood sugar control in people with type 2 diabetes.',
      price: 15.00,
      imageUrl: '/Metformin.jpg'
    }
  ];

  return (
    <>
      {/* <h1 className="bg-green-800 text-white text-center py-4">Home Page</h1> */}
      {/* <SessionCheck /> */}
      <SearchBar />
      <div className="flex flex-wrap justify-center">
        {medications.map(med => (
          <Card key={med.name} name={med.name} description={med.description} price={med.price} imageUrl={med.imageUrl} />
        ))}
      </div>
    </>
  );
}



