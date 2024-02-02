import React from "react";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import SummarySection from "../../components/SummarySection/SummarySection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import BarnerSection from "../../components/BarnerSection/BarnerSection";
import Footer from "../../components/Footer/Footer";
import QuestionSection from "../../components/QuestionSection/QuestionSection";
import ContactSection from "../../components/ContactSection/ContactSection";

function Homepage() {
	return (
		<div className='w-screen'>
			<ProfileSection />
			<SummarySection />
			<ProjectSection />
			<BarnerSection />
			<QuestionSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default Homepage;
