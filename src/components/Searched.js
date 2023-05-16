import React, { useContext } from 'react'
import { ToDoContext } from '../context/toDoContext'
import Card from './Card';

const Searched = () => {

	const { searched, show } = useContext(ToDoContext);

	if (searched.length === 0) return null;

	return (show &&
		<div>
			<span className="text-xl font-bold text-sky-950">Searched</span>
			<div className="grid grid-cols-3 gap-4">
				{
					searched.map(e => { return (<Card id={e.id} category={e.category} title={e.title} data={e.data} />) })
				}

			</div>
		</div>
	)
}

export default Searched
