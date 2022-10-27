import { MyJobsTable } from "../components/myjobstable";
import { CreateJobModal } from "../components/createjobmodal"
import { useState } from 'react';
import Head from "next/head";

const MyJobs = ({ resources, createResource, updateResource, deleteResource, user }) => {

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
            owner: user?.id
        }
        setIsModalOpen(false)
        console.log("job stuff = ", data)
        createResource(data);

    }

    return (
        <>
            <Head>
                <title>My Jobs</title>
            </Head>
            <main className="bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <div className="flex flex-col items-center content-center" >

                    <button className="m-5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark dark:text-neutral-900 px-8 py-5 w-4/5" onClick={() => {
                        setIsModalOpen(true)
                    }}>Add New Job</button>

                    <CreateJobModal modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} handleSubmit={handleSubmit} input={resources} className="w-full z-40" />

                    {resources &&
                        <MyJobsTable user={user?.id} input={resources} deleteStand={deleteResource} updateResource={updateResource} className="w-4/5" />
                    }

                </div>
            </main>
        </>

    )
}

export default MyJobs