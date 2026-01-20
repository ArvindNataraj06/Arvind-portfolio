import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Contact() {
  const { lang } = useUI();
  const t = strings[lang].contactSection;

  const email = "arvind061201@gmail.com";
  const location = "Heidelberg, Germany";
  const linkedinUrl = "https://www.linkedin.com/in/arvind-nataraj-3b4b72320/";
  const githubUrl = "https://github.com/arvindnataraj06";

  const cardBase =
    "rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900";

  const iconWrap =
    "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800";

  const labelCls = "mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100";
  const valueCls = "mt-1 text-sm text-slate-600 dark:text-slate-300";

  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-slate-950">
      <Container>
        {/* Big centered heading like reference */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <a className={cardBase} href={`mailto:${email}`}>
            <div className={iconWrap}>
              <FiMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className={labelCls}>{t.emailLabel}</div>
            <div className={valueCls}>{email}</div>
          </a>

          {/* Location (not clickable) */}
          <div className={cardBase}>
            <div className={iconWrap}>
              <HiOutlineMapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className={labelCls}>{t.locationLabel}</div>
            <div className={valueCls}>{location}</div>
          </div>

          {/* LinkedIn */}
          <a
            className={cardBase}
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className={iconWrap}>
              <FaLinkedinIn className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className={labelCls}>{t.linkedinLabel ?? "LinkedIn"}</div>
            <div className={valueCls}>/in/arvind-nataraj</div>
          </a>

          {/* GitHub */}
          <a
            className={cardBase}
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className={iconWrap}>
              <FaGithub className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className={labelCls}>{t.githubLabel ?? "GitHub"}</div>
            <div className={valueCls}>@arvindnataraj06</div>
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4
              font-semibold text-white shadow-lg transition hover:bg-blue-700
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
              dark:focus:ring-offset-slate-950
            "
          >
            {t.cta}
          </a>
        </div>
      </Container>
    </section>
  );
}
