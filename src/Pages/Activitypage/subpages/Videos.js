import React, { useState } from "react";
import Tvsvg from "./components.js/Tvsvg";
import ReactPlayer from "react-player";
import Footer from "../../../components/Footer/Footer";

function Videos() {
	const videos = [
		{
			id: 1,
			title: "Introduction to Machine Learning   ",
			videoUrl: "https://youtu.be/BGmG-q8xseI",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-1-Intro.pptx",
		},
		{
			id: 2,
			title: "Machine Learning Algebra Review",
			videoUrl: "https://youtu.be/NmVnvsv3950",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-2-Algebra.pptx",
		},
		{
			id: 3,
			title: "Some Practical Considerations",
			videoUrl: "https://youtu.be/BbEooKv1eUo",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-2.5-Practical.pptx",
		},
		{
			id: 4,
			title: "Generalizing from Training Data",
			videoUrl: "https://youtu.be/R8omCzibcig",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-3-Generalizing.pptx",
		},
		{
			id: 5,
			title: "Learning in poly time",
			videoUrl:
				"https://echo360.ca/media/055f1a8d-6d8a-4a34-a7d1-2eb77196480d/public",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-3-polyTime.pptx",
		},
		{
			id: 6,
			title: `Jeff's "All" Critical Gradient Decent Solutions Are Optimal
       (Given Minimal Over-Parameterization)`,
			videoUrl: "",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-3-optimal.pptx",
		},
		{
			id: 7,
			title: "Reinforcement Learning Game Tree / Markov Chains   ",
			videoUrl:
				"https://echo360.ca/media/e566c899-a5d3-4c7c-86fa-4b72229d9753/public",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-4-Reinforcement_Learning.pptx",
		},
		{
			id: 8,
			title: " Dimension Reduction & Maximum Likelihood  ",
			videoUrl: "https://youtu.be/LTmL-Y10K-4",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-5-Dimensions_Reduction.pptx",
		},
		{
			id: 9,
			title: " Other Models of Neural Networks ",
			videoUrl: "",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-6-Genererative.pptx",
		},
		{
			id: 10,
			title: " Ethics ",
			videoUrl: "https://youtu.be/xSsIzauG74c",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-7.1-Ethics.pptx",
		},
		{
			id: 11,
			title: " Ethics ",
			videoUrl: "https://youtu.be/xSsIzauG74c",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-7.1-Ethics.pptx",
		},
		{
			id: 12,
			title: " Ethics ",
			videoUrl: "https://youtu.be/xSsIzauG74c",
			slide:
				"https://www.eecs.yorku.ca/~jeff/courses/machine-learning/syllabus/ML-7.1-Ethics.pptx",
		},
		// Add more videos as needed
	];
	const [currentVideo, setCurrentVideo] = useState(videos[0]);
	const playVideo = (videoId) => {
		const selectedVideo = videos.find((video) => video.id === videoId);
		setCurrentVideo(selectedVideo);
	};
	const openInNewTab = (url) => {
		const newTab = window.open(url, "_blank");
		newTab.focus();
	};

	const openPdfInNewTab = (url) => {
		const newTab = window.open(url, "_blank");
		newTab.focus();
	};

	return (
		<div className='h-full overflow-scroll'>
			<div className='w-full h-full p-4 grid gap-y-4   gap-x-4 md:grid-cols-8 '>
				<div className='h-small2 w-full order-last md:order-first md:col-span-3 lg:col-span-2  py-26 flex flex-col  md:h-full bg-neutral-700 rounded-sm overflow-scroll'>
					<div className='px-4 w-full  flex  py-6 text-gray-400  font-bold text-lg'>
						Lecture Videos
					</div>
					<h2 className='px-4 font-bold text-lg text-gray-400 py-2'>Topics</h2>
					<div className=' lg:h-full  w-full flex flex-col items-center space-y-3 lg:py-4 '>
						{videos.map((video) => (
							<div
								className={`cursor-pointer space-x-4 hover:bg-neutral-500 py-3  w-full text-center flex px-4 ${
									currentVideo.id === video.id
										? "bg-neutral-600"
										: "bg-neutral-700"
								}`}
								key={video.id}
								onClick={() => playVideo(video.id)}
							>
								<div className='text-green-200'>
									<Tvsvg />
								</div>
								<div className='text-gray-400 font-medium text-sm'>
									{video.title}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='w-full md:col-span-5 lg:col-span-6 col-span-full h-small3 lg:h-small flex flex-col items-center space-y-4 '>
					{currentVideo && (
						<ReactPlayer
							url={currentVideo.videoUrl}
							controls={true}
							width='100%'
							height='100%'
						/>
					)}
					<div className='w-full  grid col-span-1 md:grid-cols-2'>
						<div>
							<div className='text-xl font-semibold text-neutral-400'>
								if video doesn't play, try the link here:
							</div>
							<div className='text-lg underline font-semibold text-blue-400'>
								<a
									href={currentVideo.videoUrl}
									target='_blank'
									rel='noopener noreferrer'
									onClick={() => openInNewTab(currentVideo.videoUrl)}
								>
									video link
								</a>
							</div>
						</div>
						<div className='text-xl font-semibold text-neutral-400'>
							Click the link below to open the PDF in a new tab:
							<br />
							<a
								href={currentVideo?.slide}
								target='_blank'
								rel='noopener noreferrer'
								onClick={() => openPdfInNewTab(currentVideo?.slide)}
								className='text-lg underline font-semibold text-blue-400'
							>
								Slides
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Videos;
