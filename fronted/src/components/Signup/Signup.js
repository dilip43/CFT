import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	const [name, setName] = useState();
	const [fname, setFname] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [phone, setPhone] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await axios
			.post(
				"http://localhost:27017/api/signup",
				{ name, fname, email, password, phone },
				{ withCredentials: true }
			)
			.then((res) => {
				setName("");
				setFname("");
				setEmail("");
				setPassword("");
				setPhone("");
			})
			.catch((err) => {
				console.log(err.response.error);
			});
	};

	return (
		<div className='styles.container'>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor='fname'>Father Name</label>
				<input
					type='text'
					name='fname'
					value={fname}
					onChange={(e) => setFname(e.target.value)}
				/>

				<label htmlFor='email'>Email/Mobile</label>
				<input
					type='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor='phone'>Phone Number:</label>
				<input
					type='email'
					name='phone'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='tel'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type='submit' value='SignUp' />
			</form>

			<p>
				Not a Memeber <Link to='/'>login</Link>
			</p>
		</div>
	);
};

export default Signup;
