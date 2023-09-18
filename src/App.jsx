import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
	Container,
	ToDoList,
	Input,
	Button,
	Titulo,
	Info,
	ListItem,
	Trash,
	Add,
	CheckCircle,
	UncheckCircle,
	NoItems
} from './styles';

function App() {
	const [list, setList] = useState([]);
	const [inputTask, setInputTask] = useState('');

	function inputChange(event) {
		setInputTask(event.target.value);
	}

	function addTask() {
		if (inputTask) {
			setList([...list, { id: uuid(), task: inputTask, finished: false }]);
		} else {
			alert('Adicione uma tarefa.');
		}
	}

	function finishedTask(id) {
		const newList = list.map((item) =>
			item.id === id ? { ...item, finished: !item.finished } : item
		);
		setList(newList);
	}

	function removeTask(id) {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
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
						<Button onClick={addTask}>
							Criar
							<Add />
						</Button>
					</Info>

					<ul>
						{list.length ? (
							list.map((task) => (
								<ListItem key={task.id} isFinished={task.finished}>
									{task.finished ? (
										<CheckCircle onClick={() => finishedTask(task.id)} />
									) : (
										<UncheckCircle onClick={() => finishedTask(task.id)} />
									)}
									<li>{task.task}</li>
									<Trash onClick={() => removeTask(task.id)} />
								</ListItem>
							))
						) : (
							<NoItems> Não há itens na lista</NoItems>
						)}
					</ul>
				</ToDoList>
			</Container>
		</>
	);
}

export default App;
