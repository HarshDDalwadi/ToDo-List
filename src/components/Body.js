import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { ToDoContext } from "../context/toDoContext";

const Body = () => {

	const { todo, searched, setSearched, cnt, setShow, show } = useContext(ToDoContext);
	const [searchCat, setSearchCat] = useState("");
	const [cancel, setCancel] = useState(false);

	const searchIt = () => {
		const todos = todo.filter(e => (e.category === searchCat));
		setCancel(!cancel);
		setSearchCat("");
		console.log(searched);
		if (cancel)
			setSearched([]);
		else
			setSearched(todos);
	}


	return (
		<div>
			<Modal />
			{show && <div className="flex flex-col items-center">
				<button onClick={() => (setShow(false))} className="rounded-full bg-[#00539C] w-1/6 py-1 px-2 m-5 font-bold text-white text-lg">Add A ToDo</button>
				<div className="text-xl text-sky-950 flex">
					<div className="font-bold w-full">
						Search Category :
					</div>
					<input type="text" className="bg-slate-300 p-2 rounded-xl text-xl font-bold text-sky-950 w-full h-10" onChange={e => (setSearchCat(e.target.value))} />
					<button onClick={() => (searchIt())} className="m-2 rounded-full bg-[#00539C] w-1/6 text-white py-2 font-bold px-3 -my-1 mx-5">
						{cancel ? "Cancel" : "Search"}
					</button>
				</div>
				<span className="text-xl font-bold text-sky-950 m-5">Total ToDos : {cnt}</span>
			</div>}
		</div>
	);
};

export default Body;
