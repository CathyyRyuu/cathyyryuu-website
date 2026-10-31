import React from "react";

const steps = [
  {
    title: "Discover",
    summary: "Interview stakeholders, understand workflows, and map pain points.",
    items: ["Stakeholder interviews", "Workflow observation", "Pain-point mapping"],
  },
  {
    title: "Diagnose",
    summary: "Separate process, data, governance, and technology issues.",
    items: ["Process gaps", "Data constraints", "Governance needs", "Technology fit"],
  },
  {
    title: "Design",
    summary: "Create the future-state workflow, AI architecture, and adoption path.",
    items: ["Future-state workflow", "AI architecture", "Adoption strategy"],
  },
  {
    title: "Deliver",
    summary: "Support implementation, measure outcomes, and refine continuously.",
    items: ["Implementation support", "Outcome measurement", "Continuous refinement"],
  },
];

const HowIWorkSection = () => {
  return (
    <section id="process" className="py-12 lg:py-16">
      <div className="surface-panel rounded-[2rem] p-5 sm:p-8">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow mb-3">How I work</p>
          <h2 className="section-title">AI is only one piece of the workflow</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft sm:text-base">
            The strongest AI initiatives start with operational context. My
            process keeps business reality, governance, and adoption at the
            center of the solution design.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="surface-inset relative p-5"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="font-display text-lg font-bold text-accent-deep">
                  {step.title}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-clay bg-clay-pale font-display text-sm font-bold text-clay-deep">
                  {index + 1}
                </span>
              </div>

              <p className="min-h-20 text-sm leading-6 text-ink">
                {step.summary}
              </p>

              <ul className="mt-5 space-y-2 border-t-2 border-dashed border-line pt-5 text-sm text-ink-soft">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
