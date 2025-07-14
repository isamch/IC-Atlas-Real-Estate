import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Heart, Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "/images/team-maria.jpg",
      bio: "With over 20 years in luxury real estate, Sarah founded IC Atlas to redefine premium property services.",
    },
    {
      name: "David Chen",
      role: "Senior Partner",
      image: "/images/team-david.jpg",
      bio: "David specializes in high-end commercial properties and has closed over $500M in transactions.",
    },
    {
      name: "Maria Rodriguez",
      role: "Luxury Residential Specialist",
      image: "/images/team-maria.jpg",
      bio: "Maria's expertise in luxury residential properties has earned her recognition as a top performer.",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every aspect of our service delivery.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success and satisfaction are at the heart of everything we do.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as a team to achieve exceptional results for our clients.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />
        <Image src="/images/luxury-interior.jpg" alt="About IC Atlas" fill className="object-cover opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About IC Atlas</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Redefining luxury real estate with unparalleled expertise, integrity, and personalized service since 2008.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2008 by Sarah Mitchell, IC Atlas began with a simple yet powerful vision: to transform the
                  luxury real estate experience through exceptional service, deep market knowledge, and unwavering
                  commitment to our clients.
                </p>
                <p>
                  What started as a boutique agency has grown into one of the most respected names in premium real
                  estate, with a portfolio spanning luxury residential properties, commercial investments, and exclusive
                  developments across major metropolitan markets.
                </p>
                <p>
                  Our success is built on relationships, trust, and an intimate understanding of what makes each
                  property and client unique. We don't just sell properties; we create lasting partnerships and help our
                  clients achieve their real estate dreams.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about-office.jpg"
                alt="IC Atlas Office"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">$2B+</div>
              <div className="text-slate-600">Sales Volume</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">1000+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the IC Atlas difference. Let's discuss your real estate goals.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
