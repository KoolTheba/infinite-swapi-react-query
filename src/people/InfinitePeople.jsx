import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { Person } from "./Person";

const initialUrl = "https://swapi.dev/api/people";
const fetchUrl = async (url) => {
    const response = await fetch(initialUrl)
    return response.json();
}

const InfinitePeople = () => {
    const { data, isLoading, isError, error, fetchNextPage, hasNextPage} = useInfiniteQuery(
        "star-wars-people",
        ({ pageParam = initialUrl }) => fetchUrl(pageParam),
        {
            getNextPageParam: (lastPage) => lastPage.next || undefined
        }
    );

    if(isLoading){
        return <p className="loading">Loading people...</p>
    }

    if(isError){
        return <p>There was an error: {error.toString()}</p>
    }

    return (
        <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) => (
            pageData.results.map((person) => (
                <Person
                    key={person.name}
                    name={person.name}
                    hairColor={person.hair_color}
                    eyeColor={person.eye_color}
                />
            ))
        ))}
    </InfiniteScroll>
    )
}

export default InfinitePeople;