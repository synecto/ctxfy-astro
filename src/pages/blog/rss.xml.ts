import rss from "@astrojs/rss";
import { sanityClient } from "../../lib/sanityClient";

const q = `*[_type=="blogPost"]|order(publishedAt desc)[0...50]{title, "slug": slug.current, excerpt, publishedAt}`;

export async function GET(context) {
    const posts = await sanityClient.fetch(q);

    return rss({
        title: "Cerses Blog",
        description: "Notes, guides, and GTM-ready use cases.",
        site: context.site,
        items: posts.map((p) => ({
            title: p.title,
            description: p.excerpt,
            link: `/blog/${p.slug}/`,
            pubDate: new Date(p.publishedAt),
        })),
    });
}
