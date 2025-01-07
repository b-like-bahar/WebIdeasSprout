import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react"

const WebappCard = ({post} : {post : WebappCardType}) => {
    const { _createdAt, views, author: {authorId, name}, title, category, _id, image, description} = post;

    return (
        <li className="webapp-card group">
            <div className="flex-between">
                <p className="webapp_card_date">
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>
        </li>
    )
}

export default WebappCard