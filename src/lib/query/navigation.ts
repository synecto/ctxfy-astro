import groq from "groq";
import { sanityClient } from "@lib/sanityClient";

export const navigationQuery = groq`*[_type=="navigationSettings"][0]{
  primaryLinks[]{
    label,
    href
  },
  featuresMenu{
    sections[]{
      sectionTitle,
      items[]{
        label,
        href,
        icon,
        description
      }
    }
  },
  platformMenu{
    items[]{
      title,
      description,
      href,
      image
    }
  },
  supportMenu{
    sections[]{
      sectionTitle,
      items[]{
        label,
        href,
        icon,
        description
      }
    }
  },
  downloadsMenu{
    sections[]{
      sectionTitle,
      items[]{
        label,
        href,
        icon,
        description
      }
    }
  },
  useCasesMenu{
    sections[]{
      sectionTitle,
      items[]{
        label,
        href,
        icon,
        description
      }
    }
  },
  primaryCTA{
    text,
    href
  }
}`;

export async function getNavigationData() {
  try {
    const data = await sanityClient.fetch(navigationQuery);
    return data || null;
  } catch (error) {
    console.error("Error fetching navigation data:", error);
    return null;
  }
}
