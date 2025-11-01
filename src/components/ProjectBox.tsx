"use client"
import React from "react"
import { FiGithub } from "react-icons/fi"
import { GoDotFill } from "react-icons/go"
import { LuLink } from "react-icons/lu"
import { InfoTipProjects } from "./InfoTipProjects"
import Image from "next/image"

interface ProjectBoxProps {
  img: string
  status: boolean
  title: string
  content: string
  url: string
  github: string
  skill: string[]
  featured?: boolean
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  img,
  status,
  title,
  content,
  url,
  github,
  skill,
  featured = false,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-box bg-zinc-900 cursor-pointer hover:bg-zinc-800/75 transition-colors duration-100 border border-zinc-700 rounded-md block"
    >
      <div className="flex md:flex-row flex-col gap-3 p-2">
        <div className="basis-[22%] p-1 select-none">
          <Image
            className="rounded-md md:h-[130px] h-[200px] w-full object-fit"
            src={img}
            alt="Project Image"
            width={200}
            height={200}
          />
        </div>
        <div className="basis-[78%] flex flex-col md:gap-0 gap-1">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center truncate">
              <h1 className="text-2xl font-semibold">{title}</h1>
              {featured && (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-purple-400/10 text-purple-400 border border-purple-400/20">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Main Project
                </div>
              )}
              {status ? (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-green-400/10 text-green-400">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Running
                </div>
              ) : (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-red-400/10 text-red-400">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Building
                </div>
              )}
            </div>
            <div className="select-none flex gap-2 px-2 text-base">
              {url && (
                <InfoTipProjects text="Live">
                  <div
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(url, "_blank")
                    }}
                    className="hover:text-zinc-400 transition-colors duration-100"
                  >
                    <LuLink />
                  </div>
                </InfoTipProjects>
              )}
              {github && (
                <InfoTipProjects text="Github">
                  <div
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(github, "_blank")
                    }}
                    className="hover:text-zinc-400 transition-colors duration-100"
                  >
                    <FiGithub />
                  </div>
                </InfoTipProjects>
              )}
            </div>
          </div>
          <p className="opacity-80">{content}</p>
          <div className="flex flex-wrap gap-1.5 select-none mt-2">
            {skill.map((skillItem, index) => (
              <p
                key={index}
                className="border border-zinc-700 px-2 py-0.5 rounded-md text-sm"
              >
                {skillItem}
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectBox
