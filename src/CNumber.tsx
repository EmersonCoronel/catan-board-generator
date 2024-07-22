import React from 'react';

interface NumberProps {
  value: number;
}

const CNumber: React.FC<NumberProps> = ({ value }) => {
  const getImageForNumber = (num: number): string => {
    const imageMap: { [key: number]: string } = {
      2: '/assets/images/numbers/2.png',
      3: '/assets/images/numbers/3.png',
      4: '/assets/images/numbers/4.png',
      5: '/assets/images/numbers/5.png',
      6: '/assets/images/numbers/6.png',
      8: '/assets/images/numbers/8.png',
      9: '/assets/images/numbers/9.png',
      10: '/assets/images/numbers/10.png',
      11: '/assets/images/numbers/11.png',
      12: '/assets/images/numbers/12.png',
    };
    return imageMap[num] || '/assets/images/numbers/12.png';
  };

  if (value === 0) {
    return null;
  }

  return (
    <div className={'catan-number'}>
      <img src={getImageForNumber(value)} alt={`Number ${value}`} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default CNumber;
