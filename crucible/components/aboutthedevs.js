import { Footer } from "./footer";
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
                        <p className="text-justify p-3">Jae is a Software Developer with experience in Project Management and Accounts Management who loves writing, solving problems, and organizing teams. Jae enjoys working with Python and Javascript in front-end and back-end applications and hopes to use their skills to bring websites to life with people who are working to change the world for the better. </p>
                    </div>
                    <div className="p-3 w-5/12">
                        <div className="rounded drop-shadow-2xl  w-64 h-64 mx-auto flex justify-center shadow-lg">
                            < Image src={imgs[1]} alt="Image of Jacob" width={256} height={256} className="rounded-md" />
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/jacobamsbury/"><AiFillLinkedin className="m-2 text-3xl" /></a>
                            <a href="https://github.com/KajeTheCat"><AiFillGithub className="m-2 text-3xl" /></a>
                        </div>
                        <p className="text-justify p-3">Jacob is a Software Engineer, with experience in troubleshooting and finding bugs. He has cultivated his skills at Code Fellows, and will utilize them to and develop video games in the near future. He is a very customer-oriented developer and listens to his clients&apos; needs.</p>
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
                        <p className="text-justify p-3">JJ has 10 years of experience in the military and in the private sector. JJ exhibits proficiency in software engineering, data science and program management. JJ specializes in in Artificial Intelligence/Machine Learning, C/C++ backend, Cloud Native Applications, Micro services, Distributed Systems Design/Architecture. JJ is also a robotics enthusiasts and builds and programs Arduino aerial robots in his spare time. </p>
                    </div>
                    <div className="p-3 w-5/12">
                        <div className="rounded drop-shadow-2xl  w-64 h-64 mx-auto flex justify-center shadow-lg">
                            < Image src={imgs[3]} alt="Image of Pedro" width={260} height={256} className="rounded-md" />
                        </div>
                        <div className="flex justify-center mt-3">
                            <a href="https://www.linkedin.com/in/pedrogperezalvarez/"><AiFillLinkedin className="m-2 text-3xl" /></a>
                            <a href="https://github.com/PGPere"><AiFillGithub className="m-2 text-3xl" /></a>
                        </div>
                        <p className="text-justify p-3">Pedro has over 15 years of work experience through various finance roles in corporations like Microsoft and Amazon.  Most recently he pivoted into a fintech product role at Expedia.   As a software developer in fintech he plans to develop innovative financial  solutions for customer pain points that have been ignored by commercial banks. As a team member, his style is direct and collaborative which leads to building a better products or service together with others.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutTheDevs
