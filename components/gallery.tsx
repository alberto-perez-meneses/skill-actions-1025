import { Button } from "@/components/ui/button"

export function Gallery() {
  const projects = [
    {
      title: "Transformación Digital",
      category: "Tecnología",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Consultoría Estratégica",
      category: "Negocios",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Innovación Empresarial",
      category: "Desarrollo",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Soluciones Integradas",
      category: "Servicios",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Análisis de Datos",
      category: "Analytics",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Gestión de Proyectos",
      category: "Operaciones",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Descubra cómo hemos ayudado a empresas líderes a alcanzar sus objetivos y superar sus expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium mb-2 text-white/80">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
