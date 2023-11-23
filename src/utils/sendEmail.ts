import { ContactezMoiSchema } from "@/types/ContactezMoiType";
import sendEmailAction from "@/server/actions";
import { toast } from "react-toastify";
import { ZodError } from "zod";

export const sendEmail = async (formData: FormData, reset: any) => {
	try {
		const { email, objet, message } = ContactezMoiSchema.parse({
			email: formData.get('email'),
			objet: formData.get('objet'),
			message: formData.get('message')
		});

		const sendEmail = await sendEmailAction({ email, objet, message });

		reset();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		toast.info(sendEmail.message);

	} catch (error) {
		if (error instanceof ZodError) {
			error.errors.forEach(el => toast.error(el.message));
		} else {
			console.log(error);
			toast.error(error);
		}
	}
}