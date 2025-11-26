"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function ProfessionalResume() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="p-8 md:p-12 space-y-8"
      >
        {/* Header */}
        <motion.div variants={fadeIn} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Alex Morgan
          </h1>
          <p className="text-lg text-muted-foreground font-sans uppercase tracking-widest text-sm">
            Senior Software Engineer
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground font-sans pt-2">
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span>alex.morgan@example.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>New York, NY</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/alexmorgan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" />
              <span>alexmorgan.dev</span>
            </div>
          </div>
        </motion.div>

        <Separator />

        {/* Summary */}
        <motion.div variants={fadeIn} className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b-2 border-foreground pb-1 inline-block">
            Professional Summary
          </h2>
          <p className="text-card-foreground leading-relaxed font-sans text-sm md:text-base">
            Results-oriented Senior Software Engineer with over 8 years of
            experience in designing, developing, and deploying scalable web
            applications. Proven track record of leadership, mentoring junior
            developers, and driving technical innovation. Expert in full-stack
            development with a focus on React, Node.js, and cloud architecture.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div variants={fadeIn} className="space-y-6">
          <h2 className="text-xl font-bold text-foreground border-b-2 border-foreground pb-1 inline-block">
            Experience
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-foreground">
                  TechCorp Solutions
                </h3>
                <span className="text-sm font-sans text-muted-foreground">
                  2020 — Present
                </span>
              </div>
              <p className="text-card-foreground font-medium italic mb-2">
                Senior Software Engineer
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-card-foreground font-sans text-sm">
                <li>
                  Architected and led the development of a microservices-based
                  e-commerce platform, handling over 100k daily active users.
                </li>
                <li>
                  Reduced server costs by 40% through optimization of AWS
                  infrastructure and implementation of serverless functions.
                </li>
                <li>
                  Mentored a team of 5 junior developers, conducting code
                  reviews and facilitating technical workshops.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-foreground">
                  Innovate Inc.
                </h3>
                <span className="text-sm font-sans text-muted-foreground">
                  2017 — 2020
                </span>
              </div>
              <p className="text-card-foreground font-medium italic mb-2">
                Software Engineer
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-card-foreground font-sans text-sm">
                <li>
                  Developed key features for the company's flagship SaaS product
                  using React and Redux.
                </li>
                <li>
                  Implemented a real-time notification system using WebSockets,
                  improving user engagement by 25%.
                </li>
                <li>
                  Collaborated with product managers and designers to define
                  requirements and deliver high-quality user experiences.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeIn} className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b-2 border-foreground pb-1 inline-block">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm">
            <div>
              <span className="font-bold text-foreground block mb-1">
                Languages & Frameworks:
              </span>
              <p className="text-card-foreground">
                JavaScript (ES6+), TypeScript, Python, React, Next.js, Node.js,
                Express, Django
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground block mb-1">
                Tools & Platforms:
              </span>
              <p className="text-card-foreground">
                AWS (EC2, Lambda, S3), Docker, Kubernetes, Git, CI/CD (GitHub
                Actions), PostgreSQL, MongoDB
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={fadeIn} className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b-2 border-foreground pb-1 inline-block">
            Education
          </h2>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-bold text-foreground">
                University of Technology
              </h3>
              <span className="text-sm font-sans text-muted-foreground">
                2013 — 2017
              </span>
            </div>
            <p className="text-card-foreground font-sans">
              Bachelor of Science in Computer Science
            </p>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={fadeIn} className="space-y-3">
          <h2 className="text-xl font-bold text-foreground border-b-2 border-foreground pb-1 inline-block">
            Certifications
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-1 text-card-foreground font-sans text-sm">
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>Meta Front-End Developer Professional Certificate</li>
          </ul>
        </motion.div>

        <div className="pt-8 flex justify-center">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
