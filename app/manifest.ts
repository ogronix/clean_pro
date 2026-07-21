import type { MetadataRoute } from "next";


export default function manifest():
MetadataRoute.Manifest {

  return {

    name:
      "Premium Gebäudereinigung Hamburg",

    short_name:
      "Reinigung Hamburg",

    description:
      "Professionelle Gebäudereinigung für Unternehmen.",

    start_url:
      "/",

    display:
      "standalone",

    background_color:
      "#FFFFFF",

    theme_color:
      "#2563EB"

  };

}