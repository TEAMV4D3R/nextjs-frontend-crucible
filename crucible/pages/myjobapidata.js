import useResource from "../hooks/useResource";

const MyJobsApiData = () => {
    const { resources, createResource, deleteResource } = useResource();
    return(
        <h1>{JSON.stringify(resources)}</h1>
    )
}

export default MyJobsApiData