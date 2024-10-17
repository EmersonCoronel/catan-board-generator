import React from 'react';
import Number from './Number';
import styles from '../styles/Tile.module.css';

import forestImage from '../assets/tiles/forest.svg';
import hillImage from '../assets/tiles/hill.svg';
import fieldImage from '../assets/tiles/field.svg';
import pastureImage from '../assets/tiles/pasture.svg';
import mountainImage from '../assets/tiles/mountain.svg';
import desertImage from '../assets/tiles/desert.svg';

interface TileProps {
  resource: string;
  number: number;
  expansion: boolean;
}

const Tile: React.FC<TileProps> = ({ resource, number, expansion }) => {
  const getResourceImage = (resource: string): string => {
    const resourceMap: { [key: string]: string } = {
      Wood: forestImage,
      Brick: hillImage,
      Wheat: fieldImage,
      Sheep: pastureImage,
      Ore: mountainImage,
      Desert: desertImage,
    };
    return resourceMap[resource] || desertImage;  // Return a default image if the resource is missing
  };

  return (
    <div className={expansion ? styles.catanTileExpansion : styles.catanTile}>
      <img
        src={getResourceImage(resource)}
        alt={resource}
        className={styles.tileImage}
      />
      <Number value={number} />
    </div>
  );
};

export default Tile;
