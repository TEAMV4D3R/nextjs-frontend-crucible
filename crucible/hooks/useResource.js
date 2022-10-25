import axios from 'axios';
import useSWR from 'swr';
// USE RESOURCE IS BRINGING IN THE MYJOBS DATA FROM THE DATABASE

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import { useAuth } from '../contexts/auth';

export default function useResource() {

    const { tokens, logout } = useAuth();

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url, config());

            return response.data;

        } catch (err) {
            handleError(err);
        }
    }

    async function createResource(info) {

        try {
            const Response = await axios.post(apiUrl, info, config());
            console.log(Response.data);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            console.log(err);
            handleError(err);
        }
    }


    async function deleteResource(info) {

        try {
            const url = `${apiUrl}${info.id}/`;
            console.log("delete")
            console.log("config", JSON.stringify(config()));
            const res = await axios.delete(url, config());
            console.log("res", res)
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            console.log("error")
            // handleError(err);
        }
    }

    async function updateResource(resource) {
        deleteResource(resource)
        createResource(resource)
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access,
            },
        };
    }

    function handleError(err) {
        console.error(err);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        updateResource,
    };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/