import { IconType } from "react-icons";

type skillObjectType = {
	icon: IconType;
	nameSkill: string;
}

export type skillsListProps = {
	skillsObject: skillObjectType[];
	nameSkillsList: string;
}