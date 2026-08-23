import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] md:min-h-[720px] overflow-hidden bg-[var(--espresso)]">
      <Container className="flex min-h-[760px] md:min-h-[720px] items-center pt-28 pb-16">
      <div className="grid w-full items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-20">
          
          <div className="relative z-10">
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--sage)]">
              Fall 2027 · Charlotte, North Carolina
            </p>

            <h1 className="font-display text-7xl font-normal leading-[0.78] tracking-[-0.035em] text-[var(--cream)] sm:text-8xl md:text-7xl lg:text-[7.5rem]">
              Matthew

              <span className="font-display block py-5 pl-20 text-5xl italic text-[var(--sage)] md:pl-28 md:text-6xl">
                &
              </span>

              Kate
            </h1>

            <p className="mt-10 max-w-md text-sm font-light leading-7 text-[var(--cream)]/65 md:text-base">
              We&apos;re getting married. We can&apos;t wait to celebrate this
              next chapter surrounded by the people we love most.
            </p>

            <Link
              href="/wedding"
              className="mt-9 inline-block border border-[var(--cream)]/70 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cream)] transition hover:bg-[var(--cream)] hover:text-[var(--espresso)]"
            >
              Wedding Details
            </Link>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[4/5] max-h-[72vh] w-full border border-[var(--cream)]/15 bg-[#44362e]">
              <div className="flex h-full flex-col items-center justify-center px-10 text-center">
                <span className="font-display text-4xl italic text-[var(--sage)]/60">
                  M & K
                </span>

                <div className="my-6 h-px w-12 bg-[var(--sage)]/40" />

                <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--cream)]/30">
                  Engagement photograph
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-[var(--sage)]/50" />

            <p className="absolute -right-8 bottom-20 rotate-90 text-[9px] uppercase tracking-[0.3em] text-[var(--sage)]">
              Charlotte · North Carolina
            </p>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[8px] uppercase tracking-[0.3em] text-[var(--cream)]/35">
            Our Wedding
          </span>
          <div className="h-8 w-px bg-[var(--cream)]/25" />
        </div>
      </div>
    </section>
  );
}