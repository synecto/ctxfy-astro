// src/lib/queries/blog.ts
export const blogIndexQuery = `
{
  "settings": *[_type=="blogSettings" && _id=="blogSettings"][0]{
    title, subtitle,
    featuredPosts[]->{
      title, "slug": slug.current, excerpt, publishedAt,
      category->{title, "slug": slug.current},
      tags[]->{title, "slug": slug.current}
    }
  },
  "categories": *[_type=="blogCategory"]|order(order asc){title, "slug": slug.current},
  "tags": *[_type=="blogTag"]|order(title asc){title, "slug": slug.current},
  "posts": *[_type=="blogPost"]|order(publishedAt desc){
    title, "slug": slug.current, excerpt, publishedAt,
    category->{title, "slug": slug.current},
    tags[]->{title, "slug": slug.current},
    author->{name, role}
  }
}
`;

export const blogPostBySlugQuery = `
*[_type=="blogPost" && slug.current==$slug][0]{
  title, excerpt, publishedAt, updatedAt,
  "slug": slug.current,
  category->{title, "slug": slug.current},
  tags[]->{title, "slug": slug.current},
  author->{name, role, bio},
  body,
  seo,
  relatedUseCases[]->{
    title, "slug": slug.current
  }
}
`;

export const blogSlugsQuery = `*[_type=="blogPost" && defined(slug.current)]{"slug": slug.current}`;
