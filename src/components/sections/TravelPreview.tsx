import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function TravelPreview() {
  return (
    <section className="bg-[var(--sage-dark)] py-24 text-[var(--cream)] md:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--cream)]/60">
              Travel & Stay
            </p>

            <h2 className="font-display text-5xl font-normal leading-[0.95] md:text-6xl">
              Meet us in
              <span className="block italic text-[var(--cream)]/75">
                Charlotte.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-sm font-light leading-7 text-[var(--cream)]/70 md:text-base">
              We&apos;ll share hotel recommendations, travel details, and a few
              of our favorite places around Charlotte as plans come together.
            </p>

            <div className="mt-10 grid max-w-lg gap-6 sm:grid-cols-2">
              <div className="border-t border-[var(--cream)]/20 pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--cream)]/45">
                  Airport
                </p>

                <p className="font-display mt-2 text-2xl">
                  Charlotte Douglas
                </p>

                <p className="mt-2 text-xs leading-5 text-[var(--cream)]/55">
                  CLT · Charlotte, North Carolina
                </p>
              </div>

              <div className="border-t border-[var(--cream)]/20 pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--cream)]/45">
                  Stay
                </p>

                <p className="font-display mt-2 text-2xl">
                  Hotel details coming
                </p>

                <p className="mt-2 text-xs leading-5 text-[var(--cream)]/55">
                  Room blocks and recommendations will be added later.
                </p>
              </div>
            </div>

            <Link
              href="/travel"
              className="mt-10 inline-block border-b border-[var(--cream)]/70 pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cream)]"
            >
              Travel Information
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--cream)]/15">
              <Image
                src="/images/charlotte.jpeg"
                alt="Charlotte, North Carolina"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[var(--espresso)]/10" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-[8px] uppercase tracking-[0.28em] text-[var(--cream)]/45">
                Charlotte · North Carolina
              </p>

              <p className="font-display text-lg italic text-[var(--cream)]/55">
                Fall 2027
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}