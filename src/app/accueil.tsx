import { Contacts } from "./contacts";
import Image from "next/image";

export const Accueil = () => {
	return (
		<div id="accueil" className="flex justify-evenly items-center">
			<div>
				<h1 className="text-primary text-7xl font-bold mb-1.5 h-[79px]">Anthony Ferreira</h1>
				<h2 className="text-4xl mb-2.5">Développeur Front-end React / NextJs</h2>
				<Contacts />
			</div>
			<div className="w-[200px] h-[200px]">
				<div className="bg-primary p-[3px] rounded-full">
					<Image src="/images/Photo Profil.jpg" alt="Ma photo du portfolio" width={200} height={200} className="rounded-full ml-[0.2px] mb-[0.2px]" />
				</div>
			</div>
		</div>
	)
}
