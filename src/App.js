import Header from "./components/Header";
import List from "./components/List";
import Body from "./components/Body";
import ToDoContextProvider from "./context/toDoContext";
import Searched from "./components/Searched";

function App() {
	return (
		<ToDoContextProvider>
			<div className="text-center">
				<Header />
				<Body />
				<Searched />
				<List />
			</div>
		</ToDoContextProvider>
	);
}

export default App;
