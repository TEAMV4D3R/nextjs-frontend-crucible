import { AiFillEdit } from "react-icons/ai";

const tdStyles = "my-10  mx-auto p-3 bg-violet-200 text-slate-900 dark:bg-neutral-700 dark:text-color-bright-dark"
const thStyles = "my-10  mx-auto p-3 bg-color-shadow text-slate-900 dark:bg-neutral-900 dark:text-color-bright-dark"
const totalStyles = "my-10  mx-auto p-3 text-center bg-emerald-700 text-white"

export const MyJobsTable = (resources) => {
    const trackingjobs = ["Edit", "Position", "Location", "Description", "Employer", "Status", "Notes", "", "", "", "Delete"]
    return (
        <table className='z-0 w-4/5'>
            <thead>
                <tr>
                    {trackingjobs?.map((item, idx) => <th className={`${thStyles}`} key={idx}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {resources.input.map((item, idx) => {
                    return (
                        <tr key={idx} className={`${tdStyles}`}>

                            <td className='flex items-center content-center'>
                                <button onClick={(() => {
                                    resources.updateResource(item)
                                })} className='hover:text-red-200 mx-auto my-3'>
                                    <AiFillEdit className="text-2xl" />
                                </button>
                            </td>
                            <td className="py-5 px-3">{item.position}</td>
                            <td className="py-5 px-3">{item.location}</td>
                            <td className="py-5 px-3">{item.description}</td>
                            <td className="py-5 px-3">{item.employer}</td>
                            <td className="py-5 px-3">{item.status}</td>
                            <td colSpan={4} className="py-5 px-3">{item.note_name}</td>
                            <td className='flex items-center content-center'>
                                <button onClick={(() => {
                                    console.log(item.id)
                                    resources.deleteStand(item)
                                }
                                )} className='hover:text-red-200 mx-auto my-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>

            </tfoot>
        </table >
        // </div >
    )
}
