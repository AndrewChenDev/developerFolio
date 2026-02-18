"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/portfolio-data"
import { useFadeIn } from "@/hooks/use-fade-in"

export function ProjectsSection() {
  const { ref, visibleClass } = useFadeIn()

  return (
    <section id="projects" ref={ref} aria-labelledby="projects-heading" className="relative overflow-hidden px-6 py-24 lg:px-24">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <h2
          id="projects-heading"
          className={`anim-fade-up animate-gpu mb-16 text-sm font-medium uppercase tracking-widest text-primary ${visibleClass}`}
        >
          Featured Projects
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`${index % 2 === 0 ? "anim-fade-left" : "anim-fade-right"} animate-gpu group overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${visibleClass}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
{project.image && (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `Screenshot of ${project.title}`}
                  width={600}
                  height={192}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Source Code
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
