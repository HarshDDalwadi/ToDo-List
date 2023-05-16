import { createContext, useState } from "react";

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
	const [show, setShow] = useState(true);
	const [cnt, setCnt] = useState(1);
	const [searched, setSearched] = useState([]);
	const [todo, setTodo] = useState([
		{ category: "Default", title: "Message for You", data: "Always love yourself", id: -1 }]);
	return (
		<ToDoContext.Provider value={{ todo, setTodo, cnt, setCnt, searched, setSearched, show, setShow}}>
			{children}
		</ToDoContext.Provider>
	)
}

export default ToDoContextProvider;

