import React from "react";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import SummarySection from "../../components/SummarySection/SummarySection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import BarnerSection from "../../components/BarnerSection/BarnerSection";
import Footer from "../../components/Footer/Footer";
import QuestionSection from "../../components/QuestionSection/QuestionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import SwiperSlider from "../../components/SwiperSlide/SwiperSlider";

function Homepage() {
	return (
		<div className='w-full mt-12 '>
			<ProfileSection />
			<SummarySection />
			<ProjectSection />
			<BarnerSection />
			<QuestionSection />
			{/* <div className='w-full flex justify-center'>
				<div className='w-full lg:w-small1 '>
					<SwiperSlider />
				</div>
			</div> */}
			<ContactSection />
			<Footer />
		</div>
	);
}

export default Homepage;
