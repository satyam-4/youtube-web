import React from "react"
import SkeletonLoader from "../components/loaders/SkeletonLoader.jsx"

const Home = () => {
    const renderSkeletonLoaders = () => {
        const loaders = []
        for(let i = 0; i < 16; i++) {
            loaders.push( <SkeletonLoader key={i} />)
        }
        return loaders
    }

    return (
        <div className="px-1 pb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-5">
            {
                renderSkeletonLoaders()
            }
        </div>
    )
}

export default Home