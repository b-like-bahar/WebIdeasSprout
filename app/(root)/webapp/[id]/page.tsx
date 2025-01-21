import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { WEBAPP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";



export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    const post = await client.fetch(WEBAPP_BY_ID_QUERY, { id });

    if (!post) return notFound();


    return (
        <>
        <section className="hero_container !min-h-[230px]">
            <p className="tag">{formatDate(post?._createdAt)}</p>
            <h1 className="heading">{post.title}</h1>
            <p className="sub-heading !max-w-5xl">{post.description}</p>
        </section>
        </>
    )
}

export default Page