import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await axios
			.post(
				"http://localhost:27017/api/login",
				{ email, password },
				{ withCredentials: true }
			)
			.then((res) => {
				navigate("/Dashboard");
				window.location.reload(true);
			})
			.catch((err) => {
				console.log(err.response.error);
			});
	};

	return (
		<div className='styles.container'>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email/Mobile</label>
				<input
					type='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type='submit' value='LogIN' />
			</form>

			<p>
				Not a Memeber <Link to='/Signup'>Signup</Link>
			</p>
		</div>
	);
};

export default Login;
