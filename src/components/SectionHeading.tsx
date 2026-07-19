import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
}: Props) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`kicker ${tone === "light" ? "!text-gold-light" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`${eyebrow ? "mt-3 " : ""}text-[clamp(1.7rem,3.6vw,2.6rem)] ${
          tone === "light" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            tone === "light" ? "text-cream/75" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
