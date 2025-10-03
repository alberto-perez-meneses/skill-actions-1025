import { Target, Users, Award, TrendingUp } from "lucide-react"

export function Banner() {
  const features = [
    {
      icon: Target,
      number: "1",
      title: "Estrategia Personalizada",
      description: "Desarrollamos soluciones adaptadas a las necesidades específicas de su empresa.",
    },
    {
      icon: Users,
      number: "2",
      title: "Equipo Experto",
      description: "Profesionales altamente calificados con años de experiencia en el sector.",
    },
    {
      icon: Award,
      number: "3",
      title: "Calidad Garantizada",
      description: "Comprometidos con los más altos estándares de calidad en cada proyecto.",
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Resultados Medibles",
      description: "Enfoque basado en datos para maximizar el retorno de su inversión.",
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Nuestros Pilares Fundamentales</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Construimos relaciones duraderas basadas en confianza, innovación y resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative bg-background p-8 rounded-lg border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6">
                <div className="text-6xl font-bold text-muted-foreground/20 mb-4">{feature.number}</div>
                <feature.icon className="h-10 w-10 mb-4" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
