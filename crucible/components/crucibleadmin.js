
// import useResource from '../hooks/useResource';
// import useResourceTwo from '../hooks/useResourcetwo';
// import { Header } from "./header";
// import { MyJobsTable } from "./myjobsform";
// import { Footer } from "./footer";
// import Head from "next/head";
// import { useEffect, useState } from 'react';

import AboutTheDevs from '../pages/aboutthedevs';
import ChatBoard from '../pages/chatboard';
import JobSearch from '../pages/jobsearch';
import MyJobs from '../pages/myjobs';
import MyJobsApiData from '../pages/myjobapidata';
import Link from 'next/link';

const CrucibleAdmin = () => {

    return (

        <div>
            <h1><Link href="/myjobs">My Jobs</Link></h1>
            <h1><Link href="/myjobapidata">My Jobs - API Data</Link></h1>
            <h1><Link href="/jobsearch">Job Search</Link></h1>
            <h1><Link href="/chatboard">Chat Board</Link></h1>
            <h1><Link href="/aboutthedevs">About The Devs</Link></h1>
        </div>

        
    )
}

export default CrucibleAdmin
