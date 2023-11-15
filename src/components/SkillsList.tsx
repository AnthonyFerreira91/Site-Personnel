import { IconType } from "react-icons";

type skillObjectType = {
	icon: IconType;
	nameSkill: string;
}

type skillsListProps = {
	skillsObject: skillObjectType[];
	nameSkillsList: string;
}

export const SkillsList = ({ skillsObject, nameSkillsList }: skillsListProps) => {
	return (
		<div className='w-48 space-y-4'>
			<h2 className="text-primary text-3xl font-bold mb-6">{nameSkillsList}</h2>
			{skillsObject.map((el, i) => {
				return (
					<div key={i} className="flex items-center gap-2">
						<el.icon className="text-2xl" /> {el.nameSkill}
					</div>
				);
			})}
		</div>
	)
}
