import React, { useState } from "react";
import Tvsvg from "./components.js/Tvsvg";

function Videos() {
	const videos = [
		{
			id: 1,
			title: "Video 1",
			videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
		},
		{
			id: 2,
			title: "Video 2",
			videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
		},
		{
			id: 3,
			title: "Video 3",
			videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
		},
		{
			id: 4,
			title: "Video 3",
			videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
		},
		{
			id: 5,
			title: "Video 3",
			videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
		},
		{
			id: 6,
			title: "Video 3",
			videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
		},
		// Add more videos as needed
	];
	const [currentVideo, setCurrentVideo] = useState(videos[0]);
	const playVideo = (videoId) => {
		const selectedVideo = videos.find((video) => video.id === videoId);
		setCurrentVideo(selectedVideo);
	};
	return (
		<div className='flex-grow'>
			<div className='flex h-full p-4'>
				<div className='w-96 py-26 flex flex-col  h-full bg-neutral-700 rounded-sm'>
					<div className='px-4 w-full  flex  py-6 text-gray-400  font-bold text-lg'>
						Lecture Videos
					</div>
					<h2 className='px-4 font-bold text-lg text-gray-400 py-2'>Topics</h2>
					<div className='h-full w-full flex flex-col items-center space-y-3 py-4 '>
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

				<div className='w-full flex justify-center'>
					{currentVideo && (
						<iframe
							width='760'
							height='515'
							src={currentVideo.videoUrl}
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					)}
				</div>
			</div>
		</div>
	);
}

export default Videos;
