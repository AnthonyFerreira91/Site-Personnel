'use client';
import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalCard } from "./ModalCard";
import Image from "next/image";
import { ProjectCardProps } from "@/types/ProjectCardProps";

export const ProjectCard = ({ linkUrl, gitUrl, imgUrl, imgAlt, title, description, tools }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)} className="bg-primary-hover transition-all hover:scale-105 min-w-[384px] min-h-[320px] h-80 w-96 p-0.5 rounded-[14px]">
        <div className="relative dark:bg-[#202b3a] dark:shadow-gray-800 hover:shadow-none shadow-md shadow-blue-100 cursor-pointer pb-2 bg-white rounded-xl w-full h-full">
          <Image src={imgUrl} alt={imgAlt} width={384} height={160} className="rounded-t-xl" />
          <div className="flex flex-col justify-center gap-3 h-[130px]">
            <h3 className="text-center font-extrabold text-xl text-primary">{title}</h3>
            <p className="text-center">{description}</p>
          </div>
        </div>
      </button>
      {showModal && createPortal(<ModalCard title={title} description={description} tools={tools} imgUrl={imgUrl} imgAlt={imgAlt} linkUrl={linkUrl} gitUrl={gitUrl} closeModal={() => setShowModal(false)} />, document.body)}
    </div>
  )
}
