"use client";

import { easeIn, motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowDownRight, BsGithub } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Description } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Link } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { TooltipContent } from "@/components/ui/tooltip";
import WorkSliderButtons from "@/components/WorkSliderButtons";
import { projects } from "@/const";

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setProject(projects[activeIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project */}
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none group">
            <div className="flex  flex-col gap-[30px] h-[50%]">
              <div className="text-8xl  leading-none font-extrabold text-transparent text-outline hover:text-outline-hover">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stacks.map((skill, index) => {
                  return (
                    <li key={index} className="text-accent text-xl">
                      {skill.name}
                      {index !== project.stacks.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex gap-4 items-center">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowDownRight className="text-who text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0  bottom-0 bg-black/60 z-20 w-full h-full"></div>
                      <div className="relative w-full h-full ">
                        <img src={project.image} className="object-contain" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc (50%_ - _22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
                xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-
                [44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
