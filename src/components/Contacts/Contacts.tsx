import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';
import Link from 'next/link';

export const Contacts = () => {
	return (
		<div className='pt-1'>
			<Link href="https://github.com/AnthonyFerreira91" className="bg-primary hover:scale-105 inline-flex gap-1.5 text-white items-center justify-center text-sm font-medium transition-all h-9 rounded-md px-3 mr-2" target='_blank'>
				<SiGithub /> GitHub
			</Link>
			<Link href="https://www.linkedin.com/in/anthony-ferreira-512086181/" className="bg-primary hover:scale-105 inline-flex gap-1.5 text-white items-center justify-center text-sm font-medium transition-all h-9 rounded-md px-3 mr-2" target='_blank'>
				<SiLinkedin /> Linkdin
			</Link>
			<Link title="anthonyferreiraminard@gmail.com" href="mailto:anthonyferreiraminard@gmail.com" className="bg-primary hover:scale-105 inline-flex gap-1.5 text-white items-center justify-center text-sm font-medium transition-all h-9 rounded-md px-3">
				<MdOutlineMail />	Email
			</Link>
		</div>
	)
}
