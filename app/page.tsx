import Image from "next/image";

const properties = [
  {
    title: "Premium 3 BHK Residences",
    location: "Wakad, Pune",
    type: "Residential",
    price: "₹1.25 Cr*",
    status: "New Launch",
  },
  {
    title: "Luxury 2 & 3 BHK Homes",
    location: "Punawale, Pune",
    type: "Residential",
    price: "₹85 Lakh*",
    status: "Featured",
  },
  {
    title: "Premium Commercial Spaces",
    location: "Baner, Pune",
    type: "Commercial",
    price: "Price on Request",
    status: "Limited Units",
  },
];

const locations = [
  "Baner",
  "Balewadi",
  "Wakad",
  "Hinjewadi",
  "Punawale",
  "Tathawade",
  "PCMC",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#10182d]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <a href="#home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Ajaat Realty"
              width={190}
              height={80}
              className="h-auto w-[150px] object-contain sm:w-[175px]"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="#properties"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Properties
            </a>

            <a
              href="#services"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Services
            </a>

            <a
              href="#locations"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              Locations
            </a>

            <a
              href="#about"
              className="text-sm font-medium transition hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#10182d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Contact Us
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#10182d] px-5 py-3 text-sm font-semibold text-white md:hidden"
          >
            Enquire
          </a>
        </div>
      </header>


      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#080d20]"
      >
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                Pune Real Estate
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Find the right property.
              <span className="block text-orange-500">
                Make the right move.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Ajaat Realty helps home buyers, investors and businesses discover
              the right real estate opportunities across Pune and PCMC.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#properties"
                className="rounded-full bg-orange-500 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-orange-400"
              >
                Explore Properties
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-500"
              >
                Talk to an Advisor
              </a>

            </div>
          </div>


          {/* SEARCH CARD */}
          <div className="relative z-10 lg:pl-10">

            <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Property Search
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#10182d]">
                What are you looking for?
              </h2>

              <div className="mt-7 grid gap-4">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    I want to
                  </label>

                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-orange-500">
                    <option>Buy a Property</option>
                    <option>Invest in Property</option>
                    <option>Find Commercial Space</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Location
                  </label>

                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-orange-500">
                    <option>Select Location</option>
                    <option>Baner</option>
                    <option>Balewadi</option>
                    <option>Wakad</option>
                    <option>Hinjewadi</option>
                    <option>Punawale</option>
                    <option>Tathawade</option>
                    <option>PCMC</option>
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Property Type
                    </label>

                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-orange-500">
                      <option>Any Type</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4 BHK+</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Budget
                    </label>

                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-orange-500">
                      <option>Any Budget</option>
                      <option>Under ₹75 Lakh</option>
                      <option>₹75 Lakh – ₹1 Cr</option>
                      <option>₹1 – ₹2 Cr</option>
                      <option>₹2 Cr+</option>
                    </select>
                  </div>

                </div>

                <a
                  href="#properties"
                  className="mt-2 rounded-xl bg-[#10182d] px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-orange-500"
                >
                  Search Properties
                </a>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* TRUST BAR */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3 lg:px-8">

          <div>
            <p className="text-2xl font-bold text-[#10182d]">10+</p>
            <p className="mt-1 text-sm text-slate-500">
              Years of Real Estate Experience
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#10182d]">Pune & PCMC</p>
            <p className="mt-1 text-sm text-slate-500">
              Strong Local Market Knowledge
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#10182d]">End-to-End</p>
            <p className="mt-1 text-sm text-slate-500">
              Property Buying & Advisory Support
            </p>
          </div>

        </div>
      </section>


      {/* FEATURED PROPERTIES */}
      <section
        id="properties"
        className="bg-slate-50 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Featured Opportunities
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#10182d] sm:text-5xl">
                Properties worth exploring
              </h2>

              <p className="mt-4 max-w-2xl text-slate-600">
                Discover selected residential and commercial opportunities
                curated by Ajaat Realty.
              </p>
            </div>

            <a
              href="#contact"
              className="text-sm font-bold text-orange-500 hover:text-orange-600"
            >
              View all properties →
            </a>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => (
              <article
                key={property.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-56 overflow-hidden bg-[#10182d]">

                  <div className="absolute inset-0 bg-gradient-to-br from-[#17203b] to-[#070b18]" />

                  <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white">
                    {property.status}
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs uppercase tracking-widest text-white/50">
                      {property.type}
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                      {property.location}
                    </p>
                  </div>

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-[#10182d]">
                    {property.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

                    <div>
                      <p className="text-xs text-slate-400">Starting from</p>
                      <p className="mt-1 font-bold text-[#10182d]">
                        {property.price}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="rounded-full border border-slate-200 px-4 py-2 text-xs font-bold transition hover:border-orange-500 hover:text-orange-500"
                    >
                      Enquire
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section
        id="services"
        className="bg-white px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Our Services
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#10182d] sm:text-5xl">
              More than property search.
              <span className="block text-slate-400">
                We help you make better decisions.
              </span>
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Residential Sales",
                text: "Find homes that match your lifestyle, location and budget.",
              },
              {
                number: "02",
                title: "Property Investment",
                text: "Identify opportunities with strong fundamentals and growth potential.",
              },
              {
                number: "03",
                title: "Commercial Real Estate",
                text: "Find offices, retail spaces and commercial opportunities.",
              },
              {
                number: "04",
                title: "Real Estate Advisory",
                text: "Get practical guidance throughout your property decision.",
              },
            ].map((service) => (
              <div
                key={service.number}
                className="rounded-3xl border border-slate-200 p-7 transition hover:border-orange-200 hover:shadow-lg"
              >

                <span className="text-sm font-bold text-orange-500">
                  {service.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold text-[#10182d]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* LOCATIONS */}
      <section
        id="locations"
        className="bg-[#10182d] px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
            Areas We Serve
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Local expertise across Pune's growth corridors.
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/55">
              We focus on established and emerging real estate markets across
              Pune and PCMC.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">

            {locations.map((location) => (
              <a
                href="#properties"
                key={location}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm font-semibold text-white transition hover:border-orange-500 hover:bg-orange-500"
              >
                {location}
              </a>
            ))}

          </div>

        </div>
      </section>


      {/* ABOUT / WHY US */}
      <section
        id="about"
        className="bg-white px-6 py-24 lg:px-8"
      >

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Why Ajaat Realty
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10182d] sm:text-5xl">
              Real estate decisions deserve clarity.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Buying or investing in real estate is a significant decision.
              Ajaat Realty brings market knowledge, property expertise and a
              client-first approach to every transaction.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[#10182d] px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Speak With Us
            </a>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "Local Market Expertise",
              "Curated Property Opportunities",
              "Transparent Guidance",
              "Personalised Advisory",
              "Residential & Commercial",
              "End-to-End Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                  ✓
                </div>

                <p className="font-semibold text-[#10182d]">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CONTACT CTA */}
      <section
        id="contact"
        className="px-6 pb-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-500 px-8 py-16 sm:px-12 lg:px-16">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Let's Talk
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Looking for your next property?
              </h2>

              <p className="mt-5 text-base leading-7 text-white/80">
                Tell us what you're looking for and our team will help you
                explore the right opportunities.
              </p>

            </div>

            <a
              href="tel:+919999999999"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#10182d] px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#10182d]"
            >
              Talk to Ajaat Realty
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#080d20] px-6 py-14 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div>

              <div className="rounded-xl bg-white p-3 inline-block">
                <Image
                  src="/logo.png"
                  alt="Ajaat Realty"
                  width={180}
                  height={70}
                  className="h-auto w-[160px]"
                />
              </div>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
                Real estate sales and advisory services across Pune and PCMC.
              </p>

            </div>


            <div>
              <h3 className="font-semibold">Explore</h3>

              <div className="mt-5 space-y-3 text-sm text-white/50">
                <a className="block hover:text-orange-500" href="#properties">
                  Properties
                </a>
                <a className="block hover:text-orange-500" href="#services">
                  Services
                </a>
                <a className="block hover:text-orange-500" href="#locations">
                  Locations
                </a>
              </div>
            </div>


            <div>
              <h3 className="font-semibold">Company</h3>

              <div className="mt-5 space-y-3 text-sm text-white/50">
                <a className="block hover:text-orange-500" href="#about">
                  About Us
                </a>
                <a className="block hover:text-orange-500" href="#contact">
                  Contact
                </a>
                <a className="block hover:text-orange-500" href="#contact">
                  Enquiry
                </a>
              </div>
            </div>


            <div>
              <h3 className="font-semibold">Contact</h3>

              <div className="mt-5 space-y-3 text-sm text-white/50">
                <p>Pune, Maharashtra</p>
                <p>+91 99999 99999</p>
                <p>hello@ajaatrealty.com</p>
              </div>
            </div>

          </div>


          <div className="mt-12 border-t border-white/10 pt-7 text-xs text-white/35">
            © {new Date().getFullYear()} Ajaat Realty. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}