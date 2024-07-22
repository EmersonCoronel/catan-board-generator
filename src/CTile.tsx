import React from 'react';
import CNumber from './CNumber';
import woodImage from './assets/images/tiles/forest.svg';
import brickImage from './assets/images/tiles/hill.svg';
import wheatImage from './assets/images/tiles/field.svg';
import sheepImage from './assets/images/tiles/pasture.svg';
import oreImage from './assets/images/tiles/mountain.svg';
import desertImage from './assets/images/tiles/desert.svg';

interface TileProps {
  resource: string;
  number: number;
  expansion: boolean;
}

const CTile: React.FC<TileProps> = ({ resource, number, expansion }) => {
  const getResourceImage = (resource: string): string => {
    const resourceMap: { [key: string]: string } = {
      Wood: woodImage,
      Brick: brickImage,
      Wheat: wheatImage,
      Sheep: sheepImage,
      Ore: oreImage,
      Desert: desertImage,
    };
    return resourceMap[resource] || './assets/images/tiles/desert.svg';
  };

  return (
    <div className={expansion ? 'catan-tile-expansion' : 'catan-tile'}>
      <img
        src={getResourceImage(resource)}
        alt={resource}
        style={{ width: '100%', height: '100%' }}
      />
      <CNumber value={number} />
    </div>
  );
};

export default CTile;
