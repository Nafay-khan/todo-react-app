import { useState } from "react";
import { useRef } from "react";

function App() {
  //hooks kuch nahi 
  const userInput = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    console.log(userInput.current.value);
    todo.push(userInput.current.value);
    setTodo([...todo])
    console.log(todo);
    userInput.current.value = ''
  }

  const deleteTodo = (index) => {
    console.log('todo deleted', index);
    todo.splice(index , 1);
    setTodo([...todo])
  }
  const editTodo = (index) => {
    const updatedValue = prompt('Enter updated value', todo[index]);
    if (updatedValue !== null && updatedValue.trim() !== "") {
      todo[index] = updatedValue;
      setTodo([...todo]);
    }
  };
  return (
    <>
      <div className="bg-blue-200 min-h-screen mx-auto">
        <div className="bg-blue-400 text-red-400 font-extrabold text-5xl text-center">
          <h1>TODO-APP</h1>
        </div>
        <div className="text-center mt-20">
          <input className="rounded w-80 h-11 pl-5 border-solid border-2 border-red-400" type="text" placeholder="enter todo" ref={userInput} />
          <button className="bg-red-400 rounded h-11 ml-1 font-bold w-20 mb-14" onClick={addTodo}>AddTodo</button>
        </div>
        <div className="text-center text-xl">
          <ul>
            {todo.map((item, index) => {
              return <li key={index}>{item}
                <button className="text-white bg-red-700 rounded w-16 ml-1" onClick={() => deleteTodo(index)}>Delete</button>
                <button className="text-white bg-green-900 rounded w-16 ml-1" onClick={()=>editTodo(index)}>Edit</button>
              </li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App