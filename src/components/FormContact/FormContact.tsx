'use client';
import { useForm } from "react-hook-form";
import { ContactezMoiType } from "@/types/ContactezMoiType";
import { sendEmail } from "@/utils/sendEmail";


export const FormContact = () => {
	const { register, formState: { errors, isSubmitted }, reset } = useForm<ContactezMoiType>();

	return (
		<form className="flex flex-col gap-1" action={(formData) => sendEmail(formData, reset)}>
			<div className="flex flex-col">
				<label htmlFor="email" className="text-dark">Email :</label>
				<div className="bg-primary p-0.5 rounded-[8px]">
					<input
						type="email"
						id="email"
						autoComplete="on"
						className="dark:bg-white text-dark rounded-md w-full h-full pl-2 focus:outline-none"
						{...register("email", {
							required: { value: true, message: "L'email ne peux pas être vide" },
						})}
					/>
				</div>
				{errors.email ? <span className="text-red-600">{errors.email.message}</span> : <span className="text-transparent">No error</span>}
			</div>
			<div className="flex flex-col">
				<label htmlFor="objet" className="text-dark">Objet :</label>
				<div className="bg-primary p-0.5 rounded-[8px]">
					<input
						type="text"
						id="objet"
						autoComplete="off"
						className="text-dark dark:bg-white rounded-md w-full h-full pl-2 focus:outline-none"
						{...register("objet", {
							required: { value: true, message: "Le objet ne peux pas être vide" },
							minLength: { value: 3, message: "3 lettre minimum" }
						})}
					/>
				</div>
				{errors.objet ? <span className="text-red-600">{errors.objet.message}</span> : <span className="text-transparent">No error</span>}
			</div>
			<div className="flex flex-col">
				<label htmlFor="message" className="text-dark">Message :</label>
				<div className="bg-primary p-0.5 rounded-[8px] h-[88px]">
					<textarea
						id="message"
						className="text-dark dark:bg-white rounded-md w-full h-full pl-2 focus:outline-none resize-none"
						{...register("message", {
							required: { value: true, message: "Le message ne peux pas être vide" },
							minLength: { value: 10, message: "10 lettre minimum" }
						})}
					/>
				</div>
				{errors.message ? <span className="text-red-600">{errors.message.message}</span> : <span className="text-transparent">No error</span>}
			</div>
			<div className="bg-primary self-center w-1/3 mt-2 p-0.5 rounded-[11px] transform active:scale-95 transition-all">
				<button
					type="submit"
					disabled={isSubmitted ? true : false}
					className="bg-primary-hover w-full h-full rounded-lg bg-white transition-all hover:text-white"
				>
					<div className="text-primary w-full font-semibold hover:text-white">
						Envoyer
					</div>
				</button>
			</div>
		</form>
	)
}
