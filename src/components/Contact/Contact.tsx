import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Open to opportunities and collaborations. Feel free to reach out."
        />

        <div className="rounded-2xl border p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-600">Email</p>
              <a
                className="font-semibold text-blue-600 hover:underline"
                href="mailto:arvind061201@gmail.com"
              >
                arvind061201@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-600">Location</p>
              <p className="font-semibold">Heidelberg, Germany</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">LinkedIn</p>
              <a
                className="font-semibold text-blue-600 hover:underline"
                href="https://linkedin.com/in/arvind-n/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/arvind-n/
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-600">GitHub</p>
              <a
                className="font-semibold text-blue-600 hover:underline"
                href="https://github.com/arvindnataraj06"
                target="_blank"
                rel="noreferrer"
              >
                github.com/arvindnataraj06
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
