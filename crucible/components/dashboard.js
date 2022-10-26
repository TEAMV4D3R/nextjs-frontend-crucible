import { Header } from "./header";
import { Footer } from "./footer";
import Head from "next/head";

const UserHome = () => {

    return (
        <>
            <Head>
                <title>Crucible Home</title>
            </Head>
            {/* <Header /> */}
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <div className="flex flexbox justify-center m-auto">
                    <h1>Welcome to Crucible, user!</h1>
                </div>
                <div className="flex flexbox justify-center pl-10 text-3xl w-1/4 pt-10">
                    <p>Crucible is an amazing application that can help you find that dream job you have been looking for in the job search page, which can be found in the menu!</p>
                </div>
                <div className="flex flexbox justify-left pl-10 text-3xl w-1/4 pt-10">
                    <p>Crucible conveniently helps you log, and take notes of the jobs that you have applied for.</p>
                </div>

                <div className="flex flexrow justify-center p-5">

                    <div class="card" className="bg-gray-500 mx-4 p-5">
                        <div class="container">
                            <p>Applied</p>
                        </div>
                    </div>

                    <div class="card" className="bg-gray-500 mx-4 p-5">
                        <div class="container">
                            <p>Pending</p>
                        </div>
                    </div>

                    <div class="card" className="bg-gray-500 mx-4 p-5">
                        <div class="container">
                            <p>Declined</p>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </>
    )
}

export default UserHome