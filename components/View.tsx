import React from 'react'

const View = ({ id }: { id: string }) => {
    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <div className="relative">
                    <div className="absolute -left-4 top-1">
                        <span className="flex size-[11px]">
                            <span className= "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary"></span>
                        </span>
                    </div>
                </div>
            </div>
            <p className="view-text">
                <span className="font-black">100views</span>
            </p>
        </div>
    )
}

export default View