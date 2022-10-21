import useResource from "../hooks/useResource";

const MyJobs = () => {
    const { resources, createResource, deleteResource } = useResource();
    return <h1>{JSON.stringify(resources)}</h1>
}

export default MyJobs