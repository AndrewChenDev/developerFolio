"use client"

import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/portfolio-data"
import { useFadeIn } from "@/hooks/use-fade-in"

export function ExperienceSection() {
  const { ref, visibleClass } = useFadeIn()

  return (
    <section id="experience" ref={ref} aria-labelledby="experience-heading" className="relative overflow-hidden px-6 py-24 lg:px-24">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <h2
          id="experience-heading"
          className={`anim-fade-left animate-gpu mb-16 text-sm font-medium uppercase tracking-widest text-primary ${visibleClass}`}
        >
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="group relative grid gap-4 md:grid-cols-[150px_1fr]">
              <span
                className={`anim-fade-left animate-gpu text-sm font-medium text-muted-foreground ${visibleClass}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {exp.period}
              </span>

              <div
                className={`anim-fade-right animate-gpu rounded-lg p-4 hover:bg-card hover:shadow-lg ${visibleClass}`}
                style={{ transitionDelay: `${100 + index * 150}ms` }}
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  {exp.title} ·{" "}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary transition-colors hover:underline"
                    >
                      {exp.company}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  ) : (
                    <span className="text-primary">{exp.company}</span>
                  )}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{exp.description}</p>
                <div
                  className={`anim-fade-up animate-gpu mt-4 flex flex-wrap gap-2 ${visibleClass}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
