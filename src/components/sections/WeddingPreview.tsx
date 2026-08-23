import Link from "next/link";
import Container from "@/components/ui/Container";

export default function WeddingPreview() {
  return (
    <section className="bg-[var(--cream-light)] py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--sage-dark)]">
            Our Wedding
          </p>

          <h2 className="font-display text-5xl font-normal leading-tight text-[var(--espresso)] md:text-7xl">
            A celebration in
            <span className="block italic text-[var(--sage-dark)]">
              the countryside
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-[var(--espresso)]/65 md:text-base">
            We&apos;re planning a fall weekend surrounded by family, friends,
            and the beauty of the Carolina countryside.
          </p>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 border-y border-[var(--espresso)]/10 py-10 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--sage-dark)]">
                When
              </p>

              <p className="font-display text-3xl text-[var(--espresso)]">
                Fall 2027
              </p>

              <p className="mt-2 text-xs text-[var(--espresso)]/45">
                Exact date to come
              </p>
            </div>

            <div className="sm:border-l sm:border-[var(--espresso)]/10">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--sage-dark)]">
                Where
              </p>

              <p className="font-display text-3xl text-[var(--espresso)]">
                Charlotte, NC
              </p>

              <p className="mt-2 text-xs text-[var(--espresso)]/45">
                Venue details to come
              </p>
            </div>
          </div>

          <Link
            href="/wedding"
            className="mt-12 inline-block border-b border-[var(--espresso)] pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--espresso)]"
          >
            Wedding Details
          </Link>
        </div>
      </Container>
    </section>
  );
}