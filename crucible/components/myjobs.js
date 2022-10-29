import { MyJobsTable } from "../components/myjobstable";
import { CreateJobModal } from "../components/createjobmodal"
import { useState } from 'react';
import { MdOutlineAddCircle } from "react-icons/md";
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
        createResource(data);
    }

    return (
        <>
            <div data-testid="myjobs-1">
                <Head>
                    <title>My Jobs</title>
                </Head>
                <main className="dark:bg-color-main-dark dark:text-color-bright-dark h-screen ">
                    <div className="flex flex-col items-center content-center w-full" >
                        <button id="addjobsbtn" className="flex items-center content-center text-2xl justify-center m-5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark dark:text-neutral-900 py-5 w-4/5 shadow-xl" onClick={() => {
                            setIsModalOpen(true)
                        }}><MdOutlineAddCircle className="mx-3 text-2xl" />
                            <h2>Add New Job</h2></button>

                        <CreateJobModal modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} handleSubmit={handleSubmit} input={resources} className="w-full z-40" />

                        {resources &&
                            <MyJobsTable user={user?.id} input={resources} deleteStand={deleteResource} updateResource={updateResource} className="w-full" />
                        }

                    </div>
                </main>
            </div>
        </>

    )
}

export default MyJobs