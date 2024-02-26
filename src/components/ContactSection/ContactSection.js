import React, { useEffect } from "react";
import Contactplane from "./Contactplane";
import AOS from "aos";
import "aos/dist/aos.css";
function ContactSection() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div
			className='relative w-full flex justify-center  bg-yellow-300 lg:px-40 py-20 '
			id='sectioncont'
		>
			<div className='w-4/6 md:w-full grid grid-cols-1 lg:grid-cols-2  px-4 '>
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
					<div className='space-y-4'>
						<div
							data-aos='fade-down'
							data-aos-once='false'
							// data-aos-offset='200'
							// data-aos-delay='400'
							data-aos-duration='1500'
							data-aos-easing='ease-out-back'
						>
							<div className='text-2xl font-bold'>living in</div>
							<div>India , Punjab , Jalandhar</div>
						</div>
						<div
							data-aos='fade-up'
							data-aos-once='false'
							// data-aos-offset='200'
							// data-aos-delay='400'
							data-aos-duration='1500'
							data-aos-easing='ease-out-back'
						>
							<div className='text-2xl font-bold'>Call</div>
							<div>(+91) 7658839680</div>
						</div>
						<div
							data-aos='fade-down'
							data-aos-once='false'
							// data-aos-offset='200'
							// data-aos-delay='400'
							data-aos-duration='1500'
							data-aos-easing='ease-out-back'
						>
							<div className='text-2xl font-bold'>Email:</div>
							<div>zebachsmoak@gmail.com</div>
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
