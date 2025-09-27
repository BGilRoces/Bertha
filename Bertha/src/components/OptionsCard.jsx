import React, { useState } from 'react';
import Card from './Card';
import Carousel from './Carousel';
import cafe1 from '../assets/menu/cafes/cafe1.jpg';
import cafe2 from '../assets/menu/cafes/cafe2.jpg';
import cafe3 from '../assets/menu/cafes/cafe3.jpg';
import cafe4 from '../assets/menu/cafes/cafe4.jpg';
import cafe5 from '../assets/menu/cafes/matcha.jpg';
import comida1 from '../assets/menu/comidas/noquis.jpg';
import comida2 from '../assets/menu/comidas/milanesaconfideos.jpg';
import comida3 from '../assets/menu/comidas/bagelTrucha.jpg';
import pyp1 from '../assets/menu/comidas/tortaVasca.jpg';
import pyp2 from '../assets/menu/comidas/postre.jpg';
import pyp3 from '../assets/menu/comidas/cookies.jpg';


const OptionsCard = () => {
  const [selectedOption, setSelectedOption] = useState('Bebidas');

  const imageCollections = {
    Bebidas: [
        cafe1,
        cafe2,
        cafe3,
        cafe4,
        cafe5
    ],
    Almuerzos: [
        comida1,
        comida2,
        comida3
    ],
    PanaderiaYPasteleria: [
        pyp1,
        pyp2,
        pyp3
    ]
  };

  const options = [
    { key: 'Bebidas', label: 'Bebidas' },
    { key: 'Almuerzos', label: 'Almuerzos' },
    { key: 'PanaderiaYPasteleria', label: 'Panadería y Pastelería' }
  ];

  return (
    <Card >
      <div className="flex-1 flex flex-col">
        {/* Options buttons */}
  <div className="flex flex-wrap gap-2 mb-6 justify-center mt-2">
          {options.map((option) => (
            <button
              key={option.key}
              onClick={() => setSelectedOption(option.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                selectedOption === option.key
                  ? 'bg-[#8b9374] text-white ring-2 ring-offset-2 ring-gray-300 shadow-md'
                  : 'bg-[#f6f6f1] text-[#8b9374] hover:bg-[#8b9374]/10'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Dynamic carousel */}
        <div className="flex-1">
          <Carousel 
            images={imageCollections[selectedOption]} 
            key={selectedOption}
          />
        </div>
      </div>
    </Card>
  );
};

export default OptionsCard;