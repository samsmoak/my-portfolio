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
					<div className='text-lg font-semibold capitalize '>who is sam</div>
					{
						<div>
							<QuesSVG open={open1} />
						</div>
					}
				</div>
				{open1 && (
					<div className='w-full p-2 text-sm text-neutral-600 '>
						In essence, Sam is a committed software developer, holding a
						Bachelor's degree in Computer Science and Engineering from Lovely
						Professional University, and boasting three years of specialized
						experience in full-stack web development. His journey is marked by
						an unwavering dedication to excellence, a profound enthusiasm for
						emerging technologies, and a collaborative mindset. Sam excels in
						designing robust solutions that surpass conventional boundaries,
						fostering a culture of innovation within diverse teams. Driven by an
						insatiable thirst for knowledge, he remains at the forefront of
						industry trends, poised to make meaningful contributions to
						transformative projects. Sam eagerly looks forward to forging
						connections and collaborating on endeavors that transcend the
						ordinary, aiming to create something truly extraordinary together.
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
						sam holds first class in the Bachelor's degree of Computer Science
						and Engineering from Lovely Professional University
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
						I am from Ghana , originally but I am currently situated in india
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
						Computer Science , Software development , Artificial Learning and
						Machine Learning
					</div>
				)}
			</div>
		</div>
	);
}

export default QuestionAccordion;
