import useResource from "../hooks/useResource";
<<<<<<< HEAD:crucible/components/myjobapidata.js
=======
import { Header } from "../components/header";
import { Footer } from "../components/footer";
>>>>>>> main:crucible/pages/myjobapidata.js

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