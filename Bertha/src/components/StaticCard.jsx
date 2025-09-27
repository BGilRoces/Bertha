import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import local1 from '../assets/local/local1.jpg';
import local2 from '../assets/local/local2.jpg';
import local3 from '../assets/local/local3.jpg';
import { contactInfo } from '../data/menuData'

const StaticCard = () => {
  const localImages = [
        local1,
        local2,
        local3
  ];

  return (
    <Card title="Nuestro Espacio">
  <p className="text-[#8b9374]">Encontranos de martes a domingo en {contactInfo.direccion}</p>
      <div className="flex-1 flex flex-col mt-2">
          <Carousel images={localImages} />
      </div>
    </Card>
  );
};

export default StaticCard;