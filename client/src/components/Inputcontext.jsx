import React, { createContext, useState } from 'react';

export const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Music');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const value = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    description,
    setDescription,
    dropdownValue,
    setDropdownValue,
    quantity,
    setQuantity,
    price,
    setPrice,
  };

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
};

export default InputProvider;
