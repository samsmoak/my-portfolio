import { BrowserRouter } from "react-router-dom";
import MainLayout from "./containers/MainLayout";
import Navbar from "./components/Navbar/Navbar";
function App() {
	return (
		<div className=''>
			<div className='w-screen'>
				<div className='w-full'>
					<Navbar />
				</div>
				<BrowserRouter>
					<MainLayout />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
