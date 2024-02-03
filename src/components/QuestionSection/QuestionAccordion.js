import React, { useState } from "react";
import QuesSVG from "./QuesSVG";

function QuestionAccordion() {
	const [open1, setopen1] = useState(false);
	const [open2, setopen2] = useState(false);
	const [open3, setopen3] = useState(false);
	const [open4, setopen4] = useState(false);
	return (
		<div className=' w-full'>
			<div className='w-full'>
				<div
					className='w-full flex justify-between py-3 px-4 hover:bg-neutral-200 shadow-md'
					onClick={() => {
						setopen1(!open1);
						setopen2(false);
						setopen3(false);
						setopen4(false);
					}}
				>
					<div className='text-lg font-semibold capitalize '>who is jeff</div>
					{
						<div>
							<QuesSVG open={open1} />
						</div>
					}
				</div>
				{open1 && (
					<div className='w-full p-2 text-sm text-neutral-600 '>
						Jeff teaches many courses in Theoretical Computer Science from the
						second year undergrad to the graduate level. All of these courses
						have a large set of power point slides, notes, and questions. Two of
						them have Jeff's voice recorded along with the slides. He also has a
						book.
					</div>
				)}
			</div>
			<div>
				<div
					className='w-full flex justify-between py-3 px-4 hover:bg-neutral-200 shadow-md'
					onClick={() => {
						setopen2(!open2);
						setopen1(false);
						setopen3(false);
						setopen4(false);
					}}
				>
					<div className='text-lg font-semibold capitalize '>My school</div>
					{
						<div>
							<QuesSVG open={open2} />
						</div>
					}
				</div>
				{open2 && (
					<div className='w-full p-2 text-sm text-neutral-500 '>
						He joined Department of EECS at Lassonde School of Engineering York
						University in 1995.
					</div>
				)}
			</div>
			<div>
				<div
					className='w-full flex justify-between py-3 px-4 hover:bg-neutral-200 shadow-md'
					onClick={() => {
						setopen3(!open3);
						setopen1(false);
						setopen2(false);
						setopen4(false);
					}}
				>
					<div className='text-lg font-semibold capitalize '>my location</div>
					{
						<div>
							<QuesSVG open={open3} />
						</div>
					}
				</div>
				{open3 && (
					<div className='w-full p-2 text-sm text-neutral-500 '>
						I live in toronto canada
					</div>
				)}
			</div>
			<div>
				<div
					className='w-full flex justify-between py-3 px-4 hover:bg-neutral-200 shadow-md'
					onClick={() => {
						setopen4(!open4);
						setopen1(false);
						setopen2(false);
						setopen3(false);
					}}
				>
					<div className='text-lg font-semibold capitalize '>My department</div>
					{
						<div>
							<QuesSVG open={open4} />
						</div>
					}
				</div>
				{open4 && (
					<div className='w-full p-2 text-sm text-neutral-500 '>
						He joined Department of EECS at Lassonde School of Engineering York
						University in 1995.
					</div>
				)}
			</div>
		</div>
	);
}

export default QuestionAccordion;
