import Link from "next/link";
import Container from "@/components/ui/Container";

const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/wedding", label: "Wedding" },
  { href: "/travel", label: "Travel" },
  { href: "/registry", label: "Registry" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex h-24 items-center justify-between">
        <Link
          href="/"
          className="font-display whitespace-nowrap text-2xl text-[var(--cream)]"
        >
          M <span className="mx-1 italic text-[var(--sage)]">&</span> K
        </Link>
        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--cream)]/70 transition hover:text-[var(--cream)]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/rsvp"
            className="ml-2 border border-[var(--cream)]/60 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--cream)] transition hover:bg-[var(--cream)] hover:text-[var(--espresso)]"
          >
            RSVP
          </Link>
        </nav>
      </Container>
    </header>
  );
}
