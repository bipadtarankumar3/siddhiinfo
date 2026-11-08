import { services, industries } from "@/lib/data";
import { posts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = "monthly", lastModified = now) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services/", 0.9),
    ...services.map((s) => page(`/services/${s.slug}/`, 0.9)),
    page("/industries/", 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}/`, 0.7)),
    page("/work/", 0.8),
    page("/pricing/", 0.8),
    page("/blog/", 0.7, "weekly"),
    ...posts.map((p) => page(`/blog/${p.slug}/`, 0.6, "yearly", new Date(p.date))),
    page("/about/", 0.5),
    page("/contact/", 0.7),
    page("/privacy-policy/", 0.2, "yearly"),
    page("/terms/", 0.2, "yearly"),
  ];
}
