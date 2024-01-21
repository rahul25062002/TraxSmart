// import React from 'react';
import { toast } from 'react-toastify';

function FormValidator({ formData, mandatoryFields }) {
  
  const validateForm = () => {
    let valid = true;
     console.log(mandatoryFields);
    for (const field of mandatoryFields) {
      const fieldValue = formData[field] && typeof formData[field] === 'string' ? formData[field].trim() : formData[field];
      if (!fieldValue) {
        document.getElementById(field)?.classList.add('border-red-500');
        valid = false;
      } else {
        document.getElementById(field)?.classList.remove('border-red-500');
      }
    }

    if (!valid) {
      toast.error('Please fill in all mandatory fields.', {
        position: 'top-right',
        className: 'font-bold text-xl',
        autoClose: 3000,
      });
    }

    return valid;
  };

  return validateForm();
}

export default FormValidator;

