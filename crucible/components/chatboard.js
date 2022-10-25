import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Head from "next/head";

const ChatBoard = () => {
    return (
        <>
            <Head>
                <title>Crucible Home</title>
            </Head>
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <h1>Chat Board</h1>
            </main>
            <Footer />
        </>
    )
}

export default ChatBoard