import React, { useState } from 'react';
import './ProjectList.css';

function ProjectItem({ project, deleteProject }) {
    const [isCompleted, setIsCompleted] = useState(project.isCompleted); 
  return (
    <tr className="project_item">
        <td className="project_name">
            <div className="checkbox">
                <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly />
            </div>
            <p>{project.name}</p>
        </td>
        <td>
           {isCompleted ? 'Complete' : 'Incomplete'} 
        </td>
        <td>
            <button className="deleteBtn" type="button" onClick={() => deleteProject(project._id)}>
                Delete
            </button>
        </td>
    </tr>
  );
}

export default ProjectItem;