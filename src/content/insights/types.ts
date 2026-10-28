export interface Article {
  slug: string;
  title: string;
  /** Publish date (yyyy-mm-dd). Articles with a future date stay hidden until that day. */
  date: string;
  /** One or two sentences used for the meta description and article cards */
  description: string;
  category: string;
  readingTime: number;
  /** Unsplash image URL without query string; sizes are added where it's used */
  image: string;
  /** Article body in a small Markdown subset: "## " headings, "- " bullets, **bold**, blank-line paragraphs */
  body: string;
}
