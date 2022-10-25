import useResource from "../hooks/useResource";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const MyJobsApiData = () => {
    const { resources, createResource, deleteResource } = useResource();
    return (
        <>
            <h1>{JSON.stringify(resources)}</h1>
            <Footer />
        </>
    )
}

export default MyJobsApiData