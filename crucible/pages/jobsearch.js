import useResourceTwo from "../hooks/useResourcetwo";

const JobSearch = () => {
    const { resources2, createResource2, deleteResource2 } = useResourceTwo();
    return <h1>{JSON.stringify(resources2)}</h1>
}

export default JobSearch