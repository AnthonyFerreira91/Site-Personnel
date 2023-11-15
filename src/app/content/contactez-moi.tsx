'use client'
import { ContactezMoiType } from "@/types/ContactezMoiType";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';

export const ContactezMoi = () => {
	const [submit, setSubmit] = useState<boolean>(false);
	const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactezMoiType>();

	const onSubmit: SubmitHandler<ContactezMoiType> = data => {
		setSubmit(false);
		reset();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		toast.error("En cours de conception", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false
		});
		console.log(data);
	};

	return (
		<div id="contactez-moi" className="flex justify-center">
			<div className="bg-primary p-0.5 w-2/5 rounded-xl">
				<div className="bg-white p-10 rounded-lg">
					<h2 className="text-primary text-center font-extrabold text-5xl mb-8">Contactez-moi</h2>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
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
							{submit && errors.email ? <span className="text-red-600">{errors.email.message}</span> : <span className="text-transparent">No error</span>}
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
							{submit && errors.objet ? <span className="text-red-600">{errors.objet.message}</span> : <span className="text-transparent">No error</span>}
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
							{submit && errors.message ? <span className="text-red-600">{errors.message.message}</span> : <span className="text-transparent">No error</span>}
						</div>
						<div className="bg-primary self-center w-1/3 mt-2 p-0.5 rounded-[11px] transform active:scale-95 transition-all">
							<button
								type="submit"
								className="bg-primary-hover w-full h-full rounded-lg bg-white transition-all hover:text-white"
								onClick={() => setSubmit(true)}
							>
								<div className="text-primary w-full font-semibold hover:text-white">
									Envoyer
								</div>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
