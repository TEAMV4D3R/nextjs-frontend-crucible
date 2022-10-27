import { Footer } from "./footer";
import Head from "next/head";


//add darkmode
const UserHome = ({ resources }) => {

    console.log("dashboard", resources)
    return (
        <>
            <Head>
                <title>Crucible Home</title>
            </Head>
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <div className="flex flexrow justify-center p-5">
                    <div className="bg-gray-500 mx-4 p-5 rounded">
                        <div className="container">
                            <p>0 Applied</p>
                        </div>
                    </div>
                    <div className="bg-gray-500 mx-4 p-5 rounded">
                        <div className="container">
                            <p>0 Pending</p>
                        </div>
                    </div>
                    <div className="bg-gray-500 mx-4 p-5 rounded">
                        <div className="container">
                            <p>0 Declined</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default UserHome