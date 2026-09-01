/* Exported so the page can build FAQ JSON-LD from the same source. */
export const faqs = [
  {
    q: "My crew won't use new software.",
    a: "They won't have to. Nobody below your project-in-charge installs anything, logs into anything, or learns anything — they keep using the same chat groups on the same phones. The only person who sees a new screen is the manager, and what he does there is tick approvals.",
  },
  {
    q: "They speak Bisaya and Tagalog, mixed with English.",
    a: "That's the normal case, not the edge case. This was built on real mixed-language site chatter, and it keeps the crew's exact words alongside an English summary. Nobody has to report in a second language to be understood by the system.",
  },
  {
    q: "Signal on our sites is unreliable.",
    a: "Messages sync whenever the phone finds a connection, exactly the way your group chat already behaves. Nothing is lost because a foreman was in a dead spot at ten in the morning.",
  },
  {
    q: "Does this replace our accounting system?",
    a: "No, and we won't try. It stops at the operational record and hands off to whoever keeps your books. Trying to swallow accounting is how projects like this die.",
  },
  {
    q: "We already have a developer and an existing system.",
    a: "Then we build alongside them, in our own namespace, and we don't touch their work. If you have a project tool you're outgrowing, the bridge feeds it rather than fighting it.",
  },
  {
    q: "What happens when the AI gets something wrong?",
    a: "Your manager sees it before it becomes a record, and fixes it by replying in plain language. Corrections take seconds, and nothing unreviewed propagates into the registry.",
  },
  {
    q: "How long before it's running?",
    a: "The pilot goes live on one project in weeks, not quarters. What actually takes time is the evidence — a couple of weeks of real site conversation before anyone should be convinced it works.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="reveal max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Straight Answers
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The questions contractors actually ask
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="font-heading font-semibold text-foreground group-hover:text-accent-glow transition-colors">
                  {item.q}
                </span>
                <svg
                  className="mt-1 h-4 w-4 flex-none text-gray-light transition-transform duration-200 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <p className="mt-3 pr-10 text-gray leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
