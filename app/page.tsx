import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, ArrowRight, Home, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Penthouse Downtown",
      price: "$2,850,000",
      location: "Manhattan, NY",
      beds: 3,
      baths: 2,
      sqft: "2,400",
      image: "/images/luxury-penthouse.jpg",
      type: "Penthouse",
    },
    {
      id: 2,
      title: "Modern Villa with Pool",
      price: "$1,950,000",
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "/images/modern-villa.jpg",
      type: "Villa",
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: "$1,200,000",
      location: "Miami Beach, FL",
      beds: 2,
      baths: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      type: "Condo",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Investor",
      content:
        "IC Atlas helped me find the perfect investment property. Their expertise and attention to detail is unmatched.",
      rating: 5,
      image: "/images/client-sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Homeowner",
      content: "Professional, knowledgeable, and truly caring. They made our dream home a reality.",
      rating: 5,
      image: "/images/client-michael.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      content: "The team at IC Atlas guided us through every step. Exceptional service from start to finish.",
      rating: 5,
      image: "/images/client-emily.jpg",
    },
  ]

  const stats = [
    { icon: Home, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "$2B+", label: "Sales Volume" },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60 z-10" />
        <Image src="/images/hero-luxury-home.jpg" alt="Luxury Real Estate" fill className="object-cover" priority />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Discover Your
            <span className="block text-amber-400">Dream Property</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Premium real estate solutions for discerning clients. Experience luxury living with IC Atlas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg"
            >
              <Link href="/properties" className="flex items-center gap-2">
                View Properties <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
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
                    <span className="text-2xl font-bold text-amber-600">{property.price}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 mb-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
            >
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose IC Atlas</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the difference with our premium real estate services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Expert Knowledge</h3>
              <p className="text-slate-600">
                15+ years of experience in luxury real estate with deep market insights and expertise.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Personalized Service</h3>
              <p className="text-slate-600">
                Tailored solutions and dedicated support throughout your real estate journey.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Market Leadership</h3>
              <p className="text-slate-600">
                Proven track record with over $2B in sales volume and industry recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear what our satisfied clients have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through your real estate journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4">
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 bg-transparent"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
