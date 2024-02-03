import React from "react";
import Contactplane from "./Contactplane";

function ContactSection() {
	return (
		<div className='w-full flex bg-yellow-300 lg:px-40 py-20 '>
			<div className=' w-full grid grid-cols-1 lg:grid-cols-2  px-4 '>
				<div className='space-y-10'>
					<div className='space-y-2'>
						<div className='text-2xl'>
							<span className='text-3xl font-bold capitalize'>
								Let's get in touch
							</span>
						</div>
						<div className='xl:w-small1 text-xl font-medium'>
							I enjoy discussing new projects and design challenges. Please
							share as much info, as possible so we can get the most out of our
							first catch-up.
						</div>
					</div>
					<div>
						<div>
							<div className='text-2xl font-bold'>living in</div>
							<div>30 Shacham street, Los Angeles, USA.</div>
						</div>
						<div>
							<div className='text-2xl font-bold'>Call</div>
							<div>(+060) 444 434 444</div>
						</div>
						<div>
							<div className='text-2xl font-bold'>Email:</div>
							<div>jeffedmonds@gmail.com</div>
						</div>
					</div>
				</div>
				<div className='flex px-2 flex-col justify-center  items-center space-y-10 '>
					<Contactplane />
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
