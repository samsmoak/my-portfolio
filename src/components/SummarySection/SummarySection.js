import React from "react";

function SummarySection() {
	return (
		<div className='w-full h-small2 px-40 py-20 space-y-8'>
			<div className='w-full flex flex-col justify-center items-center space-y-4'>
				<div className='px-2 bg-yellow-300'>About me</div>
				<div className='text-4xl font-medium capitalize'>know me more</div>
			</div>
			<div className='flex justify-between '>
				<div className='space-y-2'>
					<div className='text-2xl'>
						{`Hi, I'm `}
						<span className='text-3xl font-medium capitalize'>
							Jeff Edmonds
						</span>
					</div>
					<div className='w-small1 text-xl font-medium'>
						{`I received my Bachelors at Waterloo in 1987 
                        and his Ph.D. in 1993 at University of Toronto. 
                        My thesis proved lower bounds on time-space tradeoffs.
						I did my post-doctorate work at the ICSI in Berkeley on secure data
						transmission over networks for multi-media applications. I joined
						Department of EECS at Lassonde School of Engineering York University
						in 1995`}
					</div>
				</div>
				<div className='flex flex-col justify-center'>
					<div>25</div>
					<div>years of experience</div>
				</div>
			</div>
			<div className='flex w-full justify-between'>
				<div>
					<div>name:</div>
					<div>jeff edmonds</div>
				</div>
				<div>
					<div>name:</div>
					<div>jeff edmonds</div>
				</div>
				<div>
					<div>name:</div>
					<div>jeff edmonds</div>
				</div>
				<div>
					<div>name:</div>
					<div>jeff edmonds</div>
				</div>
			</div>
		</div>
	);
}

export default SummarySection;
