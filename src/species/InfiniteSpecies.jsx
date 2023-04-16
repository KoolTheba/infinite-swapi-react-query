import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species";
const fetchUrl = async (url) => {
    const response = await fetch(initialUrl)
    return response.json();
}

const InfiniteSpecies = () => {
    const { data, isLoading, isError, error, fetchNextPage, hasNextPage} = useInfiniteQuery(
        "star-wars-species",
        ({ pageParam = initialUrl }) => fetchUrl(pageParam),
        {
            getNextPageParam: (lastPage) => lastPage.next || undefined
        }
    );

    if(isLoading){
        return <p className="loading">Loading species...</p>
    }

    if(isError){
        return <p>Error fetching species: {error.toString()}</p>
    }

    return (
        <>
        <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
            {data.pages.map((speciesData) => (
                    speciesData?.results.map((species) => (
                        <Species
                            key={species.name}
                            name={species.name}
                            language={species.language}
                            averageLifespan={species.average_lifespan}
                        />
                    ))
                ))}

        </InfiniteScroll>
        </>
    )
}

export default InfiniteSpecies;