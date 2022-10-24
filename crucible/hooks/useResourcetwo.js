import axios from 'axios';
import useSWR from 'swr';
// USE RESOURCE **TWO** IS BRINGING IN THE SCRAPEDJOBS DATA FROM THE DATABASE

export const apiUrl = process.env.NEXT_PUBLIC_API_URL_2;
import { useAuth } from '../contexts/auth';


export default function useResource2() {

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



    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.refresh,
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
    };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/