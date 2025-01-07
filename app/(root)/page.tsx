import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams } : {searchParams : Promise <{query?: string}>}) {

  const query = (await searchParams).query

  return (
    <>
      <section className="hero_container">
        <p className="tag">PITCH, VOTE, AND GROW</p>
        <h1 className="heading">
          SHARE AND DISCOVER <br />INNOVATIVE WEB APP IDEAS
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit your concepts, gather feedback, and collaborate with a vibrant community.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="web-apps_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Websites"}
        </p>
      </section>
    </>
  );
}
