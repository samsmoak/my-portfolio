import React, { useState } from "react";

function QuestionAccordion() {
	const [open1, setopen1] = useState(false);
	const [open2, setopen2] = useState(false);
	const [open3, setopen3] = useState(false);
	const [open4, setopen4] = useState(false);
	return (
		<div className=' '>
			<div>
				<div
					onClick={() => {
						setopen1(!open1);
						setopen2(false);
						setopen3(false);
						setopen4(false);
					}}
				>
					who is jeff
				</div>
				{open1 && (
					<div>
						erry richardson ad squid. Food truck quinoa nesciunt laborum
						eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
						squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
						keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
						sapiente ea proident. Ad vegan excepteur butcher vice lomo
					</div>
				)}
			</div>
			<div>
				<div
					onClick={() => {
						setopen2(!open2);
						setopen1(false);
						setopen3(false);
						setopen4(false);
					}}
				>
					who is jeff
				</div>
				{open2 && (
					<div>
						erry richardson ad squid. Food truck quinoa nesciunt laborum
						eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
						squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
						keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
						sapiente ea proident. Ad vegan excepteur butcher vice lomo
					</div>
				)}
			</div>
			<div>
				<div
					onClick={() => {
						setopen3(!open3);
						setopen1(false);
						setopen2(false);
						setopen4(false);
					}}
				>
					who is jeff
				</div>
				{open3 && (
					<div>
						erry richardson ad squid. Food truck quinoa nesciunt laborum
						eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
						squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
						keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
						sapiente ea proident. Ad vegan excepteur butcher vice lomo
					</div>
				)}
			</div>
			<div>
				<div
					onClick={() => {
						setopen4(!open4);
						setopen1(false);
						setopen2(false);
						setopen3(false);
					}}
				>
					who is jeff
				</div>
				{open4 && (
					<div>
						erry richardson ad squid. Food truck quinoa nesciunt laborum
						eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
						squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
						keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
						sapiente ea proident. Ad vegan excepteur butcher vice lomo
					</div>
				)}
			</div>
		</div>
	);
}

export default QuestionAccordion;
