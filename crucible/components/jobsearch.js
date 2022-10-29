import { useState } from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import axios from 'axios';
import { FaSuitcase, FaBuilding } from "react-icons/fa";


const JobSearch = () => {

    const [searchResult, setSearchResult] = useState([]);

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL_3)
            .then(res => {
                setJobs(res.data);
                console.log("received data = ", res.data);
            })
            .catch(error => console.log("ERRORRRRRR = ", error.message));
    }, []);


    // will need access to scraper to find info
    function submitHandler(event) {
        event.preventDefault();
        const newSearch = {
            keyword: event.target.keyword.value,
            location: event.target.location.value,
        };
        findJobs(newSearch.keyword, newSearch.location)
    }

    const findJobs = (keyword, location) => {
        const tempSearchResult = jobs.filter(arr => {
            return arr.position.toLowerCase().includes(keyword.toLowerCase()) && arr.location.toLowerCase().includes(location.toLowerCase())
        })
        setSearchResult(tempSearchResult)
    }


    return (
        <>
            <div className="flex flex-col item-start content-start bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-screen">
                <form onSubmit={submitHandler} className="flex flex-col mt-20 mx-auto w-4/5 items-center text-color-bright-dark">
                    <div className="flex flex-row items-center w-full">
                        <div className="flex items-center w-2/3 h-20 mr-5 bg-color-contrast dark:bg-color-contrast-dark rounded">
                            <BsSearch className="mx-5 text-4xl" />
                            <input placeholder="Dream Job" name="keyword" className="input w-4/5 py-5 h-20 mr-5 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                        </div>
                        <div className="flex items-center w-1/3 h-20 bg-color-contrast dark:bg-color-contrast-dark rounded">
                            <IoLocation className="mx-5 text-4xl" />
                            <input name="location" placeholder="Job Location" className="input w-1/3 py-5 h-20 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                        </div>
                    </div>
                    <button className="m-10 rounded shadow-xl hy-20 bg-color-highlight dark:bg-color-highlight-dark dark:text-slate-900 w-full py-5">Search</button>
                </form>
                <div className="flex flex-col w-4/5 mx-auto overflow-scroll">
                    {searchResult.map((el, idx) => {
                        return (
                            <div key={idx} className="flex items-center content-center mx-auto my-10 p-5 w-2/5 justify-between bg-violet-200 dark:bg-color-contrast-dark rounded shadow-2xl">
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <FaSuitcase className="text-xl" />
                                        <h6 className="m-3">{el.position}</h6>
                                    </div>
                                    <div className="flex items-center">
                                        <IoLocation className="text-xl" />
                                        <h6 className="m-3">{el.location}</h6>
                                    </div>
                                    <div className="flex items-center">
                                        <FaBuilding className="text-xl" />
                                        <h6 className="m-3">{el.company}</h6>
                                    </div>
                                </div>
                                <button className="mr-10 p-5 bg-color-shadow dark:bg-color-highlight-dark rounded dark:text-slate-900" href={el.url}>Apply</button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default JobSearch