import React from 'react'
import TaskSection from './TaskSection';
import { TASKS } from './taskList';

const Task = () => {
    const taskItem = TASKS.map(tsk =>(
        <TaskSection 
        key={tsk.id}
        title={tsk.title}
        number={tsk.number}
        cardTitleProgress={tsk.cardTitleProgress}
        image={tsk.image}
        cardImage={tsk.cardImage}
        />
    ))
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8  px-9 py-6 sm:px-[4.4rem] sm:py-[4rem] bg-gray-50  max-w-[1920px] mx-auto">
      {taskItem}
    </main>
  );
}

export default Task