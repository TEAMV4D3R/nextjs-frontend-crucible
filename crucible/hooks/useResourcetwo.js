import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_API_URL_2;
import { useAuth } from '../contexts/auth';

export default function useResourceTwo() {

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

    async function createResource2(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    async function deleteResource2(info) {

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

    async function updateResource2(resource) {
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
        resources2: data,
        error,
        loading2: tokens && !error && !data,
        createResource2,
        deleteResource2,
        updateResource2,
    };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/