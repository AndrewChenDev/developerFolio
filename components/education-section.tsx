"use client"

import { Award } from "lucide-react"
import { education, certifications } from "@/data/portfolio-data"
import { useFadeIn } from "@/hooks/use-fade-in"

export function EducationSection() {
  const { ref, visibleClass } = useFadeIn()

  return (
    <section id="education" ref={ref} aria-labelledby="education-heading" className="relative overflow-hidden px-6 py-24 lg:px-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <h2
          id="education-heading"
          className={`anim-fade-left animate-gpu mb-16 text-sm font-medium uppercase tracking-widest text-primary ${visibleClass}`}
        >
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`anim-zoom animate-gpu group rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg ${visibleClass}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <edu.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="mt-1 font-medium text-primary">{edu.school}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.period}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {certifications.length > 0 && (
          <>
            <h3
              className={`anim-fade-up animate-gpu mb-8 mt-16 text-sm font-medium uppercase tracking-widest text-muted-foreground ${visibleClass}`}
              style={{ transitionDelay: "300ms" }}
            >
              Certifications
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`anim-fade-up animate-gpu rounded-lg border border-border bg-card p-4 hover:border-primary/50 ${visibleClass}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <Award className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                  <h4 className="font-medium text-foreground">{cert.name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
