import { client } from '@/sanity/lib/client'
import { WEBAPPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import WebappCard, { WebappTypeCard } from './WebappCard'

const UserWebapps = async({ id }: {id : string}) => {

    const webapps = await client.fetch(WEBAPPS_BY_AUTHOR_QUERY, { id })
    return (
        <>
        {webapps.length > 0 ? (
            webapps.map((webapp: WebappTypeCard) => (
            <WebappCard key={webapp._id} post={webapp} />
        ))
    ) : (
            <p className="no-result">No posts yet</p>
        )}
        </>
    );
};

export default UserWebapps