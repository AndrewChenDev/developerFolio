"use client"
import { FileText, ArrowDown, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo, socialLinks } from "@/data/portfolio-data"
import { useFadeIn } from "@/hooks/use-fade-in"

export function HeroSection() {
  const { ref, visibleClass } = useFadeIn(0.1)

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 pt-20 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative">
        <div className={`anim-fade-up animate-gpu ${visibleClass}`}>
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">{personalInfo.name}</h1>
          <h2 className="mt-3 text-xl font-medium text-primary md:text-2xl">{personalInfo.title}</h2>
        </div>

        <p
          className={`anim-fade-up animate-gpu delay-200 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground ${visibleClass}`}
        >
          {personalInfo.bio}
        </p>

        <p
          className={`anim-fade-up animate-gpu delay-300 mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground ${visibleClass}`}
        >
          {personalInfo.currentWork.description}{" "}
          <span className="font-medium text-foreground">{personalInfo.currentWork.company}</span>,{" "}
          {personalInfo.currentWork.role}
        </p>

        <div className={`anim-zoom animate-gpu delay-400 mt-8 flex flex-wrap justify-center gap-4 ${visibleClass}`}>
          <Button asChild size="lg" className="gap-2">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
              <FileText className="h-4 w-4" />
              View Resume
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>

        <div className={`anim-fade-up animate-gpu delay-500 mt-12 flex items-center justify-center gap-6 ${visibleClass}`}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to experience"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
