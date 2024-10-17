import React from 'react';
import styles from '../styles/Number.module.css';

import num2 from '../assets/numbers/2.png';
import num3 from '../assets/numbers/3.png';
import num4 from '../assets/numbers/4.png';
import num5 from '../assets/numbers/5.png';
import num6 from '../assets/numbers/6.png';
import num8 from '../assets/numbers/8.png';
import num9 from '../assets/numbers/9.png';
import num10 from '../assets/numbers/10.png';
import num11 from '../assets/numbers/11.png';
import num12 from '../assets/numbers/12.png';

interface NumberProps {
  value: number;
}

const Number: React.FC<NumberProps> = ({ value }) => {
  const getImageForNumber = (num: number): string => {
    const imageMap: { [key: number]: string } = {
      2: num2,
      3: num3,
      4: num4,
      5: num5,
      6: num6,
      8: num8,
      9: num9,
      10: num10,
      11: num11,
      12: num12,
    };
    return imageMap[num] || num12;
  };

  if (value === 0) {
    return null;
  }

  return (
    <div className={styles.numberContainer}>
      <img src={getImageForNumber(value)} alt={`Number ${value}`} className={styles.numberImage} />
    </div>
  );
};

export default Number;
