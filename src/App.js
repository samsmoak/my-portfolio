import { BrowserRouter } from "react-router-dom";
import MainLayout from "./containers/MainLayout";
import Navbar from "./components/Navbar/Navbar";
function App() {
	return (
		<div className='w-screen '>
			<div className='w-full'>
				<BrowserRouter>
					<div className='w-full'>
						<Navbar />
					</div>
					<div className='w-full'>
						<MainLayout />
					</div>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
