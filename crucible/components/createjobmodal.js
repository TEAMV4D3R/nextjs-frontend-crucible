// import Modal from 'react-modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'full',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const CreateJobModal = (props) => {
    return (
        <>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=""
            >
                <Box sx={style}>

                    {/* <Modal
                isOpen={props.modalIsOpen}
                ariaHideApp={false}
                className=""
            > */}
                    <form onSubmit={props.handleSubmit} className='flex flex-col items-center bg-color-shadow dark:bg-color-shadow-dark w-full rounded drop-shadow-md z-0'>
                        <h1 className="flex flex-col mx-auto items-center">Add a Job to Track!</h1>

                        <div className="flex flex-col flex-grow items-center content-center justify-center w-full">
                            <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                                <label>Position</label>
                                <input name="pos" className='bg-sky-100 w-5/6 m-2 rounded' required />
                            </div>

                            <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                                <label>Location</label>
                                <input name="loc" className='bg-sky-100 w-5/6 m-2 rounded' required />
                            </div>
                            <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3 rounded'>
                                <label>Description</label>
                                <input name="desc" className='bg-sky-100 w-5/6 m-2 rounded' required />
                            </div>
                            <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3'>
                                <label>Employer</label>
                                <input name="emp" className='bg-sky-100 w-5/6 m-2 rounded' required />
                            </div>
                            <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3'>
                                <label>Status</label>
                                <input name="sts" className='bg-sky-100 w-5/6 m-2 rounded' required />
                            </div>
                            <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-color-bright dark:bg-color-bright-dark dark:text-black h-5/6 m-3'>
                                <label>Notes</label>
                                <input name="note" className='bg-sky-100 w-5/6 m-2 rounded' required />
                            </div>
                            <button className='flex flex-row bg-color-highlight dark:bg-color-highlight-dark flex-grow items-center content-center h-4/5 m-3 m-auto shadow-md rounded-md hover:bg-red-200'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-auto mx-3 w-6 h-6 " onClick={() => {
                                props.setIsModalOpen(false)
                            }}>
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                            </svg>
                                <h6 className='mx-auto my-auto p-5'>Create</h6></button>
                        </div>
                    </form>
                </Box>
            </Modal >

        </>
    )
}




