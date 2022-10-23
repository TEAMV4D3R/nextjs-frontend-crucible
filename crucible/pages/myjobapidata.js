import useResource from "../hooks/useResource";
import { Header } from "../components/header";

const MyJobsApiData = () => {
    const { resources, createResource, deleteResource } = useResource();
    return (
        <>
            <Header />
            <h1>{JSON.stringify(resources)}</h1>
        </>
    )
}

export default MyJobsApiData