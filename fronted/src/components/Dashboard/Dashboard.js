import React from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const Dashboard = () => {
	return (
		<div className='App'>
			<AddTodo />
			<ListTodo />
		</div>
	);
};
export default Dashboard;
