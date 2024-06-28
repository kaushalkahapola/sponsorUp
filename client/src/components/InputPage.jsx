import React, { useContext } from 'react';
import { InputField, InputDescri, Inputdrpd } from './Input';
import { InputContext } from './Inputcontext';

const InputPage = () => {
  const {
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
  } = useContext(InputContext);

  return (
    <div>
      <InputField
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputDescri
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Inputdrpd
        value={dropdownValue}
        onChange={(e) => setDropdownValue(e.target.value)}
      />
      <InputField
        label="Quantity"
        type="number"
        placeholder="Enter quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <InputField
        label="Price"
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
};

export default InputPage;
