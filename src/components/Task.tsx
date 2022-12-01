import { useState } from 'react';
import style from './Task.module.css'


interface TaskProps {
  id:number;
  text: string;
  onDeleteTask: (id: number) => void;
  toggleCheck: (id: number) => void;
}

export function Task ({text, id, toggleCheck, onDeleteTask}:TaskProps) {

  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteTask () {
    onDeleteTask(id)
  }

  function handleCheckBox () {
    toggleCheck(id)
    setIsChecked(!isChecked)
  }
  
  
  return (
    <div className={style.task}>
      <a onClick={handleCheckBox}>
         <img src={isChecked ? "./src/assets/checked.png" : "./src/assets/not-checked.png" }/> 
      </a>
      <p className={isChecked ? style.taskChecked : ''}>{text}</p>
      <a onClick={handleDeleteTask}>
        <img src="./src/assets/trash.png" alt="" />
      </a>
    </div>
  )
}