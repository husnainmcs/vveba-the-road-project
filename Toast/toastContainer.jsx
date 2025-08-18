'use client';
import React, {useState, useCallback} from 'react';
import Toast from './toast';


const ToastContainer = () => {
 const [toasts, setToasts] = useState([]);

 const addToast = useCallback((message, type = 'success') => {
  const id = Date.now();
  setToasts((prev) => [...prev, {id, message, type}]);
  setTimeout(() => removeToast(id), 4000); // auto remove
 }, []);

 const removeToast = (id) => {
  setToasts((prev) => prev.filter((toast) => toast.id !== id));
 };

 // ✅ expose globally
 if (typeof window !== 'undefined') {
  window.toast = addToast;
 }

 return (
  <div className="toast-container">
   {toasts.map((toast) => (
    <Toast
     key={toast.id}
     message={toast.message}
     type={toast.type}
     onClose={() => removeToast(toast.id)}
    />
   ))}
  </div>
 );
};

export default ToastContainer;
