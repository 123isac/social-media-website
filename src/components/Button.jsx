import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary: "text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200",
    outline: "text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-50",
    ghost: "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
  };

  // Note: Tailwind classes are used here but since we are using Vanilla CSS primarily, 
  // we mapped these to our CSS or I will convert them to use the defined classes.
  // Wait, I decided to use Vanilla CSS in `index.css`.
  // Using Tailwind utility names in `className` won't work unless Tailwind is installed.
  // I must use my `btn-primary` class or inline styles/modules.
  // I will refactor to use the classes defined in index.css.
  
  const getVariantClass = (v) => {
    switch(v) {
      case 'primary': return 'btn-primary';
      case 'secondary': return 'btn-secondary'; // Need to define this or styling
      case 'outline': return 'btn-outline';
      default: return 'btn-primary';
    }
  };

  return (
    <button 
      className={`${getVariantClass(variant)} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
