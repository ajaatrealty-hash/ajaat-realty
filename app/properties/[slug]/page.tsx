import Link from "next/link";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/sanity/client";

export const revalidate = 60;

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Property = {
  _id: string;
  name: string;
  slug: { current: string };
  developer: string;
  location: string;
  city: string;
  propertyType: string;
  configuration: string;
  price: string;
  area: string;
  status: string;
  featured: boolean;
  image: any;
  description: string;
};

async function getProperty(slug: string): Promise<Property | null> {
  return client.fetch(
    `*[_type == "property" && slug.current == $slug][0]`,
    { slug }
  );
}

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { slug } = await params;

  const property = await getProperty(slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      {/* Hero Image */}
      <section className="relative h-[420px] overflow-hidden bg-[#05091c] md:h-[520px]">
        <img
          src={urlFor(property.image).width(1600).height(1000).url()}
          alt={property.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05091c]/90 via-[#05091c]/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <div className="mx-auto max-w-7xl">
            <span className="inline-block rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              {property.status}
            </span>

            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              {property.name}
            </h1>

            <p className="mt-3 text-lg text-gray-200">
              📍 {property.location}, {property.city}
            </p>
          </div>
        </div>
      </section>

      {/* Property Information */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Main Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {property.propertyType}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#111827]">
              {property.name}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {property.description}
            </p>

            {/* Property Details */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-gray-400">Configuration</p>
                <p className="mt-2 text-lg font-bold text-[#111827]">
                  {property.configuration}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-gray-400">Area</p>
                <p className="mt-2 text-lg font-bold text-[#111827]">
                  {property.area}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-2 text-lg font-bold text-[#111827]">
                  {property.location}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-gray-400">Developer</p>
                <p className="mt-2 text-lg font-bold text-[#111827]">
                  {property.developer}
                </p>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <aside>
            <div className="sticky top-8 rounded-3xl bg-[#05091c] p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Starting Price
              </p>

              <p className="mt-3 text-3xl font-bold">
                {property.price}
              </p>

              <div className="my-8 h-px bg-white/10" />

              <p className="text-sm leading-6 text-gray-300">
                Interested in this property? Contact Ajaat Realty for pricing,
                availability, site visits and complete property details.
              </p>

              <Link
                href="/#contact"
                className="mt-8 block rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-orange-400"
              >
                Enquire Now
              </Link>

              <Link
                href="/properties"
                className="mt-3 block rounded-full border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                ← Back to Properties
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
