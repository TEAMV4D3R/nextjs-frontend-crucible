import { useAuth } from "../contexts/auth";
import LoginForm from "./loginform";
import OverviewModal from "../components/overviewmodal";
import { MyJobsTable } from "../components/myjobsform";
import { CreateJobModal } from "../components/createjobmodal"
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useState } from 'react';

const MyJobs = ({ user, resources, createResource, deleteResource }) => {

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
        }
        console.log("user.username", user.username)
        createResource(data);
        // We need to create views and urls from the user model to pass the owner back to display info for the user only.
    }

    return (
        <div className="flex flex-col" >
            <CreateJobModal handleSubmit={handleSubmit} className="z-0" />
            {resources &&
                <MyJobsTable input={resources} deleteStand={deleteResource} />
            }
            {user ? <div>
                <CreateJobModal handleSubmit={handleSubmit} className="z-0" />

            </div> :
                <LoginForm onLogin={loginHandler} />}
        </div>
    )
}

export default MyJobs