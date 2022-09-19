import { ReactNode } from 'react';
import './Center.css';

const Center: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='centered'>{children}</div>;
};

export default Center;
