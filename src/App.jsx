import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
	Container,
	ToDoList,
	Input,
	Button,
	Titulo,
	Info,
	ListItem
} from './styles';
import { FiPlusCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';

function App() {
	const [list, setList] = useState([{ id: uuid(), task: 'nada' }]);
	const [inputTask, setInputTask] = useState('');

	function inputChange(event) {
		setInputTask(event.target.value);
		console.log(inputTask);
	}

	function buttonClick() {
		setList([...list, { id: uuid(), task: inputTask }]);
	}

	return (
		<>
			<Container>
				<Titulo>todoList</Titulo>
				<ToDoList>
					<Info>
						<Input
							onChange={inputChange}
							type="text"
							placeholder="Adicione uma nova tarefa"
						/>
						<Button onClick={buttonClick}>
							Criar
							<FiPlusCircle />
						</Button>
					</Info>

					<ul>
						{list.map((task) => (
							<ListItem>
								<FiCheckCircle />
								<li key={task.id}>{task.task}</li>
								<FiTrash2 />
							</ListItem>
						))}
					</ul>
				</ToDoList>
			</Container>
		</>
	);
}

export default App;
