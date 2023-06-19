import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/Signup' element={<Signup />} />
				<Route
					path='/Dashboard'
					element={
						// comment protected route to go Dashboard page if not working
						<ProtectedRoute>
							{" "}
							properly
							<Dashboard />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
