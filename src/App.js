import './App.css';
import React, {useState} from 'react';

function App() {

    // create state vars
    const [todos, setTodos] = useState([
      {
        todo: "Walk the dog",
        isCompleted: false
      },
      {
        todo: "Take out the trash",
        isCompleted: false
      },
      {
        todo: "Go to work",
        isCompleted: false
      }
    ])


    const Form = (props) => {

      const [fillForm, setFillForm] = useState("")

      const submitHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {todo: fillForm, isCompleted: false}])
      }

      return (
        <div>
          <form onSubmit={submitHandler}>
            <input value={fillForm} onChange={e => setFillForm(e.target.value)}/>
            <button>Add Todo</button>
          </form>
        </div>
      )
    }


    // DELETE TODO
  const deleteTodo = (todoIndex) => {


    const filteredTodos = todos.filter((eachTodo, index) => {
      if (index === todoIndex) {
        return false
      } else {
        return true
      }
    })

    // set new state
    setTodos(filteredTodos)
  }

  // update after a completed is checked
  const updateTodo = (todoIndex) => {
 
    const copyTodos = [...todos]

    if(copyTodos[todoIndex].isCompleted === true) {
      copyTodos[todoIndex].isCompleted = false
    } else {
      copyTodos[todoIndex].isCompleted = true
    }
    setTodos(copyTodos)

  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form/>
      {
        todos.map((eachTodo, todoIndex) => {
          return (
          <div key={todoIndex}>
            <h3>Todo:</h3>{eachTodo.todo}
            <input type="checkbox" checked={eachTodo.isCompleted} onChange={() => updateTodo(todoIndex)}/> <br />
            <button onClick={() => deleteTodo(todoIndex)}>Delete</button>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;