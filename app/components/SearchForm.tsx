import Form from "next/form"
import {Search} from "lucide-react"

const SearchForm = () => {

    return (
        <Form action="/" scroll={false} className="search-bar" >
            <input
                name="query"
                defaultValue=""
                className="search-input"
                placeholder="Search Startups"
            />
            <div className="flex gap-2">
                <button type="submit" className="search-btn text-black">
                    <Search className="size-5" />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm