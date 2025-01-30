import { WEBAPPS_QUERY } from "@/sanity/lib/queries";
import SearchForm from "../../components/SearchForm";
import WebappCard, { WebappTypeCard } from "@/components/WebappCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export const revalidate = 60;

export default async function Home({ searchParams } : {searchParams : Promise <{query?: string}>}) {

  const query = (await searchParams).query
  const params = { search: query || null }
  
  const { data: posts } = await sanityFetch({query: WEBAPPS_QUERY, params })

  return (
    <>
      <section className="hero_container">
        <p className="tag">SHARE, EXPLORE, AND INSPIRE</p>
        <h1 className="heading">
          SHARE AND DISCOVER <br />INNOVATIVE WEB APP IDEAS
        </h1>
        <p className="sub-heading !max-w-3xl">
          Share your ideas, explore new perspectives, and inspire innovation within our vibrant community.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="web-apps_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Websites"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
          posts.map((post) => (
            <WebappCard key={post?._id} post={post as WebappTypeCard}/>
          )) 
        ) : (
            <p className="no-result">No Websites found</p>
        )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
