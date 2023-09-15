import styled from 'styled-components';

export const Container = styled.div`
	background-color: #202020;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 40px;
`;

export const Titulo = styled.h1`
	font-size: 3.2em;
	line-height: 1.1;
	color: #e3e3e3;
`;

export const ToDoList = styled.div`
	background-color: #282828;
	padding: 30px 20px;
	border-radius: 8px;
	box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.3);

	ul {
		padding: 0;
		margin-top: 60px;
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Input = styled.input`
	width: 100%;
	background-color: #1a1a1a;
	color: #e5e5e5;
	padding: 16px;
	border-radius: 8px;
	border: 1px solid #0d0d0d;
	margin-right: 10px;
	font-size: 1rem;
	transition: all 500ms;

	&:hover {
		border: solid #404c5d 1px;
		box-shadow: 1px 1px 10px #20232e, -1px -1px 10px #545b78;
		color: #d6d6d6;
		transition: 500ms;
	}

	&:focus {
		outline: none;
		border-color: #545b78;
		box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
		color: #d6d6d6;
		transition: 100ms;
	}
	&:active {
		transform: scale(0.99);
	}
`;

// export const Button = styled.button`
// 	border-radius: 8px;
// 	border: 1px solid transparent;
// 	padding: 16px;
// 	font-size: 1em;
// 	font-weight: 500;
// 	font-family: inherit;
// 	background-color: #1a1a1a;
// 	color: #e5e5e5;
// 	cursor: pointer;
// 	transition: all 0.2s ease;

// 	&:hover {
// 		border-color: #646cff;
// 	}
// 	&:active {
// 		transform: scale(0.9);
// 	}

// `;

export const Button = styled.button`
	border-radius: 8px;
	border: solid transparent 1px;
	padding: 16px;
	font-size: 16px;
	font-weight: 500;
	font-family: inherit;
	background: #1a1a1a;
	color: #e5e5e5;
	cursor: pointer;
	transition: 500ms;
	box-shadow: -1px -5px 15px #212121, 5px 5px 15px #212121;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;

	&:hover {
		border: solid #404c5d 1px;
		box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
		color: #d6d6d6;
		transition: 500ms;
	}

	&:active {
		transform: scale(0.96);
		box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
		color: #d6d6d6;
		transition: 100ms;
	}
`;

export const ListItem = styled.div`
	border-radius: 8px;
	border: 1px solid #333;
	background: #1a1a1a;
	color: #e5e5e5;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

	padding: 0 10px;
	height: 60px;
	width: 500px;
	margin-bottom: 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	li {
		list-style: none;
	}
`;
