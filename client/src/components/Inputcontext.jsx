import React, { createContext, useState } from 'react';

export const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [dropdownValues, setDropdownValues] = useState({});
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const setDropdownValue = (name, value) => {
    setDropdownValues((prev) => ({ ...prev, [name]: value }));
  };

  const value = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    description,
    setDescription,
    dropdownValues,
    setDropdownValue,
    quantity,
    setQuantity,
    price,
    setPrice,
  };

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
};

export default InputProvider;
