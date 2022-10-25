import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Image from 'next/image'
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const AboutTheDevs = () => {
    const imgs = [
        "/data/JaeHeadshot.jpg",
        "/data/JacobHeadshot.png",
        "/data/JJHeadshot.png",
        "/data/PedroHeadshot.jpg",
    ]
    return (
        <>
            <Head>
                <title>About The Devs</title>
            </Head>
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark w-screen">
                {/* h-[calc(100vh-10em)] */}
                <h1 className="text-center">About The Devs</h1>
                <div className="flex flex-row justify-evenly items-center h-5/6">
                    <div className="p-3 w-5/12">
                        <div className="rounded drop-shadow-2xl w-64 h-64 mx-auto flex justify-center shadow-lg">
                            < Image src={imgs[0]} alt="Image of Jae" width={256} height={256} className="rounded-md" />
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/jae-loney/"><AiFillLinkedin className="m-2 text-3xl" /></a>
                            <a href="https://github.com/Jaimierl"><AiFillGithub className="m-2 text-3xl text-3xl" /></a>
                        </div>
                        <p className="text-justify p-3">Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. </p>
                    </div>
                    <div className="p-3 w-5/12">
                        <div className="rounded drop-shadow-2xl  w-64 h-64 mx-auto flex justify-center shadow-lg">
                            < Image src={imgs[1]} alt="Image of Jacob" width={256} height={256} className="rounded-md" />
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/jacobamsbury/"><AiFillLinkedin className="m-2 text-3xl" /></a>
                            <a href="https://github.com/KajeTheCat"><AiFillGithub className="m-2 text-3xl" /></a>
                        </div>
                        <p className="text-justify p-3">Jacob is a Software Engineer, with experience in troubleshooting and finding bugs. He aims to cultivate his skills here at Code Fellows, and utilize them to better his abilities and develop video games in his near future. He is a very customer-oriented developer and listens to his clients needs.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center h-5/6 ">
                    <div className="p-3 w-5/12">
                        <div className="rounded drop-shadow-2xl  w-64 h-64 mx-auto flex justify-center shadow-lg">
                            < Image src={imgs[2]} alt="Image of JJ" width={256} height={256} className="rounded-md" />
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/jpescandor/"><AiFillLinkedin className="m-2 text-3xl" /></a>
                            <a href="https://github.com/jjescandor"><AiFillGithub className="m-2 text-3xl" /></a>
                        </div>
                        <p className="text-justify p-3">Jae is a Software Developer with experience in Project Management and Accounts Management who loves learning, solving problems, and organizing teams. Jae enjoys working with Javascript in both front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. </p>
                    </div>
                    <div className="p-3 w-5/12">
                        <div className="rounded drop-shadow-2xl  w-64 h-64 mx-auto flex justify-center shadow-lg">
                            < Image src={imgs[3]} alt="Image of Pedro" width={260} height={256} className="rounded-md" />
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/pedrogperezalvarez/"><AiFillLinkedin className="m-2 text-3xl" /></a>
                            <a href="https://github.com/PGPere"><AiFillGithub className="m-2 text-3xl" /></a>
                        </div>
                        <p className="text-justify p-3">I have over 15+ years of work experience through various finance roles in corporations like Microsoft and Amazon.  Most recently I pivot into a fintech product role at Expedia.   As a software developer in fintech I plan to develop innovative financial  solutions for customer pain points that have been ignored by commercial banks. As a team member, my style is direct and collaborative which leads to building a better product or service together with others.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutTheDevs