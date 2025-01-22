import { auth } from "@/auth";
import { redirect } from "next/navigation";
import WebappForm from "@/components/WebappForm";

const Page = async() => {
    const session = await auth();
    if(!session) redirect("/")
    return (
        <>
        <section className= "hero_container !min-h-[230px]">
            <h1 className="heading">SUBMIT YOUR WEBSITE</h1>
        </section>
        <WebappForm />
        </>
    )
}

export default Page