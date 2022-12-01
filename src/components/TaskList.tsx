
import { Task } from './Task'

import style from './TaskList.module.css'

interface TaskListProps {
  tasks: TaskProps[];
  onDeleteTask: (task: number) => void;
  toggleCheck: (id: number) => void;
}

interface TaskProps {
  id: number;
  text: string;
}

export function TaskList({toggleCheck, tasks, onDeleteTask }: TaskListProps) {

  const isTasksEmpty = tasks.length === 0;

  if (isTasksEmpty) {
    return (
      <div className={style.emptyTaskMessage}>
        <img src="./src/assets/Clipboard.png" alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
  } else {
    return (
      <div className={style.filledTask}>

        <div className={style.filledTaskMessage}>
          {tasks.map(task => {
            return <Task 
            key={task.id} 
            id={task.id} 
            text={task.text} 
            onDeleteTask= {onDeleteTask}
            toggleCheck= {toggleCheck}
            
            />
          })
            
        }  
        </div>
      </div>
    )
  }








}
