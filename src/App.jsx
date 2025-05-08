import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from "react-icons/io";
import { setInput, addTask } from './slices/trelloSlice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const { input, lists } = useSelector(state => state.trelloReducer);
  const [activeListId, setActiveListId] = useState(null);

  const handleAddTask = (listId) => {
    dispatch(addTask({ listId })); 
    setActiveListId(null);
  };

  return (
    <div>
      <h1 className='text-center py-10 font-bold text-2xl'>Trello Clone</h1>
      <div className='flex justify-between flex-wrap px-10'>
        {lists.map((list) => (
          <div key={list.id} className='taskList border p-4 w-64 min-h-[200px] flex-grow-0 '  style={{ height: 'auto' }}>
            <h1 className='text-center font-semibold mb-2'>{list.name}</h1>

            <ul>
              {list.tasks.map(task => (
                <li key={task.id}>{task.task}</li>
              ))}
            </ul>

            {activeListId === list.id && (
              <div className='addList mt-2'>
                <input
                  type="text"
                  placeholder="Type task here..."
                  value={input[list.id] || ""}
                  onChange={(e) => dispatch(setInput({ listId: list.id, value: e.target.value }))}
                  className='border px-2 py-1 w-full'
                />
                <button
                  onClick={() => handleAddTask(list.id)}
                  className='bg-blue-500 text-white px-4 py-1 mt-2 w-full'
                >
                  Add Task
                </button>
              </div>
            )}

            <p
              onClick={() => setActiveListId(list.id)}
              className='border border-gray-400 flex items-center justify-center cursor-pointer mt-2 p-2 '
            >
              <IoMdAdd className='mr-1' /> Add Another List
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
