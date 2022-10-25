import useResource from "../hooks/useResource";
import { MyJobsTable } from "../components/myjobstable";
import { CreateJobModal } from "../components/createjobmodal"
import { useState } from 'react';
import Head from "next/head";

const MyJobs = () => {

    const { resources, createResource, updateResource, deleteResource } = useResource();

    const [modalIsOpen, setIsModalOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            position: e.target.pos.value,
            location: e.target.loc.value,
            description: e.target.desc.value,
            employer: e.target.emp.value,
            status: e.target.sts.value,
            note_name: e.target.note.value,
            owner: 1
            // Need to update the owner
        }
        createResource(data);

    }


    return (
        <>
            <Head>
                <title>My Jobs</title>
            </Head>
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <div className="flex flex-col items-center content-center" >

                    <button className="m-5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark dark:text-neutral-900 px-8 py-5" onClick={() => {
                        setIsModalOpen(true)
                    }}>Add New Job</button>

                    <CreateJobModal modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} input={resources} className="w-full z-40" />

                    {resources &&
                        <MyJobsTable input={resources} deleteStand={deleteResource} />
                    }

                    {/*<div className="bg-emerald-50 text-black items-center h-screen content-center items-center">
                <Header user={props.user} logout={props.logout} />
                <main className='flex flex-col items-center h-5/6 overflow-scroll'>
                    <CreateJob handleSubmit={handleSubmit} className="z-0" />
                    {resources &&
                        <OverviewModal modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} input={resources} className="w-full z-40" />}
                    <div className='flex flex-col items-center my-10 z-0'>
                        {resources?.length <= 0 &&
                            <h1 className="text-2xl">
                                No Cookie Stands Available
                            </h1>
                        }*/}
                    {/* {resources &&
                            resources.length > 0 &&
                            <MyJobsTable input={resources} deleteStand={deleteResource} />
                        } */}
                    {/*  </div>
                    {resources &&
                        resources.length > 0 &&
                        <div className="flex z-0">
                            <button onClick={() => {
                                setIsModalOpen(true)
                            }}
                                className='flex flex-row p-4 bg-emerald-700 rounded-md shadow-lg hover:bg-red-200 m-1'
                            >Overview</button>
                        </div>
                    }
                </main>
                
            </div > */}

                </div>
            </main>
        </>

    )
}

export default MyJobs