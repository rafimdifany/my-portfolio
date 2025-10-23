import { courses, projects, socialLinks } from "@/data/portfolio";

export const StructuredData = () => {
  const person = {
    "@type": "Person",
    name: "Rafi Mufadhal Difany",
    jobTitle: "Senior Frontend Engineer & UX Writer",
    url: "https://rafi-portfolio.dev",
    sameAs: socialLinks
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
  };

  const creativeWorks = projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    url: project.liveUrl,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Rafi Mufadhal Difany",
    },
    inLanguage: "en",
    keywords: project.tech.join(", "),
  }));

  const courseEntries = courses.map((course) => ({
    "@type": "Course",
    name: course.title,
    provider: {
      "@type": "Organization",
      name: course.provider,
      sameAs: course.certificateUrl,
    },
    url: course.certificateUrl,
    description: course.focus,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [person, ...creativeWorks, ...courseEntries],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
