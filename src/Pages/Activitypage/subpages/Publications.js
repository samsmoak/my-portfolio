import React from "react";
import Footer from "../../../components/Footer/Footer";

function Publications() {
	const publica = [
		{
			id: 1,
			title: "Participated in Building An Ecommerce Platform",
			image:
				"https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_1280.jpg",
			description: [
				`Developed and maintained a scalable e-commerce website using modern web technologies and frameworks.`,
				`
Implemented a responsive design using HTML, CSS, and JavaScript to enhance user experience, resulting in a 30% decrease in
bounce rate.`,
				`
Optimized website loading time by integrating caching techniques and reducing server response time, leading to a 50% increase in
page load speed.`,
				`
Collaborated with designers and product managers to gather requirements and effectively translated them into technical
specifications, resulting in a 30% decrease in development time.`,
			],
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:4OULZ7Gr8RgC",
		},
		{
			id: 2,

			title: `Worked On a food delivery Application`,
			image:
				"https://cdn.pixabay.com/photo/2020/05/25/08/40/food-delivery-5217579_1280.png",

			description: [
				`Worked with cross-functional teams to ensure high-quality software development and delivery`,

				`Conducted code reviews and provided technical guidance to junior engineers Improved the application's scalability and reliability by optimizing server-side code and database queries`,

				`Teamed up with designers and product managers to collect requirements and skillfully transformed them into technical
specifications, leading to a 30% reduction in development time.`,
			],

			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:Vztgr1qGG8IC",
		},
		{
			id: 3,
			title: " PARTICIPATED ON A PUBLISHED A PAPER UNDER DR. MUKESH KUMAR",
			image:
				"https://cdn.pixabay.com/photo/2012/04/13/15/04/research-32747_1280.png",
			description: [
				`Collaborating with Doctor Mukesh Kumar on A Comparative Performance Assessment of Optimized Multilevel Ensemble
Learning Model with Existing Classifier Models, I actively contributed to refining ensemble modeling techniques.`,
				`My role involved selecting optimal base classifiers through a multilevel approach, focusing on excluding underperforming features and
addressing collinearity.`,
				` This endeavor aimed to achieve enhanced class-level prediction accuracy, with a target range of 70% to
90%.`,
			],
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:yJjnfzR0HrkC",
		},
		{
			id: 4,
			title: "Worked on building a betting platform",
			image:
				"https://cdn.pixabay.com/photo/2013/07/13/13/42/casino-161438_1280.png",
			description: [
				`Designed and developed software for a betting platform using ReactJS, NodeJS, and MongoDB`,
				`
Conducted data analysis and developed algorithms for real-time betting odds calculations`,
				`
Worked with cross-functional teams to ensure high-quality software development and delivery`,
				`
Conducted performance testing and optimization for the platform`,
			],
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:tBlTYpvFGQIC",
		},
		{
			id: 5,
			title: "Built a tracking systems for vehicles",
			image:
				"https://cdn.pixabay.com/photo/2020/02/18/11/02/map-4859139_1280.png",
			description: [
				`We built a vehicle tracking system.`,
				`
Responsible for writing a bridge and some api service to communicate with the tracker using MQTT protocol , in conjunction with
Socket.io.`,
				` i also worked to build some ui components on the frontend which we connected to some backend API's.`,
				`
Conducted data analysis and developed algorithms for real-time tracking and predictive modeling`,
			],
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:gV6rEsy15s0C",
		},
	];
	const openArticleInNewTab = (url) => {
		const newTab = window.open(url, "_blank");
		newTab.focus();
	};
	return (
		<div>
			<div className='w-full flex justify-center  font-semibold text-2xl text-neutral-700'>
				<div className='md:w-3/5 text-gray-400'>Projects</div>
			</div>
			<div className='w-full  flex justify-center  '>
				<div className='px-10 md:px-0 md:w-3/5 space-y-5 py-6'>
					{publica.map((p, k) => {
						return (
							<div
								href={`#`}
								// href={p.link}
								target='_blank'
								rel='noopener noreferrer'
								// onClick={() => openArticleInNewTab(p.link)}
								// className='mt-8'
							>
								<div className=' py-4  w-full bg-white rounded-sm px-4'>
									<div className='font-bold w-full text-center lg:text-start text-2xl py-4 text-red-700'>
										{p.title}
									</div>
									<div className='space-y-6 lg:space-y-0  h-fit font-medium grid grid-cols-1 lg:grid-cols-2  '>
										<div className=' w-full flex justify-center'>
											<div className='sm:w-10/12 f '>
												<img
													src={p.image}
													alt=''
													className=' w-full h-full object-contain '
												/>
											</div>
										</div>
										<div className='px-4 text-black font-semibold'>
											{p.description.map((f, t) => (
												<div key={t} className='mt-2'>
													{f}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Publications;
