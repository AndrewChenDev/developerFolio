"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo, socialLinks, personalInfo } from "@/data/portfolio-data"
import { useFadeIn } from "@/hooks/use-fade-in"

export function ContactSection() {
  const { ref, visibleClass } = useFadeIn()

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden px-6 py-24 lg:px-24">
      <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <h2 className={`anim-zoom animate-gpu mb-4 text-sm font-medium uppercase tracking-widest text-primary ${visibleClass}`}>
          Get in Touch
        </h2>

        <p
          className={`anim-fade-left animate-gpu delay-100 mb-16 max-w-2xl text-3xl font-bold text-foreground md:text-4xl ${visibleClass}`}
        >
          {"Let's work together on your next project"}
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className={`anim-fade-left animate-gpu delay-200 ${visibleClass}`}>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Contact Information</h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`anim-fade-left animate-gpu flex items-center gap-4 ${visibleClass}`}
                  style={{ transitionDelay: `${250 + index * 100}ms` }}
                >
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground transition-colors hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-sm font-medium text-muted-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`anim-zoom animate-gpu rounded-lg bg-secondary p-3 text-muted-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground ${visibleClass}`}
                    aria-label={link.label}
                    style={{ transitionDelay: `${500 + index * 80}ms` }}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`anim-fade-right animate-gpu delay-300 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center lg:p-8 ${visibleClass}`}
          >
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">Send me an email</h3>
            <p className="mt-2 max-w-sm text-muted-foreground">
              Have a project in mind or just want to say hello? Drop me a line and I'll get back to you.
            </p>
            <Button asChild size="lg" className="mt-6 gap-2">
              <a href="mailto:andrew@andrew.ac">
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </Button>
          </div>
        </div>

        <footer className={`anim-fade-up animate-gpu delay-600 mt-24 border-t border-border pt-8 text-center ${visibleClass}`}>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  )
}
