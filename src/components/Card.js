import React, { useContext } from 'react'
import { ToDoContext } from '../context/toDoContext';

const Card = (e) => {

	const { todo, setTodo, cnt, setCnt } = useContext(ToDoContext);


	const remove = (id) => {
		setTodo(todo.filter((data) => data.id !== id));
		setCnt(cnt - 1);
	}

	return (
		<div key={e.id} className="text-lg bg-slate-100 w-11/12 flex flex-col text-left border border-solid rounded-xl m-5 p-5 border-[#00539C]">
			<div className="font-bold text-xl  text-sky-950">  Category: <span className="font-medium"> {e.category}</span> </div>
			<div className="font-bold text-xl  text-sky-950"> Title: <span className="font-medium">{e.title} </span> </div>
			<div className="font-bold text-xl  text-sky-950"> Work: <span className="font-medium"> {e.data}</span></div>
			<button onClick={() => (remove(e.id))} className="rounded-full bg-[#00539C] w-full py-1 my-5 text-white text-lg">Remove</button>
		</div>

	)
}

export default Card
