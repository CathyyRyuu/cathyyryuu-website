"use client";
import React from "react";
import dynamic from "next/dynamic";
import RingProgress from "./RingProgress";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "10000",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
];

const progressList = [
  {
    label: "Backend",
    value: 93,
    outOf: 100,
  },
  {
    label: "Frontend",
    value: 90,
    outOf: 100,
  },
  {
    label: "AI Agent",
    value: 80,
    outOf: 100,
  },
  {
    label: "UI/UX",
    value: 98,
    outOf: 100,
  },
];

const AchievementsSection = () => {
  return (
    <div className="bg-[#1e1e1e] shadow-lg rounded-3xl px-4 py-6 xl:gap-16 sm:py-12 xl:px-12">
      <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-4xl">
        Skills
      </h2>
      {/* Achievements carousel */}
      <div className="py-4 overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap gap-6 lg:px-12 snap-x snap-mandatory lg:justify-between">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-2xl font-bold lg:text-4xl"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-8 px-4 sm:px-8 flex flex-wrap justify-center gap-8 lg:justify-between">
        {progressList.map((progress, index) => {
          const percentage = Math.round(
            (progress.value / progress.outOf) * 100
          );
          return (
            <div key={index} className="flex flex-col items-center space-y-2">
              <RingProgress percentage={percentage} label={`${percentage}%`} />
              <p className="text-white text-sm sm:text-base text-center">
                {progress.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
