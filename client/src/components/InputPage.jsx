import React, { useContext } from 'react';
import { InputField, InputDescri, Inputdrpd } from './Input';
import { InputContext } from './Inputcontext';

const Page = () => {
  const {
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
        name="category"
        value={dropdownValues.category || ''}
        onChange={setDropdownValue}
        options={['Music', 'Entertainment', 'Movies', 'Arts']}
      />
      <Inputdrpd
        name="genre"
        value={dropdownValues.genre || ''}
        onChange={setDropdownValue}
        options={['Rock', 'Jazz', 'Pop', 'Classical']}
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

export default Page;
