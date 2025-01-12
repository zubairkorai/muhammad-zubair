"use client";

import type { JSX } from "react";
import { Github, Linkedin, Mail, User, ScrollText, MapPin, Briefcase, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <ThemeToggle />
      
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <Avatar className="h-40 w-40">
            <AvatarImage src="https://avatars.githubusercontent.com/u/59169211?v=4" />
            <AvatarFallback>MZ</AvatarFallback>
          </Avatar>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-foreground">Muhammad Zubair</h1>
            <p className="mt-2 text-xl text-muted-foreground">Software Engineer | Full Stack Developer</p>
            
            <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/zubairkorai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/muhammad-zubair-a3513219a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:koraizubair5@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="/muhammad-zubair-resume.pdf" target="_blank" download>
                  <ScrollText className="h-5 w-5" />
                  <span className="sr-only">Resume</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <div className="mt-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Passionate full-stack developer dedicated to creating scalable and efficient Applications. 
                  Specialized in React and Node.js, with a strong enthusiasm for learning new technologies and 
                  solving complex challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-4 space-y-4">
            {[
              {
                company: "Ekofib",
                position: "Software Developer",
                duration: "Jun 2024 - Present",
                description: "Developing innovative applications and delivering tailored software solutions",
                tech: ["React", "Node.js", "Express.js", "SQL", "AWS"]
              },
              {
                company: "Code Creatives",
                position: "Jr. PHP Developer",
                duration: "Jan 2024 - May 2024",
                description: "Assisted in developing responsive web applications and collaborated with senior developers to implement new features.",
                tech: ["Laravel", "PHP", "SQL", "JavaScript"]
              }
            ].map((experience) => (
              <Card key={experience.company}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{experience.company}</h3>
                  <div className="mt-2 flex justify-between">
                    <p className="font-medium text-muted-foreground">{experience.position}</p>
                    <p className="text-sm text-muted-foreground">{experience.duration}</p>
                  </div>
                  <p className="mt-2 text-muted-foreground">{experience.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <div
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-1">
            {[
              {
                institution: "Shaheed Benazir Bhutto University",
                degree: "Bachelor of Science in Information Technology",
                duration: "Jan 2020 - Dec 2023",
                highlights: [
                  "CGPA: 3.24/4.0",
                  "Major in Software Engineering",
                  "Relevant Coursework: Data Structures, Algorithms, Object Oriented Programming, Web, Mobile & Desktop Applications Development, Cloud Computing."
                ]
              }
            ].map((education) => (
              <Card key={education.institution}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{education.institution}</h3>
                  <div className="mt-2 flex justify-between">
                    <p className="font-medium text-muted-foreground">{education.degree}</p>
                    <p className="text-sm text-muted-foreground">{education.duration}</p>
                  </div>
                  <div className="mt-2 space-y-1">
                    {education.highlights.map((highlight) => (
                      <p key={highlight} className="text-sm text-muted-foreground">
                        • {highlight}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "AWS", "Docker", "SQL"].map((skill) => (
                    <div
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* <div className="mt-8">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "textiQ",
                description: "Text utility app that provides word count, character count, reading time, and text preview features for quick text analysis.",
                tech: ["React", "JavaScript"],
              },
              {
                title: "weather-app",
                description: "An interactive web application that delivers up-to-date weather information for cities worldwide. Developed using HTML, CSS, and JavaScript.",
                tech: ["HTML", "CSS", "JavaScript"],
              },
              {
                title: "tip-calculator",
                description: "JavaScript-based application to calculate tips quickly and accurately. This project takes in the bill amount, selects a tip percentage, and instantly calculates the tip amount",
                tech: ["HTML", "CSS", "JavaScript"],
              },
              {
                title: "rps-game",
                description: "Simple yet fun web-based Rock, Paper, Scissors game.",
                tech: ["HTML", "CSS", "JavaScript"],
              },
              {
                title: "job_portal-PHP",
                description: "A lightweight PHP MySQL Job Portal project for practice, featuring user registration, job posting, basic search, and MySQL integration. Technologies",
                tech: ["PHP", "MySQL"],
              },
              {
                title: "job_portal-Laravel",
                description: "This platform will offer a user-friendly interface, comprehensive job search functionalities, secure user authentication, and efficient communication channels between employers and candidates.",
                tech: ["PHP", "Laravel", "MySQL"],
              },
            ].map((project) => (
              <Card key={project.title}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">koraizubair5@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Karachi, Pakistan</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Availability</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Full-time Roles</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Code className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Freelance Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="mt-12 text-center text-muted-foreground">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm">
            Crafted with ❤️ and a lot of ☕ by Muhammad Zubair
          </p>
          <p className="mt-2 text-xs opacity-70">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}