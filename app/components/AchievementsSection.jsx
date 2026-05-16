"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const capabilityData = [
  {
    id: "architecture",
    label: "Architecture",
    metric: "LLM",
    title: "Production-ready AI system design",
    description:
      "I design LLM systems that move beyond prototypes: clear retrieval strategy, cloud infrastructure, evaluation loops, cost controls, and reusable implementation patterns.",
    tools: ["LLMs", "RAG", "Cloud Infrastructure", "Evaluation", "Cost Controls"],
    proof: "Scaling and documenting AI architectures so solutions are reliable, maintainable, and reusable across teams.",
  },
  {
    id: "legal",
    label: "Legal AI",
    metric: "Docs",
    title: "Legal document intelligence",
    description:
      "I convert large, complex legal document corpora into structured, reviewable AI workflows with traceability, guardrails, and human-in-the-loop controls.",
    tools: ["Contract Analysis", "Document Extraction", "Citations", "Auditability"],
    proof: "Leading domain-specific AI initiatives such as the Contract Census project for large-scale legal document analysis.",
  },
  {
    id: "finance",
    label: "Finance AI",
    metric: "Risk",
    title: "AI for finance and accounting operations",
    description:
      "I design AI-driven reconciliation and review systems that reduce manual work while improving data reliability, control, and operational confidence.",
    tools: ["AR/AP", "Fixed Assets", "Reconciliation", "Data Reliability"],
    proof: "Designing reconciliation systems for AR/AP and Fixed Assets to reduce manual review for finance teams.",
  },
  {
    id: "adoption",
    label: "Adoption",
    metric: "HITL",
    title: "Responsible adoption in high-stakes domains",
    description:
      "I bridge technical and non-technical teams by making system behavior, limitations, review paths, and long-term ownership explicit.",
    tools: ["Guardrails", "Stakeholder Alignment", "Product Design", "Documentation"],
    proof: "Building internal frameworks that help teams adopt AI sustainably beyond any single implementation.",
  },
];

const AchievementsSection = () => {
  const [activeId, setActiveId] = useState("architecture");
  const activeCapability = useMemo(
    () => capabilityData.find((capability) => capability.id === activeId),
    [activeId]
  );

  return (
    <section className="surface-panel rounded-[2rem] p-5 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow mb-3">Capability map</p>
          <h2 className="section-title">What I bring to AI initiatives</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Click through the focus areas to see how I design, evaluate, and
            scale AI systems for legal, finance, and accounting teams.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-4">
          {capabilityData.map((capability) => {
            const isActive = capability.id === activeId;

            return (
              <button
                key={capability.id}
                onClick={() => setActiveId(capability.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? "border-sky-300 bg-sky-300/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <span className="block text-xs uppercase tracking-[0.18em]">
                  {capability.label}
                </span>
                <span className="mt-3 block text-2xl font-semibold">
                  {capability.metric}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={activeCapability.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-8 grid gap-6 rounded-3xl border border-white/10 bg-[#0d0f13] p-5 sm:p-6 lg:grid-cols-[1fr_0.9fr]"
      >
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {activeCapability.title}
          </h3>
          <p className="mt-3 leading-7 text-slate-300">
            {activeCapability.description}
          </p>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            {activeCapability.proof}
          </p>
        </div>

        <div className="flex flex-wrap content-start gap-2">
          {activeCapability.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
