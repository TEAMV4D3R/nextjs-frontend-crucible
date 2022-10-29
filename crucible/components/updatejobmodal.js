import Modal from 'react-modal';

export const UpdateJobModal = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: "60%",
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#675682'
        }
    };

    return (
        <>

            <div data-testid="updatejobmodal-1">
            <Modal
                isOpen={props.modalIsOpen}
                style={customStyles}
                ariaHideApp={false}>
                <form onSubmit={props.handleUpdate} className='flex flex-col items-center bg-color-shadow dark:bg-color-shadow-dark w-full rounded z-0'>
                    <h1 className="flex flex-col mx-auto items-center">Update Your Job</h1>


                        <div className="flex flex-col flex-grow items-center content-center justify-center w-full">
                            <div className='flex w-1/3 flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                                <label>Position</label>
                                <input name="pos" defaultValue={props.input.position} key={props.input.position} className='bg-sky-100 w-5/6 m-2 rounded' required />
                            </div>
                        <div className='flex w-1/3 flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                            <label>Location</label>
                            <input name="loc" defaultValue={props.input.location} key={props.input.location} className='bg-sky-100 w-5/6 m-2 rounded' required />
                        </div>
                        <div className='flex flex-grow w-1/3 flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                            <label>Description</label>
                            <select name="desc" defaultValue={props.input.description} key={props.input.description} className='bg-sky-100 w-5/6 m-2 rounded' required id="selectList">
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Intern">Intern</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>
                        <div className='flex w-1/3 flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                            <label>Status</label>
                            <select name="sts" defaultValue={props.input.status} key={props.input.status} className='bg-sky-100 w-5/6 m-2 rounded' required id="selectList">
                                <option value="Applied">Applied</option>
                                <option value="Pending">Pending</option>
                                <option value="Interview Scheduled">Interview Scheduled</option>
                                <option value="Declined Offer">Declined Offer</option>
                                <option value="Accepted Offer">Accepted Offer</option>
                            </select>
                        </div>
                        <div className='flex w-1/3 flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                            <label>Employer</label>
                            <input name="emp" defaultValue={props.input.employer} key={props.input.employer} className='bg-sky-100 w-5/6 m-2 rounded' required />
                        </div>
                        <div className='flex w-4/5 flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                            <label>Notes</label>
                            <textarea name="note" defaultValue={props.input.note_name} key={props.input.note_name} className='bg-sky-100 w-5/6 m-2 rounded' required />
                        </div>
                        <button className='flex flex-row bg-color-highlight dark:bg-color-highlight-dark flex-grow items-center content-center h-4/5 m-3 m-auto shadow-md rounded-md hover:bg-red-200' > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-auto mx-3 w-6 h-6 ">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                            </svg>
                                <h6 className='mx-auto my-auto p-5'>Update</h6></button>
                        </div>
                    </form>
                </Modal>
            </div>
            </div>
        </>
    )
}