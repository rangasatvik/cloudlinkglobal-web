export default function Thanks() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">Thanks — you’re on the list.</h1>
        <p className="mt-4 text-white/70">
          We’ll reach out as early access opens.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-white/90"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
