export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-black"
    >
      <div className="w-full max-w-2xl">
        <h1
          id="about-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          About
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This project is a browser clone built with Next.js and a feature-based
          folder structure. Each page lives in its own feature module, while
          shared layout components handle navigation across the site.
        </p>
      </div>
    </section>
  );
}
