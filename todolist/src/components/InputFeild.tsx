import React from "react";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<props> = ({
  todo,
  setTodo,
  handleAddTodos,
}: props) => {
  return (
    <form className="input" action="" onSubmit={(e) => handleAddTodos(e)}>
      <input
        type="text"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        ADD
      </button>
    </form>
  );
};

export default InputFeild;
