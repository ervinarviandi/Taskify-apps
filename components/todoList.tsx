"use client"
import { useState, useEffect } from 'react';
import { Todo } from '@/components/types/Todo';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { cn } from '@/lib/utils';
import { GridPattern } from './ui/grid-pattern';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null); // Track which todo is being edited
  const [editText, setEditText] = useState<string>(''); // Store the edited text

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
    setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, text: string) => {
    setEditingTodoId(id); // Set the todo being edited
    setEditText(text); // Set the current text of the todo
  };

  const saveEdit = (id: number) => {
    if (editText.trim() !== '') {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editText } : todo
        )
      );
      setEditingTodoId(null); // Exit edit mode
      setEditText(''); // Clear the edit text
    }
  };

  const cancelEdit = () => {
    setEditingTodoId(null); // Exit edit mode
    setEditText(''); // Clear the edit text
  };

  return (
    <div className='w-full h-screen rounded-lg mx-auto p-5 size-full  overflow-hidden  bg-background '>
        <div className='flex justify-center items-center'>
      <input
      className='bg-[#f4f4f5] dark:bg-[#27272a] p-2 rounded-l-lg'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a new task"
        />
      <button onClick={addTodo} className=' bg-purple-400 p-2 rounded-r-lg flex items-center gap-2'>Add Task</button>
        </div>
        <div className='flex justify-center'>
      <ul className='w-full max-w-md '>
        {todos.map((todo) => (
          <li key={todo.id} className=' my-3 rounded-lg p-2 flex justify-between  '>
            {editingTodoId === todo.id ? (
              // Edit mode
              <>
                <input
                className='  border-1 rounded-lg w-full  dark:bg-[#27272a]
           bg-[#f4f4f5]  p-2 items-center '
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className='flex justify-center gap-2 ml-2 '>
                <button onClick={() => saveEdit(todo.id)}><FaSave size={20} className='text-purple-400' /></button>
                <button onClick={cancelEdit}><MdOutlineCancel size={24} className='text-rose-600'/></button>
                </div>
              </>
            ) : (
              // View mode
              <>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <div className='flex justify-center gap-2 ml-2'>
                <button onClick={() => startEditing(todo.id, todo.text)}><MdEdit size={20} className='text-amber-500'/></button>
                <button onClick={() => deleteTodo(todo.id)}><FaRegTrashCan size={20} className='text-rose-600'/></button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default TodoList;