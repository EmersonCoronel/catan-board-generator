import React from 'react';
import CNumber from './CNumber';

interface TileProps {
  resource: string;
  number: number;
  expansion: boolean;
}

const CTile: React.FC<TileProps> = ({ resource, number, expansion }) => {
  const getResourceImage = (resource: string): string => {
    const resourceMap: { [key: string]: string } = {
      Wood: './assets/images/tiles/forest.svg',
      Brick: './assets/images/tiles/hill.svg',
      Wheat: './assets/images/tiles/field.svg',
      Sheep: './assets/images/tiles/pasture.svg',
      Ore: './assets/images/tiles/mountain.svg',
      Desert: './assets/images/tiles/desert.svg',
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
