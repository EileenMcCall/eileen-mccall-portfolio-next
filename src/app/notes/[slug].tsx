import { Metadata } from "next";

export default function Note ({ params }) {

}

export async function generateMetadata ({ params: { slug } }: { params: { slug: string }}): Promise<Metadata> {
    var note = 
}