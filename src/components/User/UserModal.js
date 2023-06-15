import React from "react";
import "./UserModal.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { signin } from '../../actions/auth';



export default function UserModal({ setShowUserModal }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    setShowUserModal(false);
    const user = { name:"", email:"" };
    dispatch(signin(user))
  };

  const user = useSelector((state)=>state.Auth);
  return (
    <div className="card">
    <button className="close-button" onClick={()=>setShowUserModal(false)}>
      X
    </button>
    <h2 className="card-title">{user.name}</h2>
    <p className="card-description">{user.email}</p>
    <p className="card-description" onClick={handleLogout}>LOGOUT</p>
  </div>
  );
}