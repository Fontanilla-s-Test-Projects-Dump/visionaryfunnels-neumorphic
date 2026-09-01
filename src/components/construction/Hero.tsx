import ChatBridge from "@/components/construction/ChatBridge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-36 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden />

      <div className="hero-zoom relative max-w-7xl mx-auto flex flex-col gap-14 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        <div className="w-full min-w-0 max-w-2xl">
          {/* Eyebrow */}
          <div className="animate-fade-up flex w-fit max-w-full flex-wrap items-center gap-2.5 rounded-full border border-border bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wide text-gray backdrop-blur-sm">
            <span className="relative hidden sm:flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow" />
            </span>
            For general contractors running more than one site
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up mt-7 text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08] sm:leading-[1.05] text-foreground"
            style={{ animationDelay: "0.08s" }}
          >
            Your crew already reports everything.{" "}
            <span className="text-accent-glow">
              It just dies in the group chat.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-gray"
            style={{ animationDelay: "0.16s" }}
          >
            We put an AI in your site chats that turns ordinary conversation
            into a tracked record — issues, materials, deliveries, RFIs — and
            chases whoever owes what. Your foremen keep chatting exactly the way
            they do now.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-8 flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#book"
              className="btn-primary rounded-full bg-accent px-8 py-4 text-center text-base font-semibold text-white"
            >
              Book a 20-minute walkthrough
            </a>
            <a
              href="#bridge"
              className="btn-secondary rounded-full border border-border bg-white/5 px-8 py-4 text-center text-base font-semibold text-foreground"
            >
              See how it works ↓
            </a>
          </div>

          {/* Trust line */}
          <p
            className="animate-fade-up mt-8 font-mono text-xs leading-relaxed tracking-wide text-gray-light"
            style={{ animationDelay: "0.32s" }}
          >
            No new app for the field. No logins below the supervisory line.
            <br className="hidden sm:block" /> Works in Bisaya, Tagalog and
            English — usually all three in one sentence.
          </p>
        </div>

        {/* Hero signature — chat → record */}
        <div
          className="animate-fade-up min-w-0 w-full"
          style={{ animationDelay: "0.4s" }}
        >
          <ChatBridge />
        </div>
      </div>
    </section>
  );
}
