import Image from "next/image";

export const Avatar = () => {
	return (
		<div className="w-[200px] h-[200px]">
			<div className="bg-primary p-[3px] rounded-full">
				<Image src="/images/Photo Profil.jpg" alt="Ma photo du portfolio" width={200} height={200} className="rounded-full ml-[0.2px] mb-[0.2px]" />
			</div>
		</div>
	)
}
