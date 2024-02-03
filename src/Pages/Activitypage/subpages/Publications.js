import React from "react";

function Publications() {
	const publica = [
		{
			id: 1,
			title: "How to think about algorithms",
			image:
				"https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_1280.jpg",
			description: `Understand algorithms and their design with this revised student-friendly
			 textbook. Unlike other algorithms books, this one is approachable,
			  the methods it explains are straightforward, and the insights it provides 
			  are numerous and valuable. Without grinding through lots of formal proof, 
			  students will benefit from step-by-step methods for developing algorithms, expert guidance on common pitfalls, and an appreciation of the bigger picture. Revised and updated, this second edition includes a new chapter on machine learning algorithms, and concise key concept summaries at the end of each part for quick reference. Also new to this edition are more than 150 new exercises: selected solutions are included to let students check their progress, while a full solutions manual is available online for instructors. No other text explains complex topics such as loop invariants as clearly, helping students to think abstractly and preparing them for creating their own innovative ways to solve problems.`,
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:4OULZ7Gr8RgC",
		},
		{
			id: 2,

			title: `“All” Critical Gradient Descent Solutions Are Optimal & Small Running time"`,
			image:
				"https://cdn.pixabay.com/photo/2013/07/12/14/53/parabola-148973_1280.png",

			description: `Allen-Zhu, Li, and Song [1] gave an amazing paper proving that gradient descent starting with random weights converges to an optimal solution in time DO (1) as long as the machine has DO (1) parameters, where D is the amount of training data. But surely with a trillion data items, the number of iteration does not exceed∼ log D. Previous paper [?] had the time depend on 2# levels. But surely with hundreds of levels, this dependence is not more than∼ L. Hui Jiang [5] proved that “all” critical gradient descent solutions are optimal, but in the worst case,(1/ǫ) N weights are needed. The goal of our paper is to make sufficient reasonable assumptions to get these results to mirror those found in practice. The first result obtained is that every critical point is optimal as long as the machine has at least one hidden layer for which the number M of nodes is at least D and for these weights the neural network is not effectively zero. The other layers of the NN can be made small so that the number of parameters M′ and the number of nodes M at the wide layer are close giving that if M is much smaller than D, then the problem is NP-complete. We consider a wide range of activation and error functions`,
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:Vztgr1qGG8IC",
		},
		{
			id: 3,
			title:
				"Random polyhedral scenes: An image generator for active vision system experiments",
			image:
				"https://cdn.pixabay.com/photo/2017/10/06/10/25/swirl-2822580_1280.png",
			description: `We present a Polyhedral Scene Generator system which creates a random scene based on a few user parameters, renders the scene from random view points and creates a dataset containing the renderings and corresponding annotation files. We hope that this generator will enable research on how a program could parse a scene if it had multiple viewpoints to consider. For ambiguous scenes, typically people move their head or change their position to see the scene from different angles as well as seeing how it changes while they move; this research field is called active perception. The random scene generator presented is designed to support research in this field by generating images of scenes with known complexity characteristics and with verifiable properties with respect to the distribution of features across a population. Thus, it is well-suited for research in active perception without the requirement of a live 3D environment and mobile sensing agent, including comparative performance evaluations. The system is publicly available at https://polyhedral.eecs.yorku.ca.`,
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:yJjnfzR0HrkC",
		},
		{
			id: 4,
			title:
				"Hardness of function composition for semantic read once branching programs",
			image:
				"https://cdn.pixabay.com/photo/2022/03/29/19/49/infinity-7100057_1280.png",
			description: `In this work, we study time/space trade-offs for function composition. We prove asymptotically optimal lower bounds for function composition in the setting of nondeterministic read once branching programs, for the syntactic model as well as the stronger semantic model of read-once nondeterministic computation. We prove that such branching programs for solving the tree evaluation problem over an alphabet of size k requires size roughly k^{Omega (h)}, ie space Omega (h log k). Our lower bound nearly matches the natural upper bound which follows the best strategy for black-white pebbling the underlying tree. While previous super-polynomial lower bounds have been proven for read-once nondeterministic branching programs (for both the syntactic as well as the semantic models), we give the first lower bounds for iterated function composition, and in these models our lower bounds are near optimal.`,
			link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=AjD7zfgAAAAJ&sortby=pubdate&citation_for_view=AjD7zfgAAAAJ:tBlTYpvFGQIC",
		},
		{
			id: 5,
			title: "Erasure codes with a hierarchical bundle structure",
			image:
				"https://cdn.pixabay.com/photo/2020/03/08/01/07/evolution-4911164_1280.png",
			description: `This paper presents a proof of the existence of computationally fast probabilistic erasure codes at distance ∈ from being MDS, namely the decoding algorithm is able with high probability to reconstruct the n letter message from any set of (1+∈)n letters. It can either be fixed rate or a rateless LT code [10] in that any number of code letters can be produced and each is produced independently of the others. We also decrease the minimum packet size from many to one letter. The key ingredient is a scheme Hierarchical Bun- dle/Bin (HB) which splits the message into a hierarchy of disjoint bundles and produces coded packets about each bundle. We show a correspondence of this to a particular game having to do with randomly throwing balls into a hierarchy of bins. The “information” that does not over flow from a smaller bin, contributes to the next larger bin that it is contained in. We prove matching upper and lower `,
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
				<div className='md:w-3/5 text-gray-400'>Publications</div>
			</div>
			<div className='w-full  flex justify-center  '>
				<div className='px-10 md:px-0 md:w-3/5 space-y-5 py-6'>
					{publica.map((p, k) => {
						return (
							<a
								href={p.link}
								target='_blank'
								rel='noopener noreferrer'
								onClick={() => openArticleInNewTab(p.link)}
								// className='mt-8'
							>
								<div className=' py-4  w-full bg-neutral-200  rounded-sm px-4'>
									<div className='font-bold text-2xl py-4'>{p.title}</div>
									<div className=' h-fit font-medium grid grid-cols-1 md:grid-cols-2  '>
										<div className=' w-full flex justify-center'>
											<div className='sm:w-10/12 f '>
												<img
													src={p.image}
													alt=''
													className=' w-full h-full object-contain '
												/>
											</div>
										</div>
										<div className='px-4 text-neutral-700 font-semibold'>
											{p.description}
										</div>
									</div>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Publications;
