import { Footer } from "./footer";
import Head from "next/head";
import { useState, useEffect } from "react";
import useResource from "../hooks/useResource";

const UserHome = (props) => {
    const [userApplied, setUserApplied] = useState(0);
    const [userPending, setUserPending] = useState(0);
    const [userInterview, setUserInterview] = useState(0);
    const [userDeclined, setUserDeclined] = useState(0);
    const [userAccepted, setUserAccepted] = useState(0);

    useEffect(() => {
        if (props.resources) {
            let apply = 0;
            let pending = 0;
            let interview = 0;
            let decline = 0;
            let accepted = 0;

            for (let item of props.resources) {
                if (props.user === item?.owner) {
                    switch (item.status) {
                        case "Applied":
                            apply++;
                            break;
                        case "Pending":
                            pending++;
                            break;
                        case "Interview Scheduled":
                            interview++;
                            break;
                        case "Declined Offer":
                            decline++
                            break;
                        case "Accepted Offer":
                            accepted++
                            break;
                    }
                }
            }
            setUserApplied(apply)
            setUserPending(pending)
            setUserInterview(interview)
            setUserDeclined(decline)
            setUserAccepted(accepted)
        }
    }, []);


    return (
        <>
            <Head>
                <title>Crucible Home</title>
            </Head>
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <div className="flex flex-row justify-center p-5">
                    <div className="flex flex-row bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <h2 className="text-center">Applied</h2>
                        <div className="container">
                            <p className="text-center">{userApplied}</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <h2 className="text-center">Pending</h2>
                        <div className="container">
                            <h2 className="text-center">{userPending}</h2>
                        </div>
                    </div>
                    <div className="flex flex-row bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <h2 className="text-center">Interview Scheduled</h2>
                        <div className="container">
                            <h2 className="text-center">{userInterview}</h2>
                        </div>
                    </div>
                    <div className="flex flex-row bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <h2 className="text-center">Declined</h2>
                        <div className="container">
                            <h2 className="text-center">{userDeclined}</h2>
                        </div>
                    </div>
                    <div className="flex flex-row bg-gray-500 mx-4 p-5 w-1/6 rounded">
                        <h2 className="text-center">Accepted</h2>
                        <div className="container">
                            <h2 className="text-center">{userAccepted}</h2>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default UserHome