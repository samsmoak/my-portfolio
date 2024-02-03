import { BrowserRouter } from "react-router-dom";
import MainLayout from "./containers/MainLayout";
import Navbar from "./components/Navbar/Navbar";
function App() {
	return (
		<BrowserRouter>
			<div className='w-screen '>
				<div className='w-full'>
					<div className='w-full '>
						<Navbar />
					</div>
					<div className='w-full'>
						<MainLayout />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
