"use client"

import { skillCategories } from "@/data/portfolio-data"
import { useFadeIn } from "@/hooks/use-fade-in"

export function SkillsSection() {
  const { ref, visibleClass } = useFadeIn()

  return (
    <section id="skills" ref={ref} aria-labelledby="skills-heading" className="relative overflow-hidden bg-card/50 px-6 py-24 lg:px-24">
      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <h2 id="skills-heading" className={`anim-zoom animate-gpu mb-16 text-sm font-medium uppercase tracking-widest text-primary ${visibleClass}`}>
          Skills & Technologies
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`anim-zoom animate-gpu group rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${visibleClass}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
