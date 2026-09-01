const iconClass = "w-6 h-6";

const services = [
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    ),
    title: "Custom Airtable Operating System",
    description:
      "We design and build Airtable systems tailored to how your business actually runs — replacing spreadsheets, email threads, and disconnected tools.",
    kicker: "Your business logic, centralized in one source of truth.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "AI Agents & RAG-Powered Knowledge Systems",
    description:
      "We build AI agents that can read, reason, and act — powered by your own data and documents.",
    kicker: "These aren’t chatbots. They’re operational assistants.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    title: "Automation & Workflow Engine",
    description:
      "We automate the manual work that slows your team down and creates errors — using Make.com and reliable integrations.",
    kicker: "Less manual work. Fewer mistakes. Lower stress.",
  },
  {
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Team Portals & CEO Dashboards",
    description:
      "We build dashboards that show you what’s happening in real time — without status meetings or constant check-ins.",
    kicker: "Clarity replaces guesswork.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 lg:px-8 bg-surface-2">
      <div className="reveal max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What We Build
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            What your automation partner builds for you
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Every part of your internal operations — connected, automated, and
            designed to save time, reduce stress, and cut costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card p-8">
              <div className="w-11 h-11 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-gray leading-relaxed mb-3">
                {service.description}
              </p>
              <p className="text-sm font-medium text-accent-light">
                {service.kicker}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
