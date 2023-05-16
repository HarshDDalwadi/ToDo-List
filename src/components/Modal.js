import React, { useContext, useState } from 'react'
import { ToDoContext } from '../context/toDoContext';

const Modal = () => {

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [data, setData] = useState("");

	const { todo, setTodo, cnt, setCnt, show, setShow } = useContext(ToDoContext);


	const handleDone = () => {
		setCnt(cnt + 1);
		setTodo([...todo, { category: category, title: title, data: data, id: cnt }]);
		console.log(todo);
		setShow(true);
	}

	return (
		(!(show) &&
			<div className="flex justify-center items-center m-2">
				<div className="text-xl font-bold text-sky-950 bg-white rounded-xl w-1/2 p-2">
					<div className="text-3xl">Enter a To Do</div>
					<div className="m-3">
						<label htmlFor="title">Title : </label>
						<input name="title" placeholder="Enter the title" className="bg-slate-300 p-2 rounded-xl" onChange={e => setTitle(e.target.value)} />
					</div>

					<div className="m-3">
						<label htmlFor="category">Category : </label>
						<input name="categroy" placeholder="Enter the category" className="bg-slate-300 p-2 rounded-xl" onChange={e => setCategory(e.target.value)} />
					</div>

					<div className="m-3">
						<label htmlFor="body">Work : </label>
						<input name="body" placeholder="Enter to Do" className="bg-slate-300 p-2 rounded-xl"
							onChange={e => { setData(e.target.value) }} />
					</div>

					<button className="mx-5 rounded-full bg-[#00539C] w-1/5 py-1 my-5 text-white text-lg" onClick={() => (handleDone())}>Done</button>
					<button className="mx-5 rounded-full bg-[#00539C] w-1/5 py-1 my-5 text-white text-lg" onClick={() => { setShow(true) }}>Close</button>
				</div>
			</div>)
	)
}

export default Modal
