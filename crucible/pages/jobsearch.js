import useResourceTwo from "../hooks/useResourcetwo";
import { useAuth } from "../contexts/auth";
import { useState } from "react";
import { Header } from "../components/header";
import LoginForm from "../components/loginform";


const SearchForm = () => {

    const { user, login, logout } = useAuth();

    const { resources2, createResource2, deleteResource2 } = useResourceTwo();
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
        // <h1>{JSON.stringify(resources2)}</h1>
        <>
            <Header />
            {user ?
                <>
                    <div>
                        <div className=" flex h-5/6">
                            <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center">
                                <input placeholder="job" name="keyword" className="my-20 w-3/5 h-10 bg-emerald-200 rounded" />
                                <input name="location" placeholder="location" className="w-3/5 h-10 bg-emerald-200 rounded" />
                                <button className="m-5 rounded shadow-xl bg-emerald-500 px-10 py-5 ">Search</button>
                            </form>
                        </div>
                        {searchResult.map((el, idx) => {
                            return <div key={idx} className="m-5">
                                <h6>position:{el.position}</h6>
                                <h6>location:{el.location}</h6>
                                <h6>company:{el.company}</h6>
                                <h6>url:{el.url}</h6>
                            </div>
                        })
                        }
                    </div>
                </> :
                <LoginForm onLogin={loginHandler} />
            }
        </>
    )
}

export default SearchForm