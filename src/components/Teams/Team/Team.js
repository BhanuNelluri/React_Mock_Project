import React, { useState } from 'react';
import './Team.css';

function App({employees}) {
  

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
            <h3>{employee.name}</h3>
            {openCardId === employee.id && (
              <>
                <p>Position: {employee.position}</p>
                <p>Email: {employee.email}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
