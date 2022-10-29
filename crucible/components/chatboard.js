import { Footer } from "../components/footer";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import axios from 'axios';


const ChatBoard = (props) => {
    const url = process.env.NEXT_PUBLIC_API_URL_4;

    const [user, setUser] = useState(props.user.username);

    const [message, setMessage] = useState([]);

    const config = {
        headers: {
            'media-type': 'application/json',
        },
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get(url)
                .then(res => {
                    setMessage(res.data);
                })
                .catch(error => console.log("ERRORRRRRR = ", error.message));
        }, 1000)
        return () => clearInterval(intervalId);
    }, [url]);

    useEffect(() => {
        const objDiv = document.getElementById('chatDiv');
        objDiv.scrollTop = objDiv.scrollHeight
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        const message = {
            "name": user,
            "message": e.target.message.value
        }
        e.target.message.value = ""
        const data = `${url}${message}`
        await axios.post(url, message)
            .then((res) => console.log("sucess: post"))
            .catch((err) => console.log("error: post "))
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
        const hour = tempDate[2].slice(3, 8)
        return `${month} ${day}, ${tempDate[0]} ${hour}`
    }

    return (
        <div className="w-screen" data-testid="chatboard-1">
            <Head>
                <title>Chat Board</title>
            </Head>
            <main className="flex flex-col justify-start bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-screen">
                <h1 className="mx-auto">Chat Board</h1>
                <div className="flex flex-col mx-auto w-3/5 mt-5 bg-violet-200 rounded h-4/6 dark:bg-color-shadow-dark dark:text-color-bright-dark">
                    <div className="m-5 bg-violet-100 rounded h-4/5 overflow-scroll dark:bg-neutral-600" id="chatDiv">
                        {message.map((el, idx) => {
                            console.log(el)
                            return (
                                <div className="flex flex-col" key={idx}>
                                    <div className="flex items-center">
                                        {user == el.name ?
                                            <div className="p-2 m-3 bg-violet-200 dark:bg-neutral-800 rounded-full">
                                                <h2 className="rounded-full text-xl">{el.name[0].toUpperCase()}</h2>
                                            </div> :
                                            <div className="p-2 m-3 bg-blue-200 dark:bg-color-main-dark rounded-full">
                                                <h2 className="rounded-full text-xl">{el.name[0].toUpperCase()}</h2>
                                            </div>
                                        }
                                        <h2 className="m-2 text-xl">{el.message}</h2>
                                    </div>
                                    <h2 className="m-2">{formatDate(el.created)}</h2>
                                </div>
                            )
                        })
                        }
                    </div>
                    <form onSubmit={handleSubmit} className="flex mx-5 w-ful justify-between">
                        <textarea className="w-4/5 rounded" name="message" />
                        <button className="flex justify-center items-center content-center w-1/6 rounded bg-color-highlight dark:bg-color-highlight-dark">
                            <IoIosSend className="text-2xl mr-3" />
                            <h2 className="text-xl">Send</h2>
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default ChatBoard