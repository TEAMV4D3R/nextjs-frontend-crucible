import axios from 'axios';
import useSWR from 'swr';
// USE RESOURCE IS BRINGING IN THE MYJOBS DATA FROM THE DATABASE

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const apiUrl2 = process.env.NEXT_PUBLIC_API_URL_2;
import { useAuth } from '../contexts/auth';

export default function useResource() {

    const { tokens, logout } = useAuth();

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    const { data2, error2, mutate2 } = useSWR([apiUrl, tokens], fetchResource);

    console.log("data2", data2)


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

    async function fetchResource2(url) {

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
        // STRETCH
        // Add ability for user to update an existing resource
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
        resources2: data2,
        error,
        error2,
        loading: tokens && !error && !data,
        loading2: tokens && !error2 && !data2,
        createResource,
        deleteResource,
        updateResource,
    };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/