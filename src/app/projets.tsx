import { ProjectCard } from "@/components/ProjectCard";

export const Projets = () => {
	return (
		<div id="projets">
			<h2 className="text-primary text-center font-extrabold text-5xl mb-20 h-[53.15px]">Projets</h2>
			<div className="flex justify-around flex-wrap gap-16">
				<ProjectCard
					projetUrl="https://tic-tac-toe-with-hard-ia.vercel.app/"
					imgUrl="/images/Tic Tac Toe.png"
					imgAlt="Projet 1"
					title="Jeu TicTacToe"
					description="Création du jeu TicTacToe pour compléter challenge Front-end Mentor"
					tools={['React', 'Typescript', 'Sass']}
				/>
				<ProjectCard
					projetUrl="https://bmi-calculator-nnyn5t98q-matrixfrpro33.vercel.app/"
					imgUrl="/images/Body Mass Index Calculator.png"
					imgAlt="Projet 2"
					title="Body Mass Index Calculator"
					description="Permet de calculer l'indice de masse corporel"
					tools={['React', 'Typescript', 'CSS']}
				/>
				<ProjectCard
					projetUrl="https://age-calculator-exsmn2jud-matrixfrpro33.vercel.app/"
					imgUrl="/images/Age calculator app.png"
					imgAlt="Projet 3"
					title="Age Calculator"
					description="Permet de calculer le temps écoulé depuis aujourd'hui"
					tools={['HTML', 'CSS', 'Typescript']}
				/>
			</div>
		</div>
	)
}
