"use client";

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { SiHackerone, SiBugcrowd } from "react-icons/si";
import Typography from "@mui/material/Typography";

const timelineData = [
  {
    date: "2020 - 2023",
    title: "Bachelor's of Computer Application",
    description: "Asian School of Business - Graduated",
    icon: <SchoolIcon />, 
    color: "primary",
  },
  {
    date: "2021",
    title: "Internship at Network Bulls",
    description: "Worked on network security solutions and gained hands-on experience in networking.",
    icon: <WorkIcon />, 
    color: "secondary",
  },
  {
    date: "2023-present",
    title: "Freelance",
    description: "Building various programs and secure Backends for companies.",
    icon: <WorkIcon />, 
    color: "secondary",
  },
  {
    date: "2024 - Present",
    title: "Bug Hunting - HackerOne",
    description: "Engaged in ethical hacking on HackerOne, identifying vulnerabilities and improving cybersecurity for top companies.",
    icon: <SiHackerone />, 
    color: "inherit",
  },
  {
    date: "2024 - Present",
    title: "Bug Hunting - Bugcrowd",
    description: "Active in Bugcrowd's bug bounty programs, hunting and reporting security issues for a variety of companies.",
    icon: <SiBugcrowd />, 
    color: "warning",
  },
  
];

const Experience = () => {
  return (
    <section className="px-4 lg:px-10 flex justify-center" id="experience">
      <div className="max-w-6xl w-full">
        <p className="text-3xl font-bold mb-12 text-center">Experience</p>
        <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
          <Timeline position="alternate">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} className="mb-6">
                <TimelineSeparator>
                  <TimelineDot color={item.color} className="scale-125 transition-transform duration-300">
                    {item.icon}
                  </TimelineDot>
                  {index < timelineData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent className="py-4 px-4">
                  <Typography variant="body2" className="text-green-400">
                    {item.date}
                  </Typography>
                  <Typography variant="h6" className="text-white">
                    {item.title}
                  </Typography>
                  <Typography className="text-gray-400">
                    {item.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
