export const CreateJobModal = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className='flex flex-col items-center bg-emerald-300 w-2/3 mx-auto my-10 rounded drop-shadow-md z-0'>
            <h1 className="m-4 text-2xl">Add a Job to Track!</h1>
            <div className='flex flex-grow items-center justify-evenly w-full p-2'>
                <label>Position</label>
                <input name="pos" className='bg-sky-100 w-5/6 m-2 rounded' required />
            </div>
            <div className="flex flex-row flex-grow items-center content-center justify-center w-full">
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3 rounded'>
                    <label>Location</label>
                    <input name="loc" className='bg-white w-5/6 rounded' required />
                </div>
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3 rounded'>
                    <label>Description</label>
                    <input name="desc" className='bg-white w-5/6 rounded' required />
                </div>
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3'>
                    <label>Employer</label>
                    <input name="emp" className='bg-white w-5/6 rounded' required />
                </div>
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3'>
                    <label>Status</label>
                    <input name="sts" className='bg-white w-5/6 rounded' required />
                </div>
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3'>
                    <label>Notes</label>
                    <input name="note" className='bg-white w-5/6 rounded' required />
                </div>
                <button className='flex flex-row bg-emerald-600 flex-grow items-center content-center h-4/5 m-3 m-auto shadow-md rounded-md hover:bg-red-200'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-auto mx-3 w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                </svg>
                    <h6 className='mx-auto my-auto'>Create</h6></button>
            </div>
        </form>
    )
}




