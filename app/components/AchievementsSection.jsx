"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    id: "process",
    label: "Process",
    title: "Business Process Analysis",
    description:
      "I start by understanding how teams work today: where decisions happen, where handoffs break down, and where manual review creates risk or delay.",
    details: ["Workflow mapping", "Pain-point discovery", "Use case prioritization"],
  },
  {
    id: "strategy",
    label: "Strategy",
    title: "AI Strategy",
    description:
      "I help organizations evaluate which AI opportunities are worth pursuing, how to sequence them, and what business outcomes should define success.",
    details: ["Opportunity assessment", "ROI framing", "Governance planning"],
  },
  {
    id: "automation",
    label: "Automation",
    title: "Workflow Automation",
    description:
      "I translate operational bottlenecks into practical AI-enabled workflows with the right balance of automation, human review, and auditability.",
    details: ["Future-state workflows", "RAG systems", "Human-in-the-loop controls"],
  },
  {
    id: "technical",
    label: "Technology",
    title: "Technical Architecture",
    description:
      "I design the system layer that makes AI workflows viable in enterprise environments: data flow, permissions, integrations, APIs, and the architecture required for existing systems to communicate safely.",
    details: ["LLM architecture", "AWS", "System design", "Data integrations", "Permission models", "API architecture"],
  },
  {
    id: "alignment",
    label: "Alignment",
    title: "Stakeholder Alignment",
    description:
      "I work across technical and business teams to make assumptions, constraints, tradeoffs, and ownership clear before implementation begins.",
    details: ["Executive communication", "Change management", "Cross-functional planning"],
  },
  {
    id: "executive",
    label: "Executive",
    title: "Executive Communication",
    description:
      "I turn technical architecture and workflow decisions into clear narratives leadership teams can evaluate, fund, and govern with confidence.",
    details: ["Decision briefs", "Roadmaps", "Implementation guardrails"],
  },
];

const AchievementsSection = () => {
  const [activeId, setActiveId] = useState("process");
  const activeArea = useMemo(
    () => focusAreas.find((area) => area.id === activeId),
    [activeId]
  );

  return (
    <section className="surface-panel rounded-[2rem] p-5 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow mb-3">What I do</p>
          <h2 className="section-title">Process first. AI second.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
            I work at the intersection of business process analysis, AI
            strategy, workflow automation, technical architecture, stakeholder
            alignment, and executive communication.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
            My approach begins with understanding how teams work today before
            recommending technology solutions.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const isActive = area.id === activeId;

            return (
              <button
                key={area.id}
                onClick={() => setActiveId(area.id)}
                className={`toggle rounded-2xl p-4 text-left ${
                  isActive ? "toggle-active" : "toggle-idle"
                }`}
              >
                <span className="block font-hand text-sm font-normal">
                  {area.label}
                </span>
                <span className="mt-2 block text-lg">
                  {area.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={activeArea.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="surface-inset mt-8 grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_0.8fr]"
      >
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
            {activeArea.title}
          </h3>
          <p className="mt-3 leading-7 text-ink-soft">
            {activeArea.description}
          </p>
        </div>

        <div className="flex flex-wrap content-start gap-2">
          {activeArea.details.map((detail) => (
            <span
              key={detail}
              className="chip px-3 py-1.5 text-sm"
            >
              {detail}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
