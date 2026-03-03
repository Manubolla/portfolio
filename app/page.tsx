export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-2xl">

        {/* Name & title */}
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Manuel Bolla Agrelo
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          React Native Developer &middot; Buenos Aires, Argentina
        </p>

        {/* Divider */}
        <div className="mt-8 border-t border-zinc-100" />

        {/* Bio */}
        <p className="mt-8 text-base leading-7 text-zinc-600">
          I&apos;m a TypeScript React Native developer who enjoys building apps
          that feel great to use. I like getting involved beyond just coding —
          thinking about how the product works, how people use it, and how it
          can be better.
        </p>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          I&apos;m interested in product-driven companies that focus on quality,
          innovation, and user experience, particularly those building social,
          health &amp; fitness, fintech, or travel apps that improve everyday
          life.
        </p>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/manuel-bolla-agrelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Manubolla"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            GitHub
          </a>
          <a
            href="mailto:manubolla17@gmail.com"
            className="rounded-full border border-zinc-200 px-4 py-2 text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            manubolla17@gmail.com
          </a>
        </div>

      </div>
    </main>
  );
}
