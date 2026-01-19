import clsx from "clsx";

export default function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={clsx("mb-8", className)}>
      <h2
        className="
          text-2xl font-semibold tracking-tight
          text-slate-900
          dark:text-slate-100
        "
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className="
            mt-2 max-w-2xl text-sm leading-6
            text-slate-600
            dark:text-slate-400
          "
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
