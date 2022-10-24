import useResourceTwo from "../hooks/useResourcetwo";
import { useAuth } from "../contexts/auth";
import { useState } from "react";
import { Header } from "./header";
import LoginForm from "./loginform";
import { Footer } from "./footer";

const JobSearch = () => {


    const resources2 = []
    console.log(resources2)

    const [searchResult, setSearchResult] = useState([]);

    const loginHandler = (newUser) => {
        console.log(newUser)
        login(newUser.username, newUser.password)
    }

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
        console.log("logging: ", keyword, ",", location)
        console.log(resources2)
        const tempSearchResult = resources2.filter(arr => {
            console.log("arr position: ", arr.position.toLowerCase())
            console.log(keyword)
            return arr.position.toLowerCase().includes(keyword.toLowerCase()) && arr.location.toLowerCase().includes(location.toLowerCase())
        })
        console.log("temp:", tempSearchResult)
        setSearchResult(tempSearchResult)
        console.log("filtered: ", searchResult)
    }


    return (
        <>
            <div className="bg-color-main dark:bg-color-main-dark h-[calc(100vh-10em)] dark:text-color-bright-dark">
                <h1 className="flex flex-col mx-auto w-4/6 items-center">Job Search</h1>
                <div className=" flex h-5/6">

                    <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center text-color-bright-dark">
                        <input placeholder="Dream Job" name="keyword" className="my-20 w-3/5 h-10 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                        <input name="location" placeholder="Job Location" className="w-3/5 h-10 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                        <button className="m-10 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark
                                px-10 py-5 ">Search</button>
                    </form>
                </div>
                {searchResult.map((el, idx) => {
                    return <div key={idx} className="m-5">
                        <h6>Position:{el.position}</h6>
                        <h6>Location:{el.location}</h6>
                        <h6>Company:{el.company}</h6>
                        <h6>Application Url:{el.url}</h6>
                    </div>
                })
                }
            </div>
            <Footer />
        </>
    )
}

export default JobSearch