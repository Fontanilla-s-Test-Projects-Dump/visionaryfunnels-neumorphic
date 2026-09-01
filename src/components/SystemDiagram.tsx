type StepTone = "blue" | "teal" | "coral";

const steps: Array<{
  title: string;
  detail: string;
  status: string;
  tone: StepTone;
  icon: string;
}> = [
  {
    title: "New inquiry",
    detail: "Captured from your forms",
    status: "RECEIVED",
    tone: "blue",
    icon: "↓",
  },
  {
    title: "AI qualification",
    detail: "Context and intent organized",
    status: "RUNNING",
    tone: "teal",
    icon: "✦",
  },
  {
    title: "CRM update",
    detail: "The right record, in the right place",
    status: "SYNCED",
    tone: "teal",
    icon: "↗",
  },
  {
    title: "Human approval",
    detail: "Your team makes the final call",
    status: "READY",
    tone: "coral",
    icon: "✓",
  },
];

function StepIcon({ tone, children }: { tone: StepTone; children: string }) {
  return (
    <span className={`hero-console__step-icon hero-console__step-icon--${tone}`} aria-hidden="true">
      {children}
    </span>
  );
}

function IntegrationChip({ children }: { children: string }) {
  return <span className="hero-console__integration">{children}</span>;
}

export default function SystemDiagram() {
  return (
    <div
      className="hero-console"
      role="img"
      aria-label="Live AI operations console showing an inquiry moving through qualification, CRM update, and human approval"
    >
      <span className="hero-console__rivet hero-console__rivet--left" aria-hidden="true" />
      <span className="hero-console__rivet hero-console__rivet--right" aria-hidden="true" />

      <div className="hero-console__shell">
        <div className="hero-console__topbar">
          <div>
            <p className="hero-console__label">AI OPERATIONS / CONTROL ROOM</p>
            <p className="hero-console__subtitle">One system, visible at every step</p>
          </div>
          <span className="hero-console__live">
            <span className="hero-console__live-dot" aria-hidden="true" /> LIVE
          </span>
        </div>

        <div className="hero-console__body">
          <div className="hero-console__workflow">
            <div className="hero-console__workflow-head">
              <div>
                <span className="hero-console__eyebrow">ACTIVE WORKFLOW</span>
                <h3>Lead intake → follow-up</h3>
              </div>
              <span className="hero-console__review-tag">HUMAN-REVIEWED</span>
            </div>
            <p className="hero-console__workflow-copy">
              One path from incoming request to the next right action.
            </p>

            <ol className="hero-console__steps" aria-hidden="true">
              {steps.map((step, index) => (
                <li
                  className={`hero-console__step ${index === steps.length - 1 ? "hero-console__step--last" : ""}`}
                  key={step.title}
                >
                  <StepIcon tone={step.tone}>{step.icon}</StepIcon>
                  <span className="hero-console__step-copy">
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                  </span>
                  <span className={`hero-console__step-status hero-console__step-status--${step.tone}`}>
                    {step.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="hero-console__aside" aria-hidden="true">
            <div className="hero-console__next-action">
              <span className="hero-console__eyebrow">NEXT ACTION</span>
              <strong>Review qualified lead</strong>
              <span>AI prepared the context.</span>
              <span className="hero-console__action-state">
                <span className="hero-console__action-check">✓</span> READY FOR YOU
              </span>
            </div>

            <div className="hero-console__safety-card">
              <span className="hero-console__eyebrow">SAFETY CHECK</span>
              <strong>Human approval stays in the loop.</strong>
              <span>Clear handoffs. No black box.</span>
            </div>
          </aside>
        </div>

        <div className="hero-console__footer">
          <span className="hero-console__footer-label">CONNECTED</span>
          <div className="hero-console__integrations">
            <IntegrationChip>CRM</IntegrationChip>
            <IntegrationChip>INBOX</IntegrationChip>
            <IntegrationChip>CALENDAR</IntegrationChip>
            <IntegrationChip>REPORTS</IntegrationChip>
          </div>
          <span className="hero-console__sync">
            <span className="hero-console__sync-dot" aria-hidden="true" /> SYNCING
          </span>
        </div>
      </div>
    </div>
  );
}
