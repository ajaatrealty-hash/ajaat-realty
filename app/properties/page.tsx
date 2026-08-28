import Link from "next/link";
import { client, urlFor } from "@/sanity/client";

export const revalidate = 60; // refresh data every 60 seconds

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

async function getProperties(): Promise<Property[]> {
  return client.fetch(`*[_type == "property"] | order(_createdAt desc)`);
}

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      {/* Page Header */}
      <section className="bg-[#05091c] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-orange-500">
            AJAAT REALTY
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Properties
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Explore carefully selected residential and commercial properties
            across Pune and surrounding locations.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Featured & Available
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#111827]">
              Find your next property
            </h2>
          </div>

          <p className="hidden text-sm text-gray-500 md:block">
            {properties.length} properties
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property._id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={urlFor(property.image).width(800).height(600).url()}
                  alt={property.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                {property.status && (
                  <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    {property.status}
                  </span>
                )}
              </div>

              {/* Property Details */}
              <div className="p-6">
                <p className="text-sm font-medium text-orange-500">
                  {property.propertyType}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#111827]">
                  {property.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  📍 {property.location}, {property.city}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 text-sm">
                  <div>
                    <p className="text-gray-400">Configuration</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {property.configuration}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Area</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {property.area}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Starting Price
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#111827]">
                    {property.price}
                  </p>
                </div>

                <Link
                  href={`/properties/${property.slug.current}`}
                  className="mt-6 block rounded-full bg-[#05091c] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-500"
                >
                  View Property
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}