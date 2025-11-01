"use client"
import SectionTitle from "../SectionTitle"
import { FiGithub } from "react-icons/fi"
import { LuLink } from "react-icons/lu"
import { InfoTipProjects } from "../InfoTipProjects"
import { packages } from "@/data/Common/data"
import AnimatedWrapper from "@/utils/AnimatedWrapper"

const Packages = () => {
  let delayValue = 0
  return (
    <section className="flex flex-col gap-3">
      <SectionTitle title="Packages" />
      <div className="flex flex-col md:gap-2.5 gap-3.5">
        {packages.map((pkg, index) => (
          <AnimatedWrapper
            key={pkg.id}
            delay={index === 0 ? delayValue : (delayValue += 0.075)}
          >
            <div className="bg-zinc-900 border border-zinc-700 rounded-md p-4 hover:bg-zinc-800/75 transition-colors duration-100">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold">{pkg.title}</h1>
                    <p className="opacity-80">{pkg.content}</p>
                  </div>
                  <div className="select-none flex gap-2 px-2 text-base">
                    {pkg.url && (
                      <InfoTipProjects text="Website">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={pkg.url}
                          className="hover:text-zinc-400 transition-colors duration-100"
                        >
                          <LuLink />
                        </a>
                      </InfoTipProjects>
                    )}
                    {pkg.github && (
                      <InfoTipProjects text="Github">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={pkg.github}
                          className="hover:text-zinc-400 transition-colors duration-100"
                        >
                          <FiGithub />
                        </a>
                      </InfoTipProjects>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 select-none">
                  {pkg.skill.map((skill, skillIndex) => (
                    <p
                      key={skillIndex}
                      className="border border-zinc-700 px-2 py-0.5 rounded-md text-sm"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  )
}

export default Packages

