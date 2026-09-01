import BookingForm from "@/components/BookingForm";

/* The embedded Calendly widget is gone. It rendered cramped inside its own
   700px box, and gating on a short form means the lead reaches the CRM even
   when someone abandons the calendar — which the embed never did. */
export default function Booking({
  source = "home",
  heading = "Start with a 20-minute call.",
  intro = "No pitch and no slides. We look at where your time is actually going and name the one process worth fixing first. If there isn’t one worth paying for, I’ll tell you that.",
}: {
  source?: string;
  heading?: string;
  intro?: string;
}) {
  return (
    <section
      id="book"
      className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-8 bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      <div className="reveal relative max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Next Step
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            {heading}
          </h2>
          <p className="text-lg text-gray leading-relaxed">{intro}</p>
        </div>

        <BookingForm source={source} />
      </div>
    </section>
  );
}
