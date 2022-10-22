import useResourceTwo from "../hooks/useResourcetwo";

const SearchForm = () => {

    const { resources2, createResource2, deleteResource2 } = useResourceTwo();        


    // will need access to scraper to find info
    function submitHandler(event) {
        event.preventDefault();
        const newSearch = {
            keyword: event.target.keyword.value,
            location: event.target.location.value,
        };
        console.log(newSearch)
    }

    return (
        // <h1>{JSON.stringify(resources2)}</h1>
        <div className=" flex h-5/6">
            <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center">
                <input placeholder="job" name="keyword" className="my-20 w-3/5 h-10 bg-emerald-200 rounded" />
                <input name="location" placeholder="location" className="w-3/5 h-10 bg-emerald-200 rounded" />
                <button className="m-5 rounded shadow-xl bg-emerald-500 px-10 py-5 ">Search</button>
            </form>
        </div>
    )
}

export default SearchForm