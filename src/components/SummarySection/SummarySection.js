import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

import AOS from "aos";
import "aos/dist/aos.css";

function SummarySection() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div
			className='w-full flex flex-col justify-center px-10  lg:px-40 py-20 space-y-16'
			id='sectionsum'
		>
			<div className='w-full flex flex-col justify-center items-center space-y-4'>
				<div className='px-2 bg-yellow-300 font-semibold'>About me</div>
				<div className='text-4xl font-semibold capitalize text-neutral-600 '>
					know me more
				</div>
			</div>
			<div className='text-neutral-600 w-full    md:flex md:justify-between '>
				<div
					data-aos='fade-right'
					data-aos-once='true'
					// data-aos-offset='200'
					data-aos-duration='1500'
					data-aos-easing='ease-out-back'
					className='w-full flex flex-col items-center md:items-start space-y-2'
				>
					<div className='text-2xl'>
						{`Hi, I'm `}
						<span className='text-black text-3xl font-semibold capitalize'>
							Jeff Edmonds
						</span>
					</div>
					<div className='w-5/6 lg:w-small1 text-xl font-medium'>
						{`I received my Bachelors at Waterloo in 1987 
                        and his Ph.D. in 1993 at University of Toronto. 
                        My thesis proved lower bounds on time-space tradeoffs.
						I did my post-doctorate work at the ICSI in Berkeley on secure data
						transmission over networks for multi-media applications. I joined
						Department of EECS at Lassonde School of Engineering York University
						in 1995`}
					</div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-once='true'
					// data-aos-offset='200'
					data-aos-duration='1200'
					data-aos-easing='ease-in-sine'
					className='w-full flex flex-col  items-center'
				>
					<div className='text-black text-9xl md:text-8xl font-extrabold'>
						25
					</div>
					<div className='text-2xl md:text-3xl font-semibold'>
						years of experience
					</div>
				</div>
			</div>
			<div className='w-full flex '>
				<div className='w-full capitalize grid gap-4 grid-cols-1 sm:grid-cols-2 text-xl font-semibold text-neutral-700 md:grid-cols-4'>
					<div>
						<div>name:</div>
						<div className='font-medium text-base'>jeff edmonds</div>
					</div>
					<div>
						<div>email:</div>
						<div className='font-medium text-base'>jeffedmonds@gmail.com</div>
					</div>
					<div>
						<div>Date of birth:</div>
						<div className='font-medium text-base'> 10th august 1963</div>
					</div>
					<div>
						<div>from:</div>
						<div className='font-medium text-base'>toronto, canada</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SummarySection;
