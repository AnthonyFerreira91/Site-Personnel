import { FormContact } from "@/components/FormContact/FormContact";

export const ContactezMoi = () => {
	return (
		<div id="contactez-moi" className="flex justify-center">
			<div className="bg-primary p-0.5 w-2/5 rounded-lg">
				<div className="bg-white p-10 rounded-lg">
					<h2 className="text-primary text-center font-extrabold text-5xl mb-8">Contactez-moi</h2>
					<FormContact />
				</div>
			</div>
		</div>
	)
}
