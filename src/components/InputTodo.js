import React, { useState } from "react";
import styles from "./InputTodo.module.css";
import ListFrame from "./ListFrame";
import ListItem from "./ListItem";
import TodoTitle from "./TodoTitle";
import Card from "./Card";

function InputTodo(props) {
  const [input, setInput] = useState("");
  const [storedInput, setStoredInput] = useState([]);
  console.log(storedInput);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const todoObject = {
      id: Math.random(),
      name: input,
      complated: false,
    };
    setStoredInput([...storedInput].concat(todoObject));
    setInput("");
  };

  const removeHandler = (id) => {
    const updatedInputs = [...storedInput].filter((item) => item.id !== id);
    console.log(updatedInputs);
    setStoredInput(updatedInputs);
  };

  const handleCheckbox = (id) => {
    const updatedInputs = [...storedInput].map((todo) => {
      if (todo.id === id) {
        todo.complated = !todo.complated;
      }
      return todo;
    });
    setStoredInput(updatedInputs);
  };

  return (
    <>
      <TodoTitle title="What is Your Plan?" />
      <form className={styles["input-container"]} onSubmit={submitHandler}>
        <input
          className={styles.input}
          placeholder="Enter Your Task"
          value={input}
          onChange={changeHandler}
        ></input>
        <button className={styles["input-button"]} type="submit">
          Add todo
        </button>
      </form>
      <ListFrame>
        {storedInput.map((item) =>
          item.complated || item.name === "" ? null : (
            <ListItem
              task={item.name}
              key={item.id}
              onRemoveHandler={() => removeHandler(item.id)}
              checked={item.complated}
              onChange={() => handleCheckbox(item.id)}
            />
          )
        )}
      </ListFrame>
      <TodoTitle title="Finnished Tasks" />
      <ListFrame>
        {storedInput.map((item) =>
          item.complated ? (
            <ListItem
              task={item.name}
              key={item.id}
              onRemoveHandler={() => removeHandler(item.id)}
              checked={item.complated}
              onChange={() => handleCheckbox(item.id)}
            />
          ) : null
        )}
      </ListFrame>
    </>
  );
}

export default InputTodo;
