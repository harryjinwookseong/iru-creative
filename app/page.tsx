import Image from "next/image";

export default function Page() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between bg-black px-6 py-10 text-white sm:px-10 sm:py-12">
      <header className="flex w-full justify-center">
        <Image
          src="/logo.png"
          alt="IRU Creative"
          width={220}
          height={80}
          priority
          className="h-auto w-32 sm:w-40 md:w-48"
          style={{ mixBlendMode: "screen" }}
        />
      </header>

      <section className="flex flex-1 flex-col items-center justify-center gap-4 text-center text-sm leading-relaxed tracking-tight text-white/70 sm:text-base md:text-lg">
        <p>Multidisciplinary design studio based in Korea.</p>
        <p>
          <span className="inline-block whitespace-nowrap">
            We work through infinitely reflective understandings:
          </span>{" "}
          <span className="block whitespace-nowrap lg:inline-block">
            in how people think, shape, and emerge.
          </span>
        </p>
      </section>

      <footer className="grid w-full max-w-5xl grid-cols-[auto_1fr] gap-8 text-xs text-white/70 sm:text-[13px]">
        <div className="flex flex-col items-start gap-1.5 whitespace-nowrap">
          <a
            href="mailto:enquiries@irucreative.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <MailIcon />
            Enquiries
          </a>
          <a
            href="https://www.instagram.com/irucreative"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>
        <div className="flex flex-col items-end gap-1 text-right">
          <span>Business Reg. No. 503-28-52127</span>
          <span>
            101-1101, 26 Bojeong-ro, Yongin-si, Gyeonggi-do, Republic of Korea
          </span>
        </div>
      </footer>
    </main>
  );
}

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
