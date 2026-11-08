const plannedFeatures = [
  {
    number: "01",
    title: "Find meaningful work",
    description:
      "Browse community opportunities by cause, location, and time commitment.",
  },
  {
    number: "02",
    title: "Coordinate with care",
    description:
      "Give organizations a clear place to publish needs and manage volunteers.",
  },
  {
    number: "03",
    title: "Follow each application",
    description:
      "Help volunteers understand where they are in the application process.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8 sm:px-10 lg:px-12">
      <header className="flex items-center justify-between border-b border-slate-200 py-4">
        <a className="font-semibold tracking-tight text-slate-950" href="#home">
          VolunteerConnect
        </a>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
          Project proposal
        </span>
      </header>

      <section
        id="home"
        aria-labelledby="hero-title"
        className="grid flex-1 items-center gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24"
      >
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-emerald-800 uppercase">
            Community starts with showing up
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Make it easier to give your time where it matters.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            VolunteerConnect is a provisional project proposal for helping
            community organizations share volunteer opportunities and helping
            people find, apply for, and manage service activities.
          </p>
          <a
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-emerald-800 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            href="#planned-features"
          >
            Explore the proposal
          </a>
        </div>

        <aside className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 sm:p-10">
          <p className="text-sm font-semibold tracking-[0.16em] text-emerald-900 uppercase">
            The opportunity
          </p>
          <p className="mt-5 text-2xl leading-snug font-medium text-slate-950">
            Good intentions need a clear path from discovery to participation.
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            The proposed service brings opportunity listings, volunteer
            profiles, and application updates together in one responsive place.
          </p>
        </aside>
      </section>

      <section
        id="planned-features"
        aria-labelledby="features-title"
        className="border-t border-slate-200 py-12 sm:py-16"
      >
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-emerald-800 uppercase">
            Planned MVP capabilities
          </p>
          <h2
            id="features-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950"
          >
            From discovery to follow-through
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {plannedFeatures.map((feature) => (
            <li
              key={feature.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-sm font-semibold text-emerald-800">
                {feature.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-slate-200 py-6 text-sm text-slate-600">
        WDD 430 · Team 04 · Initial project planning
      </footer>
    </main>
  );
}
