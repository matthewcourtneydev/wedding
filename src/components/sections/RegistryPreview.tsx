import Link from "next/link";
import Container from "@/components/ui/Container";

export default function RegistryPreview() {
  return (
    <section className="bg-[var(--cream-light)] py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--sage-dark)]">
            Registry
          </p>

          <h2 className="font-display text-5xl font-normal leading-[0.95] text-[var(--espresso)] md:text-6xl">
            Your presence is
            <span className="block italic text-[var(--sage-dark)]">
              present enough.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-[var(--espresso)]/60 md:text-base">
            Celebrating with you is what matters most to us. For those who
            have asked, registry details will be available here as we get
            closer to the wedding.
          </p>

          <Link
            href="/registry"
            className="mt-10 inline-block border-b border-[var(--espresso)] pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--espresso)]"
          >
            View Registry
          </Link>
        </div>
      </Container>
    </section>
  );
}
