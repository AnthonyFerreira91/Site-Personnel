'use server';
import { resend } from "@/lib/resend";
import { ContactezMoiType } from "@/types/ContactezMoiType";

export default async function sendEmailAction({email, objet, message}: ContactezMoiType) {
	try {
		await resend.emails.send({
			from: "Anthony Ferreira <contact@fa-dev.fr>",
			to: "anthonyferreiraminard@gmail.com",
			subject: objet,
			html: `<h1>Message Site Perso: fa-dev.fr</h1>
					<h3>From: ${email}</h3>
					<h4>Objet: ${objet}</h4>
					<p>${message}</p>
			`
		});

		await resend.emails.send({
			from: "Anthony Ferreira <contact@fa-dev.fr>",
			to: email,
			subject: "Message bien reçu",
			html: `<p>Bonjour,</p>
					<p>J'ai bien reçu votre message, je vous réponds dans les plus brefs délais.</p>
					<p>Cordialement, Anthony</p>
					<p><strong><i>PS: Ceci est un message automatique, merci de ne pas répondre.</i></strong></p>
			`
		});

		return { message: "Message envoyé !"}
	} catch (error){
		return { error }
	}
}