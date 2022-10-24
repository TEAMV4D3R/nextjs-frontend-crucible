<<<<<<< HEAD:crucible/components/aboutthedevs.js

=======
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Image from 'next/image'
import Head from "next/head";
>>>>>>> main:crucible/pages/aboutthedevs.js

const AboutTheDevs = () => {
    const imgs = [
        "/data/JaeHeadshot.jpg",
        "/data/JacobHeadshot.png",
        "/data/JJHeadshot.png",
        "/data/JaeHeadshot.jpg",
    ]
    return (
        <>
<<<<<<< HEAD:crucible/components/aboutthedevs.js
            <h1>About The Devs</h1>
=======
            <Head>
                <title>About The Devs</title>
            </Head>
            <Header />
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <h1>About The Devs</h1>
                <div className="flex flex-row w-screen items-center h-5/6 ">
                    <div className = "p-3">
                        <div className="rounded drop-shadow-2xl mx-auto flex justify-center">
                                < Image src={imgs[0]} alt="Image of Jae" width={250} height={250} className="rounded-md" />
                        </div>
                            <p className = "text-justify p-8">Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. </p>
                    </div>
                    <div className = "p-3">
                        <div className="rounded drop-shadow-2xl mx-auto flex justify-center">
                                < Image src={imgs[1]} alt="Image of Jae" width={250} height={250} className="rounded-md" />
                        </div>
                            <p className = "text-justify p-8">Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. </p>
                    </div>
                    <div className = "p-3">
                        <div className="rounded drop-shadow-2xl mx-auto flex justify-center">
                                < Image src={imgs[2]} alt="Image of Jae" width={250} height={250} className="rounded-md" />
                        </div>
                            <p className = "text-justify p-8">Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. </p>
                    </div>
                    <div className = "p-3">
                        <div className="rounded drop-shadow-2xl mx-auto flex justify-center">
                                < Image src={imgs[3]} alt="Image of Jae" width={250} height={250} className="rounded-md" />
                        </div>
                            <p className = "text-justify p-8">Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. </p>
                    </div>
                </div>
            </main>
            <Footer />
>>>>>>> main:crucible/pages/aboutthedevs.js
        </>
    )
}

export default AboutTheDevs
