"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Program } from "./page";

function ProgramCard({ program }: { program: Program }) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={`/training/${program.id}`}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl group"
      >
      <Card className="bg-white p-6 gap-4 h-full hover:shadow-md transition-shadow border border-gray-100 group-hover:border-secondary">
        {/* Badge + status */}
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <span
            className={`inline-block text-xs font-cairo font-semibold px-3 py-1 rounded-full ${program.badgeClass}`}
          >
            {program.badge}
          </span>
          <span
            className={`text-xs font-tajawal px-3 py-1 rounded-full border ${
              program.statusAvailable
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-gray-50 border-gray-200 text-gray-500"
            }`}
          >
            {program.status}
          </span>
        </div>

        <Card.Header>
          <Card.Title className="font-cairo font-bold text-lg text-foreground leading-snug">
            {program.title}
          </Card.Title>
          {program.meta && (
            <Card.Description className="font-tajawal text-xs text-gray-500">
              <span className="font-cairo font-medium">{program.meta.label}: </span>
              {program.meta.value}
            </Card.Description>
          )}
        </Card.Header>

        <p className="font-tajawal text-sm text-muted leading-relaxed">
          {program.description}
        </p>

        <ul className="flex flex-col gap-2" aria-label={`محاور ${program.title}`}>
          {program.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-2">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"
                aria-hidden="true"
              />
              <span className="font-tajawal text-sm text-foreground/80">{topic}</span>
            </li>
          ))}
        </ul>
      </Card>
      </Link>
    </motion.div>
  );
}

export default function ProgramsGrid({ programs }: { programs: Program[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
    >
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </motion.div>
  );
}
