import { Avatar } from "@/components/Avatar/Avatar";
import { Contacts } from "@/components/Contacts/Contacts";

export const Accueil = () => {
	return (
		<div id="accueil" className="flex justify-evenly items-center">
			<div>
				<h1 className="text-primary text-7xl font-bold mb-1.5 h-[79px]">Anthony Ferreira</h1>
				<h2 className="text-4xl mb-2.5">Développeur Front-end React / NextJs</h2>
				<Contacts />
			</div>
			<Avatar />
		</div>
	)
}
