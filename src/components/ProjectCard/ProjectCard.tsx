import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  projetUrl: string
  imgUrl: string
  imgAlt: string
  title: string
  description: string
  tools: string[]
}

export const ProjectCard = ({ projetUrl, imgUrl, imgAlt, title, description, tools }: ProjectCardProps) => {
  return (
    <Link href={projetUrl} target="_blank" className="bg-primary-hover transition-all hover:scale-105 min-w-[384px] min-h-[320px] h-80 w-96 p-0.5 rounded-[14px]">
      <div className="relative bg-dark dark:shadow-gray-800 hover:shadow-none shadow-md shadow-blue-100 cursor-pointer pb-2 bg-white rounded-xl w-full h-full">
        <Image src={imgUrl} alt={imgAlt} width={384} height={160} className="rounded-t-xl" />
        <div className="flex flex-col gap-3 h-[100px]">
          <h3 className="text-center font-semibold mt-1">{title}</h3>
          <p className="text-center">{description}</p>
        </div>
        <div className="absolute bottom-0 min-w-[384px] w-[384px] flex justify-evenly">
          {tools.map((el, index) => {
            return <div className="" key={index}>#{el}</div>
          })}
        </div>
      </div>
    </Link>
  )
}
