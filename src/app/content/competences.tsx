import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSass, SiFigma, SiGithub, SiFirebase, SiJest } from 'react-icons/si';
import { SkillsList } from '@/components/SkillsList/SkillsList';

export const Competences = () => {
	return (
		<div>
			<h2 className='text-center font-extrabold text-5xl mb-10 text-primary h-[53.15px]'>Compétences</h2>
			<div className='flex justify-around space-x-2'>
				<SkillsList nameSkillsList='Front-end' skillsObject={[
					{ icon: SiReact, nameSkill: 'React' },
					{ icon: SiNextdotjs, nameSkill: 'NextJs' },
					{ icon: SiTypescript, nameSkill: 'Typescript' },
				]} />
				<SkillsList nameSkillsList='Design' skillsObject={[
					{ icon: SiTailwindcss, nameSkill: 'Tailwind' },
					{ icon: SiSass, nameSkill: 'Sass' },
					{ icon: SiFigma, nameSkill: 'Figma' },
				]} />
				<SkillsList nameSkillsList='Other' skillsObject={[
					{ icon: SiGithub, nameSkill: 'GitHub' },
					{ icon: SiFirebase, nameSkill: 'Firebase' },
					{ icon: SiJest, nameSkill: 'Jest' },
				]} />
			</div>
		</div>
	)
}
