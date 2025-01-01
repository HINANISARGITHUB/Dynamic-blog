import { createClient} from "next-sanity";
import  ImageUrlBuilder from "@sanity/image-url";

export const client =  createClient ({
    apiVersion: '2024-12-31',
    dataset: 'production',
    projectId: 'wpycmeoa',
    useCdn: false,
});

const builder = ImageUrlBuilder(client)

export function urlFor (source: any) {
    return builder.image(source);
}