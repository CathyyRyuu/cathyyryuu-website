import React from "react";

const services = [
  {
    name: "AI Opportunity Assessment",
    audience: "For organizations exploring AI initiatives.",
    price: "$3K-$10K",
    deliverables: [
      "Current-state assessment",
      "Workflow review",
      "Use case prioritization",
      "ROI estimation",
      "Executive presentation",
    ],
  },
  {
    name: "AI Workflow Design",
    audience: "For teams with identified opportunities.",
    price: "$10K-$30K",
    deliverables: [
      "Future-state workflow design",
      "AI architecture recommendations",
      "Governance considerations",
      "Change management strategy",
    ],
  },
  {
    name: "AI Implementation Advisory",
    audience: "For organizations actively deploying AI.",
    price: "Monthly retainer",
    deliverables: [
      "Vendor evaluation",
      "Solution architecture review",
      "Executive coaching",
      "Stakeholder alignment",
      "Project oversight",
    ],
  },
];

const ServiceLadderSection = () => {
  return (
    <section id="services" className="py-12 lg:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">Services</p>
          <h2 className="section-title">A practical path from idea to adoption</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          Each engagement is designed to reduce ambiguity, align stakeholders,
          and move AI initiatives toward measurable business value.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.name}
            className="surface-panel flex h-full flex-col rounded-[1.5rem] p-5 transition hover:border-sky-300/50"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                0{index + 1}
              </span>
              <span className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-100">
                {service.price}
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-white">
              {service.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {service.audience}
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Deliverables
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceLadderSection;
