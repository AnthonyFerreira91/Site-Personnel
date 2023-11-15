import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSass, SiCss3, SiHtml5 } from "react-icons/si";
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
	}, []);

	return (
		<>
			<div onClick={closeModal} className="fixed inset-0 bg-slate-800/75" />
			<div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 bg-white border w-96 p-5 rounded-lg">
				<h2 className="text-primary text-xl font-semibold text-center">{title}</h2>
				<p className="mt-5 mb-2">{description}</p>
				<div>
					<div className="flex items-center gap-2 mb-5">
						<h3>Language :</h3>
						{tools.map((langage, index) => {
							let langageIcon;
							switch (langage) {
								case "React":
									langageIcon = <SiReact size="18px" />;
									break;
								case "NextJs":
									langageIcon = <SiNextdotjs size="18px" />;
									break;
								case "Typescript":
									langageIcon = <SiTypescript size="18px" />;
									break;
								case "Javascript":
									langageIcon = <SiJavascript size="18px" />;
									break;
								case "Sass":
									langageIcon = <SiSass size="18px" />;
									break;
								case "Tailwind":
									langageIcon = <SiTailwindcss size="18px" />;
									break;
								case "CSS":
									langageIcon = <SiCss3 size="18px" />;
									break;
								case "HTML":
									langageIcon = <SiHtml5 size="18px" />;
									break;
								default:
									break;
							}
							return <div className="" key={index}>{langageIcon}</div>
						})}
					</div>
				</div>
				<div className="absolute bottom-0 left-0 w-full flex justify-evenly">
					<Link href={linkUrl} target="_blank" className="w-28 hover:text-blue-500 transition-colors duration-300">
						<RiExternalLinkFill size="24px" className='m-auto' />
					</Link>
					<Link href={gitUrl} target="_blank" className="w-28 h-full hover:text-blue-500 transition-colors duration-300">
						<RiGithubFill size="24px" className='m-auto' />
					</Link>
				</div>
				<button className="absolute right-1 top-1" onClick={closeModal}><RiCloseLine size="20px" className="hover:text-blue-500 transition-colors duration-300" /></button>
			</div>
		</>
	)
}
