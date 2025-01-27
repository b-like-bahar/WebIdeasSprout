import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import { Author, Webapp } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type WebappTypeCard = Omit<Webapp, "author"> & { author?: Author };

const WebappCard = ({post} : { post : WebappTypeCard }) => {
    const { 
        _createdAt, 
        views, 
        author,
        title, 
        category, 
        _id, 
        image, 
        description,
    } = post;

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
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1">{author?.name}</p>
                    </Link>
                    <Link href={`/webapp/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src= {author?.image!} alt={author?.name!} width={48} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/webapp/${_id}`}>
                <p className="webapp-card_description">
                    {description}
                </p>
                <img src={image} alt={`${title} website image`} className="webapp-card_img" />
            </Link>
            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category?.toLowerCase()}`} >
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="webapp-card-btn" asChild>
                    <Link href={`/webapp/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export const WebappCardSkeleton = () => (
    <>
    {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={cn("skeleton", index)}>
            <Skeleton className="webapp-card-skeleton" />
        </li>
    ))}
    </>
);

export default WebappCard