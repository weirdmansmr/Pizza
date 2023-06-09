import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="*" element={<Error />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
