import { personalInfo, socialLinks, siteMetadata, education, experiences, contactInfo } from "@/data/portfolio-data"

export function JsonLd() {
  const currentEmployer = experiences[0]

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: siteMetadata.url,
    email: contactInfo[0].value,
    image: `${siteMetadata.url}${siteMetadata.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    sameAs: socialLinks.filter((l) => l.label !== "Email").map((l) => l.href),
    alumniOf: [...new Map(education.map((edu) => [edu.school, {
      "@type": "EducationalOrganization",
      name: edu.school,
    }])).values()],
    worksFor: {
      "@type": "Organization",
      name: currentEmployer.company,
      url: currentEmployer.companyUrl,
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Flutter",
      "AWS",
      "Docker",
      "Full-Stack Development",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.title,
    url: siteMetadata.url,
    description: siteMetadata.description,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  )
}
