import { Footer } from "./footer";
import Head from "next/head";
import { useState, useEffect } from "react";
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { FaHandshakeAltSlash, FaHandshake } from "react-icons/fa";
import { BarChart } from '../components/barchart';
import DoughnutChart from '../components/doughnutchart';



const UserHome = (props) => {
    const [userApplied, setUserApplied] = useState(0);
    const [userPending, setUserPending] = useState(0);
    const [userInterview, setUserInterview] = useState(0);
    const [userDeclined, setUserDeclined] = useState(0);
    const [userAccepted, setUserAccepted] = useState(0);

    const [useFullTime, setFulltime] = useState(0);
    const [usePartTime, setPartTime] = useState(0);
    const [useIntern, setIntern] = useState(0);
    const [useContract, setContract] = useState(0);

    const [useOne, setOne] = useState(0);
    const [useTwo, setTwo] = useState(0);
    const [useThree, setThree] = useState(0);
    const [useFour, setFour] = useState(0);
    const [useFive, setFive] = useState(0);
    const [useSix, setSix] = useState(0);
    const [useSeven, setSeven] = useState(0);
    const [useEight, setEight] = useState(0);
    const [useNine, setNine] = useState(0);
    const [useTen, setTen] = useState(0);
    const [useEleven, setEleven] = useState(0);
    const [useTwelve, setTwelve] = useState(0);
    const [useThirteen, setThirteen] = useState(0);
    const [useFourteen, setFourteen] = useState(0);
    const [useFifteen, setFifteen] = useState(0);
    const [useSixteen, setSixteen] = useState(0);
    const [useSeventeen, setSeventeen] = useState(0);
    const [useEighteen, setEighteen] = useState(0);
    const [useNineteen, setNineteen] = useState(0);
    const [useTwenty, setTwenty] = useState(0);
    const [useTwentyOne, setTwentyOne] = useState(0);
    const [useTwentyTwo, setTwentyTwo] = useState(0);
    const [useTwentyThree, setTwentyThree] = useState(0);
    const [useTwentyFour, setTwentyFour] = useState(0);
    const [useTwentyFive, setTwentyFive] = useState(0);
    const [useTwentySix, setTwentySix] = useState(0);
    const [useTwentySeven, setTwentySeven] = useState(0);
    const [useTwentyEight, setTwentyEight] = useState(0);
    const [useTwentyNine, setTwentyNine] = useState(0);
    const [useThirty, setThirty] = useState(0);
    const [useThirtyOne, setThirtyOne] = useState(0);

    useEffect(() => {
        if (props.resources) {
            let apply = 0;
            let pending = 0;
            let interview = 0;
            let decline = 0;
            let accepted = 0;

            let fullTime = 0
            let partTime = 0
            let intern = 0
            let contract = 0


            let one = 0;
            let two = 0;
            let three = 0;
            let four = 0;
            let five = 0;
            let six = 0
            let seven = 0
            let eight = 0
            let nine = 0
            let ten = 0;
            let eleven = 0;
            let twelve = 0;
            let thirteen = 0;
            let fourteen = 0;
            let fifteen = 0
            let sixteen = 0
            let seventeen = 0
            let eighteen = 0
            let nineteen = 0;
            let twenty = 0;
            let twentyone = 0;
            let twentytwo = 0;
            let twentythree = 0;
            let twentyfour = 0
            let twentyfive = 0
            let twentysix = 0
            let twentyseven = 0
            let twentyeight = 0;
            let twentynine = 0;
            let thirty = 0;
            let thirtyone = 0;

            for (let item of props.resources) {
                if (props.user === item?.owner) {
                    switch (item.status) {
                        case "Applied":
                            apply++;
                            break;
                        case "Pending":
                            pending++;
                            break;
                        case "Interview Scheduled":
                            interview++;
                            break;
                        case "Declined Offer":
                            decline++
                            break;
                        case "Accepted Offer":
                            accepted++
                            break;
                    }
                    switch (item.description) {
                        case "Full Time":
                            fullTime++;
                            break;
                        case "Part Time":
                            partTime++;
                            break;
                        case "Intern":
                            intern++;
                            break;
                        case "Contract":
                            contract++
                            break;
                    }
                    switch (item.created.split("-")[1]) {
                        case "1":
                            one++;
                            break;
                        case "2":
                            two++;
                            break;
                        case "3":
                            three++;
                            break;
                        case "4":
                            four++
                            break;
                        case "5":
                            five++;
                            break;
                        case "6":
                            six++;
                            break;
                        case "7":
                            seven++;
                            break;
                        case "8":
                            eight++
                            break;
                        case "9":
                            nine++;
                            break;
                        case "10":
                            ten++;
                            break;
                        case "11":
                            eleven++;
                            break;
                        case "12":
                            twelve++
                            break;
                        case "13":
                            thirteen++;
                            break;
                        case "14":
                            fourteen++;
                            break;
                        case "15":
                            fifteen++;
                            break;
                        case "16":
                            sixteen++
                            break;
                        case "17":
                            seventeen++;
                            break;
                        case "18":
                            eighteen++;
                            break;
                        case "19":
                            nineteen++;
                            break;
                        case "20":
                            twenty++
                            break;
                        case "21":
                            twentyone++;
                            break;
                        case "22":
                            twentytwo++;
                            break;
                        case "23":
                            twentythree++;
                            break;
                        case "24":
                            twentyfour++
                            break;
                        case "25":
                            twentyfive++;
                            break;
                        case "26":
                            twentysix++;
                            break;
                        case "27":
                            twentyseven++;
                            break;
                        case "28":
                            twentyeight++
                            break;
                        case "29":
                            twentynine++;
                            break;
                        case "30":
                            thirty++;
                            break;
                        case "31":
                            thirtyone++
                            break
                    }
                }
            }
            setUserApplied(apply)
            setUserPending(pending)
            setUserInterview(interview)
            setUserDeclined(decline)
            setUserAccepted(accepted)

            setFulltime(fullTime)
            setPartTime(partTime)
            setIntern(intern)
            setContract(contract)

            setOne(one)
            setTwo(two)
            setThree(three)
            setFour(four)
            setFive(five)
            setSix(six)
            setSeven(seven)
            setEight(eight)
            setNine(nine)
            setTen(ten)
            setEleven(eleven)
            setTwelve(twelve)
            setThirteen(thirteen)
            setFourteen(fourteen)
            setFifteen(fifteen)
            setSixteen(sixteen)
            setSeventeen(seventeen)
            setEighteen(eighteen)
            setNineteen(nineteen)
            setTwenty(twenty)
            setTwentyOne(twentyone)
            setTwentyTwo(twentytwo)
            setTwentyThree(twentythree)
            setTwentyFour(twentyfour)
            setTwentyFive(twentyfive)
            setTwentySix(twentysix)
            setTwentySeven(twentyseven)
            setTwentyEight(twentyeight)
            setTwentyNine(twentynine)
            setThirty(thirty)
            setThirtyOne(thirtyone)

        }
    }, []);

    console.log("ten", useTen)

    return (
        <>
            <Head>
                <title>Crucible Home</title>
            </Head>
            <main className="flex flex-col bg-color-main dark:bg-color-main-dark dark:text-color-bright-dark h-[calc(100vh-10em)] ">
                <div className="flex flex-row justify-between pt-10 w-4/5 mx-auto">
                    <div className="flex flex-col justify-between content-center bg-violet-200 p-5 w-1/6 rounded">
                        <h2 className="text-center p-2 text-2xl  bg-color-shadow rounded">Applied</h2>
                        <div className="flex items-center content-center w-full justify-evenly m-5 container">
                            <AiFillCheckCircle className="text-3xl" />
                            <h2 className="text-center m-2 text-2xl">{userApplied}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col bg-violet-200 p-5 w-1/6 rounded">
                        <h2 className="text-center p-2 text-2xl  bg-color-shadow rounded">Pending</h2>
                        <div className="flex items-center content-center w-full justify-evenly  m-5 container">
                            <MdPendingActions className="text-3xl" />
                            <h2 className="text-center m-2 text-2xl">{userPending}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col bg-violet-200 p-5 w-1/6 rounded">
                        <h2 className="text-center p-2 text-2xl  bg-color-shadow rounded">Interview</h2>
                        <div className="flex items-center content-center w-full justify-evenly  m-5 container">
                            <AiFillClockCircle className="text-3xl" />
                            <h2 className="text-center  m-2 text-2xl">{userInterview}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col bg-violet-200 p-5 w-1/6 rounded">
                        <h2 className="text-center p-2 text-2xl  bg-color-shadow rounded">Declined</h2>
                        <div className="flex items-center content-center w-full justify-evenly  m-5 container">
                            <FaHandshakeAltSlash className="text-3xl" />
                            <h2 className="text-center m-2 text-2xl">{userDeclined}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col bg-violet-200 mx-4 p-5 w-1/6 rounded">
                        <h2 className="text-center p-2 text-2xl  bg-color-shadow rounded">Accepted</h2>
                        <div className="flex items-center content-center w-full justify-evenly  m-5 container">
                            <FaHandshake className="text-3xl" />
                            <h2 className="text-center m-2 text-2xl">{userAccepted}</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-4/5 mx-auto mt-10">
                    <BarChart
                        useOne={useOne}
                        useTwo={useTwo}
                        useThree={useThree}
                        useFour={useFour}
                        useFive={useFive}
                        useSix={useSix}
                        useSeven={useSeven}
                        useEight={useEight}
                        useNine={useNine}
                        useTen={useTen}
                        useEleven={useEleven}
                        useTwelve={useTwelve}
                        useThirteen={useThirteen}
                        useFourteen={useFourteen}
                        useFifteen={useFifteen}
                        useSixteen={useSixteen}
                        useSeventeen={useSeventeen}
                        useEighteen={useEighteen}
                        useNineteen={useNineteen}
                        useTwenty={useTwenty}
                        useTwentyOne={useTwentyOne}
                        useTwentyTwo={useTwentyTwo}
                        useTwentyThree={useTwentyFour}
                        useTwentyFive={useTwentyFive}
                        useTwentySix={useTwentySix}
                        useTwentySeven={useTwentyEight}
                        useTwentyNine={useTwentyNine}
                        useTwentyThirty={useThirty}
                        useThirtyOne={useThirtyOne}
                    />
                    <DoughnutChart useFullTime={useFullTime} usePartTime={usePartTime} useIntern={useIntern} useContract={useContract} />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default UserHome