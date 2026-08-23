import Link from "next/link";
import Container from "@/components/ui/Container";

export default function RSVPPreview() {
  return (
    <section className="bg-[var(--espresso)] py-24 text-[var(--cream)] md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--sage)]">
            RSVP
          </p>

          <h2 className="font-display text-5xl font-normal leading-[0.95] md:text-7xl">
            Will you be
            <span className="block italic text-[var(--sage)]">
              joining us?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-[var(--cream)]/65 md:text-base">
            When invitations are sent, you&apos;ll be able to find your
            invitation here and RSVP for everyone in your household.
          </p>

          <div className="mx-auto mt-12 max-w-xl border border-[var(--cream)]/20 p-6 md:p-8">
            <div className="text-left">
              <label
                htmlFor="guest-name"
                className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--cream)]/50"
              >
                Find your invitation
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="guest-name"
                  type="text"
                  placeholder="Enter your name"
                  disabled
                  className="w-full border border-[var(--cream)]/20 bg-transparent px-5 py-4 text-sm text-[var(--cream)] outline-none placeholder:text-[var(--cream)]/30 disabled:cursor-not-allowed"
                />

                <button
                  disabled
                  className="border border-[var(--cream)] bg-[var(--cream)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--espresso)] disabled:cursor-not-allowed"
                >
                  Search
                </button>
              </div>

              <p className="mt-3 text-xs leading-5 text-[var(--cream)]/35">
                RSVP lookup will open once invitations are sent.
              </p>
            </div>
          </div>

          <Link
            href="/rsvp"
            className="mt-10 inline-block border-b border-[var(--cream)]/60 pb-1 text-[10px] font-semibold uppercase tracking-[0.22em]"
          >
            RSVP Information
          </Link>
        </div>
      </Container>
    </section>
  );
}