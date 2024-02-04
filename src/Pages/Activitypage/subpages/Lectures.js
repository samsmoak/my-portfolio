import React from "react";
import Footer from "../../../components/Footer/Footer";

function Lectures() {
	const courses = [
		{
			title: "Logic for Computer Science",
			subCourses: [
				`How to Think About Proof Systems
           We will cover lots of intuition for lots of practical examples that are crucial
           for understanding Computer Science.
           We will balance informal intuitive proofs and formal mechanical proofs.
           Jeff's goal is to teach them, not just what to think, but how to think.`,
				`
 Informal Proof System
           The formula is proofed to be valid by giving a winning strategy for the corresponding game.
           For example, formula ∀x ∃y y≥x corresponds to
           "Lets each choose a number and the one with the biggest number wins. You go first."
           Reading left to right, the adversary provides a value for x. Knowing this x, the prover
           provides a y that is bigger.
           The key is that the order in which the players go is crucial to who wins.`,
				`
 Formal Proof System
           For a Hilbert style proof, we need each line standing alone to state something valid.
           The implied meaning of α(x,y∃(x)) is ∀α∃y∃∀x α(x,y∃(x)).
           Then the rules are Modus Pones, adding and removing formals and adding and removing exists.`,
				`
 Propositional Proof System
           We will prove propositional formulas are tautologies
           (i.e. whether a And/Or/Not formula evaluates to be true under every assignment)
           by following obvious rules that mirrors this Davis Putnam computation.`,
				`
 Cover ALL of Computer Science Theory
           We intend to cover the first order logic needed to be able to express all the
           concepts covered in 2001, 3101, 6111,...
           Computable vs Uncomputable, Deterministic vs Probabilistic Algorithms,
           Time Complexity, Compile Time vs Run Time, Big-Oh Notation,
           Compiling a Java program into a TM, Universal TM,
           Computing vs Accepting, Poly vs NP, Reductions, Uncomputable Problems
           Graphs, Finite Fields, Vector Spaces, Information Theory
           You must be saying "too hard"!!! But our goal is much more humble.
           We want first year students to be able to read and understand
           the key first order logic statements that arise from these topics.`,
			],
		},
		{
			title: `Design and Analysis of Algorithms
`,
			subCourses: [
				`First Order Logic (Quantifiers)
           (Before a student can understand or prove anything in mathematics, it
           is essential to first be able to represent it in first order
           logic. Hence, Jeff reviews it in each of his courses.)`,
				`
 Relevant Mathematics
           (We look at asymptotic of running times, solving recurrence relations,
           and summations.)`,
				`
 Loop Invariants for Iterative Algorithms
           (Jeff strongly believes that this is the most important topic in
           Algorithms. Instead of worrying about the entire computation, only
           worry about one step at a time - make progress while maintaining the
           loop invariant.)`,
				`
 Recursive Algorithms
           (Again do not try to understand the entire computation. Trust your
           friends to solve a smaller instances of your problem and use these to
           the solve your own instance.)`,
				`
 Graph Search Algorithms
           (Graphs, ie nodes and edges, are very useful for representing
           data. The first task on them is to search through the nodes.)`,
				`
 Network Flow
           (This is how to best transport goods from factories to stores.)`,
				`
 Linear Programing
           (Extremely useful in industry, eg What ingredients put in your
           hamburger today to minimize its cost.)`,
				`
 Greedy Algorithms Methods
           (These are the simplest possible algorithms. Proving they work,
           however, is hard.)`,
				`
 Dynamic Programming
           (A harder instance is solved by filling out a table of solutions for
           easier sub-instances.)`,
				`
 Reductions
           (Writing an algorithm for one problem from that for another.)`,
				`
 NP-Completeness
           (Most search problems that industry cares about are believed to not
           have poly-time algorithms.)`,
			],
		},
		{
			title: `Advanced Algorithm Design and Analysis`,
			subCourses: [
				`This reviews the previous course for our grad students and tries to
     teach them the missing math and algorithms that they should
     practically know.`,
				`
 First Order Logic (Quantifiers)
           (Before a student can understand or prove anything in mathematics, it
           is essential to first be able to represent it in first order
           logic. Hence, Jeff reviews it in each of his courses.)`,
				`
 Loop Invariants
           (Jeff strongly believes that this is the most important topic in
           Algorithms. Instead of worrying about the entire computation, only
           worry about one step at a time - make progress while maintaining the
           loop invariant.)`,
				`
 Recursion
           (Again do not try to understand the entire computation. Trust your
           friends to solve a smaller instances of your problem and use these to
           the solve your own instance.)`,
				`
 Network Flow
           (This is how to best transport goods from factories to stores.)`,
				`
 Linear Programming
           (Extremely useful in industry, eg What ingredients put in your
           hamburger today to minimize its cost.)`,
				`
 Randomized Algorithms
           (Surprisingly when computing, it sometimes helps to flipping coins.)
 Calculating probabilities differently to handle causality.`,
				`
 Linear Algebra and Finite Fields
           (A quick introduction)`,
				`
 More Recursion - Fast Fourier Transformations
           (Used for processing signals, compressing images, and quickly
           multiplying integers.)`,
				`
 Distributed Systems mud on forehead & common knowledge
           (Fun information theory. I know that my mom knows that my father loves me.)`,
				`
 Greedy Algorithms
           (These are the simplest possible algorithms. Proving they work,
           however, is hard.)`,
				`
 Dynamic Programming
           (A harder instance is solved by filling out a table of solutions for
           easier sub-instances.)`,
				`
 Approximation Algorithms
           (The problems that do not have quick algorithms can sometimes be
           solved approximately.)`,
				`
 NP-completeness
           (Most search problems that industry cares about are believed to not
           have poly-time algorithms.)`,
				`
 Computability
           (Some computational problems are solved by NO algorithms.)`,
			],
		},
	];
	return (
		<div>
			<div className='w-full flex flex-col items-center px-4'>
				<div className='w-full  md:w-3/4 py-4 space-y-4 px-4 bg-neutral-700 flex flex-col items-center'>
					{courses.map((course, k) => (
						<div className='w-5/6'>
							<div className='px-2 py-2 bg-neutral-800 text-gray-300 font-bold'>
								{course.title}
							</div>
							<div className='px-2 text-gray-200 '>
								{course.subCourses.map((subCourse, k) => (
									<div className='mt-6'>
										{k}.{subCourse}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Lectures;
