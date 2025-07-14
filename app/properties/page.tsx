"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Bed, Bath, Square, Filter } from "lucide-react"
import Image from "next/image"

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    priceRange: "All Prices",
    location: "",
    propertyType: "All Types",
    bedrooms: "Any",
  })

  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse Downtown",
      price: 2850000,
      location: "Manhattan, NY",
      beds: 3,
      baths: 2,
      sqft: 2400,
      image: "/images/luxury-penthouse.jpg",
      type: "Penthouse",
    },
    {
      id: 2,
      title: "Modern Villa with Pool",
      price: 1950000,
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      sqft: 4200,
      image: "/images/modern-villa.jpg",
      type: "Villa",
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: 1200000,
      location: "Miami Beach, FL",
      beds: 2,
      baths: 2,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      type: "Condo",
    },
    {
      id: 4,
      title: "Historic Townhouse",
      price: 3200000,
      location: "Boston, MA",
      beds: 4,
      baths: 3,
      sqft: 3200,
      image: "/images/historic-townhouse.jpg",
      type: "Townhouse",
    },
    {
      id: 5,
      title: "Contemporary Loft",
      price: 850000,
      location: "Chicago, IL",
      beds: 2,
      baths: 2,
      sqft: 1600,
      image: "/images/contemporary-loft.jpg",
      type: "Loft",
    },
    {
      id: 6,
      title: "Beachfront Estate",
      price: 4500000,
      location: "Malibu, CA",
      beds: 6,
      baths: 5,
      sqft: 5800,
      image: "/images/beachfront-estate.jpg",
      type: "Estate",
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const filteredProperties = properties.filter((property) => {
    if (filters.priceRange !== "All Prices") {
      const [min, max] = filters.priceRange.split("-").map(Number)
      if (max && (property.price < min || property.price > max)) return false
      if (!max && property.price < min) return false
    }
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false
    if (filters.propertyType !== "All Types" && property.type !== filters.propertyType) return false
    if (filters.bedrooms !== "Any" && property.beds < Number.parseInt(filters.bedrooms)) return false
    return true
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Properties</h1>
          <p className="text-xl text-slate-300">Discover exceptional real estate opportunities</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-900">Filter Properties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={filters.priceRange} onValueChange={(value) => setFilters({ ...filters, priceRange: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Prices">All Prices</SelectItem>
                <SelectItem value="0-1000000">Under $1M</SelectItem>
                <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
                <SelectItem value="2000000-3000000">$2M - $3M</SelectItem>
                <SelectItem value="3000000">$3M+</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />

            <Select
              value={filters.propertyType}
              onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Types">All Types</SelectItem>
                <SelectItem value="Penthouse">Penthouse</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
                <SelectItem value="Loft">Loft</SelectItem>
                <SelectItem value="Estate">Estate</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.bedrooms} onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Any">Any</SelectItem>
                <SelectItem value="1">1+ Bedrooms</SelectItem>
                <SelectItem value="2">2+ Bedrooms</SelectItem>
                <SelectItem value="3">3+ Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
                <SelectItem value="5">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-slate-600">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-500 text-slate-900">{property.type}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{property.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-amber-600">{formatPrice(property.price)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No properties match your current filters.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() =>
                  setFilters({ priceRange: "All Prices", location: "", propertyType: "All Types", bedrooms: "Any" })
                }
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
