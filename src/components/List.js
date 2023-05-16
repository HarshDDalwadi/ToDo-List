import React, { useContext } from 'react'
import { ToDoContext } from '../context/toDoContext';
import Card from './Card';

const List = () => {
	const { show, todo} = useContext(ToDoContext);
	return (show && 
		<div className="grid grid-cols-3 gap-4">
			{
				todo.map(
					e => { return (<Card id={e.id} category={e.category} title={e.title} data={e.data} />) }
				)
			}
		</div>
	)
}

export default List
