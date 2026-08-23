import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--espresso)] py-14 text-[var(--cream)]">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[var(--cream)]/20 pt-8 md:flex-row">
          <div>
            <p className="font-display text-3xl">Matthew & Kate</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/50">
              Fall 2027 · Charlotte, NC
            </p>
          </div>

          <p className="text-xs tracking-wide text-[var(--cream)]/40">
            Made with love for our favorite people.
          </p>
        </div>
      </Container>
    </footer>
  );
}