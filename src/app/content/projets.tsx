import { ProjectCard } from "@/components/ProjectCard/ProjectCard";

export const Projets = () => {
	return (
		<div id="projets">
			<h2 className="text-primary text-center font-extrabold text-5xl mb-20 h-[53.15px]">Projets</h2>
			<div className="flex justify-around flex-wrap gap-16">
				<ProjectCard
					title="Jeu TicTacToe"
					description="Création du jeu TicTacToe pour compléter challenge Front-end Mentor"
					tools={['React', 'Typescript', 'Sass']}
					imgUrl="/images/Tic Tac Toe.png"
					imgAlt="Projet 1"
					linkUrl="https://tic-tac-toe-with-hard-ia.vercel.app/"
					gitUrl="https://github.com/Matrixfrpro33/tic-tac-toe-with-hard-ia"
				/>
				<ProjectCard
					title="Marvel Quiz"
					description="Quiz sur l'univers de marvel"
					tools={['React', 'CSS', 'Firebase']}
					imgUrl="/images/Marvel Quiz.png"
					imgAlt="Projet 2"
					linkUrl="https://marvel-quiz-73b74.firebaseapp.com/"
					gitUrl="https://github.com/Matrixfrpro33/Marvel-Quiz"
				/>
				<ProjectCard
					title="Body Mass Index Calculator"
					description="Permet de calculer l'indice de masse corporel"
					tools={['React', 'Typescript', 'CSS']}
					imgUrl="/images/Body Mass Index Calculator.png"
					imgAlt="Projet 3"
					linkUrl="https://bmi-calculator-nnyn5t98q-matrixfrpro33.vercel.app/"
					gitUrl="https://github.com/Matrixfrpro33/Bmi-Calculator"
				/>
			</div>
		</div>
	)
}
