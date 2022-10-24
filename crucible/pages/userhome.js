import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Head from "next/head";

const UserHome = () => {
    
    return (
        <>
            <Head>
                <title>Crucible Home</title>
            </Head>
            {/* <Header /> */}
            <h1>Welcome!</h1>
            <Footer />
        </>
    )
}

export default UserHome