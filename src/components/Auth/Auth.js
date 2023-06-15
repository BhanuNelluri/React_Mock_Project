import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../actions/auth';
import { employyeData } from '../../actions/employees';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";
import { useSelector } from 'react-redux';

export default function Auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
//   const employees = useSelector((state)=>state.employees);
//   console.log(employees);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };
    dispatch(signin(user))
    dispatch(employyeData())
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};