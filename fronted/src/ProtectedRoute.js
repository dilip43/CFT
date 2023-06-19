const ProtectedRoute = ({ children }) => {
	if (!localStorage.getItem("token")) {
		return;
	}
	return children;
};

export default ProtectedRoute;
