import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import style from './ContentBox.module.css'
import { TaskList } from './TaskList'

export interface TaskProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export function ContentBox() {

  const [tasks, setTasks] = useState<TaskProps[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  const [checkCounter, setcheckCounter] = useState(0)

  function toggleCheck (id: number) {
    tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
    })

    countCheckedTasks();
  }

  function countCheckedTasks () {

    let checks = [];

    tasks.map(task => {
      if (task.isChecked === true) {
        checks.push(task)
      }
    })

    setcheckCounter(checks.length)

  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()


    const taskId = (parseInt(String(Math.random() * 900))) //generate random ID, no repeat.

     const newTask = {
       id: taskId,
       text: newTaskText,
       isChecked: false,
     }

    setTasks([...tasks, newTask])
    setNewTaskText('')

  }

  function deleteTask (taskToDeleteId: number) {

    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskToDeleteId)
      
    
     setTasks(tasksWithoutDeletedOne)
     toggleCheck(taskToDeleteId)

  }

  return (
    <div className={style.wrapperSkill}>
      <div className={style.contentBox}>
        <div>
          <form onSubmit={handleCreateNewTask}>
            <input
              onChange={handleNewTaskChange}
              className={style.input}
              placeholder='Adicione uma nova tarefa'
              type="text"
              onInvalid={handleNewCommentInvalid}
              required={true}
              value={newTaskText}
            />
            <button type='submit' className={style.createButton}>
              Criar
              <img src="./src/assets/plus.png" alt="" />
            </button>
          </form>

          <div className={style.emptyTask}>
            <header className={style.header}>
              <div className={style.createdTasks}>
                <p>Tarefas Criadas</p>
                <span>{tasks.length}</span>
              </div>
              <div className={style.concluedTasks}>
                <p>Concluídas</p>
                <span>{checkCounter}</span>
              </div>
            </header>
          </div>

          <TaskList 
          tasks= {tasks}
          onDeleteTask = {deleteTask}
          toggleCheck= {toggleCheck}
          /> 

        </div>
      </div>
    </div>
  )
}