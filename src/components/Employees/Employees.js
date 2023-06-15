import React, { useEffect, useState } from 'react';
import './Employees.css';
import { useDispatch, useSelector } from 'react-redux';
import { employyeData } from '../../actions/employees';

function Employees() {
    const dispatch = useDispatch;
  dispatch(employyeData());
  const employees = useSelector((state)=>state.employees);
  console.log(employees);

  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (cardId) => {
    setOpenCardId(cardId === openCardId ? null : cardId);
  };

  return (
    <div className="app">
      <h1>Employee Cards</h1>
      <div className="card-container">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className={`card ${openCardId === employee.id ? 'open' : ''}`}
            onClick={() => handleCardClick(employee.id)}
          >
            <h3>{employee.first_name}</h3>
            {openCardId === employee.id && (
              <>
                <p>Email: {employee.email}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;
