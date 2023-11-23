import z from "zod";

export const ContactezMoiSchema = z.object({
	email: z.string().email({ message: "Veuillez entrer un email valide." }),
	objet: z.string().min(2, { message: "Minimum 2 lettres." }),
	message: z.string().min(8, { message: "Minimum 8 lettres." })
});

export type ContactezMoiType = z.infer<typeof ContactezMoiSchema>;