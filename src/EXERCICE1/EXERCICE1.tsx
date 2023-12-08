import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//déclaration de l'id qu'on incrémentera après pour que chaque tâche ait un id unique
let id = 0;


const EXERCICE1: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // fonction pour ajouter une ToDo à la liste
  const addTodo = () => {
    // vérification de la saisie par l'utilisateur
    if (inputValue.trim() !== '') {
      // si saisie par utilisateur, création d'un nouveau tableau avec les informations saisies
      // ... recopie de l'objet et mise à jour avec les nouvelles valeurs
      setTodos([...todos, { id: id++, text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // fonction pour cocher la checkbox lorsqu'on clique dessus 
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // fonction pour supprimer une ToDo de la liste
  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='center'>
    <div className='container'>
      <h1 className='mt'>TODO APP </h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className='border'
        />
        <button onClick={addTodo} className='border1'>ADD</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='border2' onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default EXERCICE1;
