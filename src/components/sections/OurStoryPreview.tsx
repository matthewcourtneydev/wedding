import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function OurStoryPreview() {
  return (
    <section className="bg-[var(--cream)] py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          
          {/* Images */}
          <div className="relative mx-auto w-full max-w-2xl pb-16">
            <div className="relative w-[68%] aspect-[4/5] overflow-hidden">
              <Image
                src="/images/story-1.png"
                alt="Matthew and Kate"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 top-[18%] w-[48%] aspect-[4/5] overflow-hidden border-[10px] border-[var(--cream)]">
              <Image
                src="/images/story-2.png"
                alt="Matthew and Kate"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-[18%] w-[42%] aspect-[3/2] overflow-hidden border-[8px] border-[var(--cream)]">
              <Image
                src="/images/story-3.png"
                alt="Matthew and Kate"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="max-w-lg">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--sage-dark)]">
              Our Story
            </p>

            <h2 className="font-display text-5xl font-normal leading-[0.95] text-[var(--espresso)] md:text-6xl">
              Somehow,
              <span className="block italic text-[var(--sage-dark)]">
                we found each other.
              </span>
            </h2>

            <p className="mt-8 text-sm font-light leading-7 text-[var(--espresso)]/65 md:text-base">
              A collection of little moments, questionable decisions, inside
              jokes, adventures, and memories that somehow led us here.
            </p>

            <p className="mt-5 text-sm font-light leading-7 text-[var(--espresso)]/65 md:text-base">
              We&apos;re still writing the full story, but this feels like a
              pretty good chapter.
            </p>

            <Link
              href="/our-story"
              className="mt-10 inline-block border-b border-[var(--espresso)] pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--espresso)]"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}