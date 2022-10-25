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
                <h1>Dashboard</h1>
            </main>
            <Footer />
        </>
    )
}

export default UserHome