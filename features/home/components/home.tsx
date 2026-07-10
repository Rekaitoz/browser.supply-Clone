export default function Home() {
  return (
    <section
      aria-labelledby="home-heading"
      className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-16 font-sans "
    >
      <div className="w-full max-w-2xl text-center sm:text-left">
        <h1
          id="home-heading"
          className="text-3xl font-semibold tracking-tight text-zinc-900 "
        >
          Welcome home
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 ">
          Your browser clone is up and running. Use the navigation above to
          explore the site.
        </p>
      </div>
    </section>
  );
}
