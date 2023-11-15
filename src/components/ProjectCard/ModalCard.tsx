import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSass } from "react-icons/si";
import { RiCloseLine, RiGithubFill, RiExternalLinkFill } from "react-icons/ri";
import { ModalCardProps } from "@/types/ModalCardProps";
import Link from "next/link";
import { useEffect } from "react";

export const ModalCard = ({ title, description, tools, linkUrl, gitUrl, closeModal }: ModalCardProps) => {

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		}
	}, [])

	return (
		<>
			<div onClick={closeModal} className="fixed inset-0 bg-slate-800/75" />
			<div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 bg-white border w-96 p-5 rounded-lg">
				<h2 className="text-primary text-xl font-semibold text-center">{title}</h2>
				<p className="my-6">{description}</p>
				<div>
					<h3>Language :</h3>
					{tools.map((el, index) => {
						switch (el) {
							case "React":
						}
						return <div className="" key={index}>- {el}</div>
					})}
				</div>
				<div className="absolute bottom-1 left-0 w-full flex justify-evenly">
					<Link href={linkUrl} target="_blank"><RiExternalLinkFill size="24px" className="hover:text-blue-500" /></Link>
					<Link href={gitUrl} target="_blank"><RiGithubFill size="24px" className="hover:text-blue-500" /></Link>
				</div>
				<button className="absolute right-1 top-1" onClick={closeModal}><RiCloseLine size="20px" className="hover:text-blue-500" /></button>
			</div>
		</>
	)
}
