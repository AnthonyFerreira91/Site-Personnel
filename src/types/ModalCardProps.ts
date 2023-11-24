import { MouseEventHandler } from "react";

export type ModalCardProps = {
	title: string;
	description: string;
	tools: string[];
	imgUrl: string;
	imgAlt: string;
	linkUrl: string;
	gitUrl: string;
	closeModal: MouseEventHandler;
}