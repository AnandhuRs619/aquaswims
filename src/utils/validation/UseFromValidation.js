import React,{useState} from 'react'

const useFormValidation = (initialState) => {
    const [values,setValues]=useState(initialState);
    const [errors,setErrors]=useState({});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value,
        });
    }

const validate=()=>{
    let tempErrors={};
    if(!values.firstName) tempErrors.firstName="First name is required";
    if(!values.lastName) tempErrors.lastName="Last name is required";
    if(!values.email) tempErrors.email="Email is required";
    if(!values.phone) tempErrors.phone="Phone number is required";
    if(!values.message) tempErrors.message="Message required";
    setErrors(tempErrors);

    //Return true if there are no errors
    return Object.keys(tempErrors).length === 0;
};
const resetForm = () => {
    setValues(initialState);
    setErrors({});
  }

  return {values,errors,handleChange,validate,resetForm};
    
};

export default useFormValidation
