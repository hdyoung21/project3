import React, { useState } from 'react';
import './ProjectList.css';

function ProjectItem({project}) {
    const [isCompleted, setIsCompleted] = useState(project.isCompleted); 
  return (
    <tr className="project_item">
        <td className="project_name">
            <div className="checkbox">
                <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly />
            </div>
        </td>
        
    </tr>
  )
}

export default ProjectItem