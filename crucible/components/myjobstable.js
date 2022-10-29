import { AiFillEdit } from "react-icons/ai";
import { UpdateJobModal } from "./updatejobmodal";
import { useState } from "react";

const tdStyles = "my-10 mx-auto p-3 bg-violet-200 text-slate-900 dark:bg-neutral-700 dark:text-color-bright-dark"
const thStyles = "my-10 mx-auto p-3 bg-color-shadow text-slate-900 dark:bg-color-shadow-dark dark:text-color-bright-dark"
const totalStyles = "my-10  mx-auto p-3 text-center bg-emerald-700 text-white"

export const MyJobsTable = (props) => {
    const [modalIsOpen, setIsModalOpen] = useState(false)

    const [id, setid] = useState(false)

    const trackingjobs = ["Edit", "Position", "Location", "Description", "Employer", "Status", "Notes", "", "", "Created", "Delete"]

    const handleUpdate = (e) => {
        e.preventDefault()

        const data = {
            position: e.target.pos.value,
            location: e.target.loc.value,
            description: e.target.desc.value,
            employer: e.target.emp.value,
            status: e.target.sts.value,
            note_name: e.target.note.value,
            owner: props.user
        }
        setIsModalOpen(false)
        props.updateResource(data, id);
    }

    const formatDate = (date) => {
        const MONTHS = {
            "1": "Jan",
            "2": "Feb",
            "3": "Mar",
            "4": "Apr",
            "5": "May",
            "6": "Jun",
            "7": "July",
            "8": "Aug",
            "9": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec",
        }
        const tempDate = date.split("-")
        const month = MONTHS[tempDate[1]]
        const day = tempDate[2].slice(0, 2)
        return `${month} ${day}, ${tempDate[0]}`
    }

    return (
        <div className="flex justify-center w-screen" data-testid="myjobstable-1">
            <table className='z-0 shadow-xl w-4/5'>
                <thead>
                    <tr>
                        {trackingjobs?.map((item, idx) => <th className={`${thStyles}`} key={idx}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props?.input &&
                        props?.input.map((item, idx) => {
                            if (props.user === item?.owner) {
                                return (
                                    <tr key={idx} className={`${tdStyles}`}>
                                        <td className='flex items-center content-center'>
                                            <button onClick={() => {
                                                setIsModalOpen(true)
                                                setid(item.id)
                                            }} className='hover:text-red-200 mx-auto my-3'>
                                                <AiFillEdit className="text-2xl" /></button>
                                            <UpdateJobModal modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} handleUpdate={handleUpdate} input={item} className="w-full z-40" />
                                        </td>
                                        <td className="py-5 px-3">{item.position}</td>
                                        <td className="py-5 px-3">{item.location}</td>
                                        <td className="py-5 px-3">{item.description}</td>
                                        <td className="py-5 px-3">{item.employer}</td>
                                        <td className="py-5 px-3">{item.status}</td>
                                        <td colSpan={3} className="py-5 px-3">{item.note_name}</td>
                                        <td className="py-5 px-3">{formatDate(item.created)}</td>
                                        <td className='flex items-center content-center'>
                                            <button onClick={(() => {
                                                props.deleteStand(item)
                                            }
                                            )} className='hover:text-red-200 mx-auto my-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        })}
                </tbody>
                <tfoot>

                </tfoot>
            </table >
        </div>
    )
}
