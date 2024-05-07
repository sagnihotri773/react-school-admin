// toastUtils.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Common function to show success toast
export const showSuccessToast = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

// Common function to show error toast
export const showErrorToast = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

// Add more utility functions if needed

export const showWarningToast = (message) => {
    toast.warning(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

export function ReturnError(response){
    if(response.data.hasOwnProperty('error')){
      if(response.data.error.hasOwnProperty('validate')){
       let valueArray=Object.values(response.data.error.validate);
       if(valueArray.length>0){
          return valueArray[0].toString();
       }
   }else if(response.data.error.hasOwnProperty('message')){
       return response.data.error.message
   }
    }else if(response.data.hasOwnProperty('message')){
        if (response.data.message === 'Unauthenticated.') {
            editFuntion();
        }else{
            return response.data.message;
        }
   }
   return null;
}


export const editFuntion = () => {
    localStorage.clear();
}