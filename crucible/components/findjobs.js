import useResourceTwo from "../hooks/useResourcetwo";
import { useState } from "react";

const FindJobs = () => {
    // const { resources2, createResource2, deleteResource2 } = useResourceTwo();
    // console.log(resources2)

    const [searchResult, setSearchResult] = useState([]);

    // const findJobs = (keyword, location) => {
    //     console.log("logging: ", keyword, ",", location)
    //     if (resources2) {
    //         const tempSearchResult = resources2.filter(el => {
    //             console.log("arr position: ", el?.position.toLowerCase())
    //             console.log(keyword)
    //             return el?.position.toLowerCase().includes(keyword.toLowerCase()) && el?.location.toLowerCase().includes(location.toLowerCase())
    //         })
    //         console.log("temp:", tempSearchResult)
    //         setSearchResult(tempSearchResult)
    //     }
    //     console.log("filtered: ", searchResult)
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        const newSearch = {
            keyword: event.target.keyword.value,
            location: event.target.location.value,
        };
        // findJobs(newSearch.keyword, newSearch.location)
        console.log("findjobs", newSearch)
    }


    return (
        <div>
            <h1>FindJobs</h1>
            <div className=" flex h-5/6">
                <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center">
                    <input placeholder="job" name="keyword" className="my-20 w-3/5 h-10 bg-emerald-200 rounded" />
                    <input name="location" placeholder="location" className="w-3/5 h-10 bg-emerald-200 rounded" />
                    <button className="m-5 rounded shadow-xl bg-emerald-500 px-10 py-5 ">Search</button>
                </form>
            </div>
            {searchResult.length > 0 &&
                searchResult.map((el, idx) => {
                    return <div key={idx} className="m-5">
                        <h6>position:{el?.position}</h6>
                        <h6>location:{el?.location}</h6>
                        <h6>company:{el?.company}</h6>
                        <h6>url:{el?.url}</h6>
                    </div>
                })}
        </div>

    )
}

export default FindJobs

