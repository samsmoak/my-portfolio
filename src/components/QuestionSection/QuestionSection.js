import React, { useState } from "react";
import QuestionAccordion from "./QuestionAccordion";
import QuestionIcon from "./QuestionIcon";

function QuestionSection() {
	return (
		<div className='lg:px-40  flex  justify-around'>
			<div className='w-full py-20 gap-y-10 grid grid-cols-1 lg:grid-cols-2'>
				<div className='space-y-4 px-4'>
					<div className='w-full text-sxl font-bold uppercase '>
						have any questions ?
					</div>
					<div className=' '>
						<QuestionAccordion />
					</div>
				</div>
				<div className='w-full flex justify-center'>
					<QuestionIcon />
				</div>
			</div>
		</div>
	);
}

export default QuestionSection;
