import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSass, SiCss3, SiHtml5, SiFirebase } from "react-icons/si";
import { RiCloseLine, RiGithubFill, RiExternalLinkFill } from "react-icons/ri";
import { ModalCardProps } from "@/types/ModalCardProps";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export const ModalCard = ({ title, description, tools, imgUrl, imgAlt, linkUrl, gitUrl, closeModal }: ModalCardProps) => {

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		}
	}, []);

	const langageIcon = (langage: string) => {
		const sizeLogo = "18px";
		switch (langage) {
			case "React":
				return <SiReact size={sizeLogo} />;
			case "NextJs":
				return <SiNextdotjs size={sizeLogo} />;
			case "Typescript":
				return <SiTypescript size="17px" />;
			case "Javascript":
				return <SiJavascript size={sizeLogo} />;
			case "Sass":
				return <SiSass size={sizeLogo} />;
			case "Tailwind":
				return <SiTailwindcss size={sizeLogo} />;
			case "CSS":
				return <SiCss3 size={sizeLogo} />;
			case "HTML":
				return <SiHtml5 size={sizeLogo} />;
			case "Firebase":
				return <SiFirebase size={sizeLogo} />;
			default:
				break;
		}
	}

	return (
		<>
			<div onClick={closeModal} className="fixed inset-0 bg-slate-800/75" />
			<div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 p-0.5 w-[550px] h-[440px] rounded-xl bg-primary">
				<div className="relative bg-white bg-dark rounded-xl h-full">
					<Link href={linkUrl} target="_blank" className="w-28 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
						<Image className="rounded-xl w-full" src={imgUrl} alt={imgAlt} width={500} height={160}/>
					</Link>
					<div className="p-3">
						<h2 className="text-primary text-xl font-semibold text-center">{title}</h2>
						<p className="text-center mt-4 mb-4">{description}</p>
						<div>
							<div className="flex items-center justify-evenly gap-2 mb-5">
								{tools.map((langage, index) => {
									const icon = langageIcon(langage);
									return <div key={index} className="flex items-center gap-1 text-[11px]">{icon} {langage}</div>
								})}
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 w-full h-7 flex justify-evenly z-10">
						<Link href={linkUrl} target="_blank" className="w-28 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
							<RiExternalLinkFill size="24px" className='m-auto' />
						</Link>
						<Link href={gitUrl} target="_blank" className="w-28 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
							<RiGithubFill size="24px" className='m-auto' />
						</Link>
					</div>
					<button
						className="absolute right-1 top-1"
						onClick={closeModal}
					>
						<RiCloseLine size="20px" className="text-blue-400 dark:text-blue-400 hover:rotate-180 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-200" />
					</button>
				</div>
			</div>
		</>
	)
}
