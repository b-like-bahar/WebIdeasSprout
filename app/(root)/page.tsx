import SearchForm from "../../components/SearchForm";
import WebappCard from "@/components/WebappCard";

export default async function Home({ searchParams } : {searchParams : Promise <{query?: string}>}) {

  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1 , name:"Bahar"},
    _id: 1,
    description: "This is a description",
    image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.03&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    category: "Educational",
    title: "We Robots",
  }
];

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
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
          posts.map((post: WebappCardType) => (
            <WebappCard key={post?._id} post={post}/>
          )) 
        ) : (
            <p className="no-result">No Websites found</p>
        )}
        </ul>
      </section>
    </>
  );
}
