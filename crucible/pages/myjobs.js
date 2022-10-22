import useResource from "../hooks/useResource";
import OverviewModal from "../components/overviewmodal";
import { MyJobsTable } from "../components/myjobsform";
import { CreateJobModal } from "../components/createjobmodal"
import { useEffect, useState } from 'react';

const MyJobs = () => {
    const { resources, createResource, deleteResource } = useResource();
    // const [input, setInput] = useState([]);
    // const [modalIsOpen, setIsModalOpen] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            position: e.target.pos.value,
            location: e.target.loc.value,
            description: e.target.desc.value,
            employer: e.target.emp.value,
            status: e.target.sts.value,
            note_name: e.target.note.value,
        }
        createResource(data);
    }

    return(
        <div className ="flex flex-col" >
            {/* <Head>
               <title>My Jobs</title>
           </Head> */}
            
            <div>
                {/* <CreateJobModal handleSubmit={handleSubmit} className="z-0" /> */}
                <MyJobsTable input={resources}/>
            </div>
           
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
                <Footer input={resources} className="z-40" />
            </div > */}

        </div>
    
    )
}

export default MyJobs