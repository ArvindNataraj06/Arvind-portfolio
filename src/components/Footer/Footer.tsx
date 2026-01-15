import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Arvind Nataraj</p>
          <p className="text-sm text-slate-600">
            Frontend Developer · Master’s Student
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Arvind Nataraj. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
