import axios from 'axios';
import useSWR from 'swr';
// USE RESOURCE **TWO** IS BRINGING IN THE SCRAPEDJOBS DATA FROM THE DATABASE

export const apiUrl = process.env.NEXT_PUBLIC_API_URL_2;
import { useAuth } from '../contexts/auth';


    export default function useResourceTwo() {

        const { tokens, logout } = useAuth();
    
        // const { data, error, mutate } = useSWR([apiUrl], fetchResource);
       
    
    
        async function fetchResource(url) {
    
            try {
                const response = await axios.get(url);
    
                console.log("returned response", response.data)
                return response.data;
    
            } catch (err) {
                console.log("err",err)
                handleError(err);
            }
        }


        const data = fetchResource(apiUrl)


    // async function createResource2(info) {

    //     try {
    //         await axios.post(apiUrl, info, config());
    //         mutate(); // mutate causes complete collection to be refetched
    //     } catch (err) {
    //         handleError(err);
    //     }
    // }

    // async function deleteResource2(info) {

    //     try {
    //         const url = `${apiUrl}${info.id}/`;
    //         console.log("delete")
    //         console.log("config", JSON.stringify(config()));
    //         const res = await axios.delete(url, config());
    //         console.log("res", res)
    //         mutate(); // mutate causes complete collection to be refetched
    //     } catch (err) {
    //         console.log("error")
    //         // handleError(err);
    //     }
    // }

    // async function updateResource2(resource) {

    //     deleteResource(resource)
    //     createResource(resource)
    // }


    // helper function to handle getting Authorization headers EXACTLY right
    // function config() {

    //     return {
    //         headers: {
    //             'Authorization': 'Bearer ' + tokens.refresh,
    //         },
    //     };
    // }

    function handleError(err) {
        console.error(err);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources2: data
    }
}
/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/