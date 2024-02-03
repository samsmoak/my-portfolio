import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import prof from "../../images/prof.png";

function SwiperSlider() {
	const [midder, setMidder] = useState(1);
	const [datar, setData] = useState([
		{
			image: ` ${prof} `,
			name: "York",
			work: "University",
			company: "York",
			testimony: `great teacher Lumr was the backbone of my startup preparation. It allows you
								to efficiently work through the most common variations of
								 `,
		},
		{
			image: `${prof}`,
			name: "Anabel",
			work: "AI Engineer",
			company: "Google",
			testimony: `great teacher Lumr was the backbone of my startup preparation. It allows you
								to efficiently work through the most common variations of
								 `,
		},
		{
			image: `${prof}`,
			name: "Danald",
			work: "Software Engineer",
			company: "Microsoft",
			testimony: `great teacher Lumr was the backbone of my startup preparation. It allows you
								to efficiently work through the most common variations of
								 `,
		},
	]);
	const [swiperRef, setSwiperRef] = useState(null);
	return (
		<div className='lg:px-20 hidden'>
			<Swiper
				onSwiper={setSwiperRef}
				slidesPerView={1}
				centeredSlides={true}
				spaceBetween={10}
				pagination={{
					type: "fraction",
				}}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				className={`h-96 bg-white `}
			>
				{datar.map((v, k) => {
					return (
						<SwiperSlide className='w-40 h-full md:w-96 md:h-96  py-6 px-6  rounded-3xl '>
							<div className='bg-white shadow-md h-full  border-t-4 border-yellow-500'>
								<div className='flex justify-center w-full -translate-y-4'>
									<div className='h-14 w-14 overflow-hidden rounded-full '>
										<img src={v.image} alt='' />
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<h4 className='font-bold text-sm'>{v.name}</h4>
									<h4 className='font-semibold text-base'>{v.work}</h4>
									<h4 className='font-bold text-sm'>{v.company} </h4>
								</div>

								<div className='w-full px-2'>
									<p className='text-sm font-normal text-gray-500'>
										{v.testimony}
									</p>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default SwiperSlider;
