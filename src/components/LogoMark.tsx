import Image from "next/image";

/* The VF mark: a circular badge on a transparent background, so it sits on
   the dark navbar without a box around it. Source is 300×300 with a tRNS
   chunk — keep any replacement transparent or the corners will show. */
export default function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/vf-logo.png`}
      alt="VisionaryFunnels"
      width={300}
      height={300}
      priority
      className={`${className} rounded-full`}
    />
  );
}
