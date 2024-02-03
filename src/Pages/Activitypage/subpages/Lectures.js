import React from "react";

function Lectures() {
	const courses = [
		{
			title: "Course 1",
			subCourses: ["Sub-course 1.1", "Sub-course 1.2", "Sub-course 1.3"],
		},
		{
			title: "Course 2",
			subCourses: ["Sub-course 2.1", "Sub-course 2.2"],
		},
	];
	return (
		<div className='w-full flex flex-col items-center'>
			<div className='w-3/4 py-4 space-y-4 px-4 bg-neutral-700 flex flex-col items-center'>
				{courses.map((course, k) => (
					<div className='w-5/6'>
						<div className='px-2 py-2 bg-neutral-800 text-gray-300 font-bold'>
							{course.title}
						</div>
						<div className='px-2 text-gray-400 '>
							{course.subCourses.map((subCourse, k) => (
								<div>{subCourse}</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Lectures;
