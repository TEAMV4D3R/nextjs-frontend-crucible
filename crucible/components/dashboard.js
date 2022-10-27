import { Footer } from "./footer";
import Head from "next/head";
import { useState, useEffect } from "react";
import useResource from "../hooks/useResource";

const UserHome = (props) => {

    // const {resources} = useResource();

    // const[userData, setUserData] = useState([]);

    console.log("dashboard resources", props.resources)
     
    // console.log("RESOURCES", resources)
    // useEffect(() => {
    //     const data = resources?resources.filter(element => {
    //         console.log(element)
    //         return props.user === element?.owner
    //     }): [];
    //     setUserData(data)
    // }, []);
    
    console.log("DATA",props.userData)

    const[userApplied, setUserApplied] = useState(0);
    const[userPending, setUserPending] = useState(0);
    const[userInterview, setUserInterview] = useState(0);
    const[userDeclined, setUserDeclined] = useState(0);
    const[userAccepted, setUserAccepted] = useState(0);
    
    useEffect(() => {
        if (props.resources){
            for (let item of props.resources) {
                if (props.user === item?.owner) { 
                    switch (item.status){
                        case "Applied":
                            setUserApplied(userApplied+1);
                            break;
                        case "Pending":
                            setUserPending(userPending+1);
                            break;
                        case "Interview":
                            setUserInterview(userInterview+1);
                            break;
                        case "Declined":
                            setUserDeclined(userDeclined+1);
                            break;
                        case "Accepted":
                            setUserAccepted(userAccepted+1);
                            break;
                    }
                }
            }
            }

    }, []);


    return (
        <>
            <Head>
                <title>Crucible Home</title>
            </Head>
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <div className="flex flex-row justify-center p-5">
                    <div className="bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <div className="container">
                            <p className="text-center">{userApplied} Applied</p>
                        </div>
                    </div>
                    <div className="bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <div className="container">
                            <p className="text-center">{userPending} Pending</p>
                        </div>
                    </div>
                    <div className="bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <div className="container">
                            <p className="text-center">{userInterview} Interview Scheduled</p>
                        </div>
                    </div>
                    <div className="bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <div className="container">
                            <p className="text-center">{userDeclined} Declined</p>
                        </div>
                    </div>
                    <div className="bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <div className="container">
                            <p className="text-center">{userAccepted} Accepted</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default UserHome