import React from 'react';
import Column from './Column'; // Assurez-vous d'avoir un composant Column

const TaskBoard = () => {
  return (
    <div className="task-board">
      <Column title="À faire" />
      <Column title="En cours" />
      <Column title="En révision" />
      <Column title="Terminé" />
    </div>
  );
};

export default TaskBoard;