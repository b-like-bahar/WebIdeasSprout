import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
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
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">{name}</p>
                    </Link>
                    <Link href={`/webapp/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/webapp/${_id}`}>
                <p className="webapp-card_desc">
                    {description}
                </p>
                <img src={image} alt={`${title} website image`} className="webapp-card_img" />
            </Link>
        </li>
    )
}

export default WebappCard