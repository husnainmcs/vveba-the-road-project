'use client';
import React, {useEffect} from 'react';

const Toast = ({message, type = 'success', onClose}) => {
 useEffect(() => {
  const timer = setTimeout(() => {
   onClose();
  }, 3000); // Auto hide after 3 sec

  return () => clearTimeout(timer);
 }, [onClose]);

 return (
  <div className={`toast ${type}`}>
   <span>{message}</span>
  </div>
 );
};

export default Toast;
