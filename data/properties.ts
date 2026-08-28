export type Property = {
  id: string
  slug: string
  name: string
  developer: string
  location: string
  city: string
  propertyType: string
  configuration: string
  price: string
  area: string
  status: string
  featured: boolean
  image: string
  description: string
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "premium-3-bhk-punawale",
    name: "Premium 3 BHK Residences",
    developer: "Ajaat Realty",
    location: "Punawale",
    city: "Pune",
    propertyType: "Residential",
    configuration: "3 BHK",
    price: "₹98 Lakh onwards",
    area: "1009 – 1015 sq.ft.",
    status: "Ready Possession",
    featured: true,
    image: "/properties/punawale-3bhk.jpg",
    description:
      "Premium 3 BHK residences in Punawale with excellent connectivity and modern lifestyle amenities.",
  },

  {
    id: "2",
    slug: "luxury-residences-wakad",
    name: "Luxury Residences",
    developer: "Ajaat Realty",
    location: "Wakad",
    city: "Pune",
    propertyType: "Residential",
    configuration: "2 & 3 BHK",
    price: "₹85 Lakh onwards",
    area: "850 – 1200 sq.ft.",
    status: "Under Construction",
    featured: true,
    image: "/properties/wakad.jpg",
    description:
      "Contemporary homes in Wakad designed for modern families and investors.",
  },

  {
    id: "3",
    slug: "premium-homes-hinjewadi",
    name: "Premium Homes",
    developer: "Ajaat Realty",
    location: "Hinjewadi",
    city: "Pune",
    propertyType: "Residential",
    configuration: "2 & 3 BHK",
    price: "₹78 Lakh onwards",
    area: "800 – 1150 sq.ft.",
    status: "New Launch",
    featured: true,
    image: "/properties/hinjewadi.jpg",
    description:
      "Well-connected premium residences near Hinjewadi IT corridor.",
  },
]