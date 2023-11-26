export default function titleToSlug(title) {
  // Convert to lowercase
  const lowercaseTitle = title.toLowerCase();

  // Remove non-alphanumeric characters
  const sanitizedTitle = lowercaseTitle.replace(/[^\w\s]/g, "");

  // Replace spaces with hyphens
  const slug = sanitizedTitle.replace(/\s+/g, "-");

  return slug;
}
