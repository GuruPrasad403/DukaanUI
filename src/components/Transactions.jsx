const dummyData = [
    { id: "#281209", status: "Successful", transactionId: "131634495747", date: "Today, 08:45 PM", amount: "₹1,125.00" },
    { id: "#281210", status: "Pending", transactionId: "131634495748", date: "Today, 07:30 PM", amount: "₹2,250.00" },
    { id: "#281211", status: "Failed", transactionId: "131634495749", date: "Yesterday, 09:15 AM", amount: "₹3,300.00" },
    { id: "#281212", status: "Successful", transactionId: "131634495750", date: "Yesterday, 01:45 PM", amount: "₹900.00" },
    { id: "#281213", status: "Pending", transactionId: "131634495751", date: "Today, 06:15 AM", amount: "₹5,450.00" },
    { id: "#281214", status: "Successful", transactionId: "131634495752", date: "Today, 10:15 AM", amount: "₹750.00" },
    { id: "#281215", status: "Failed", transactionId: "131634495753", date: "Yesterday, 02:30 PM", amount: "₹2,150.00" },
    { id: "#281216", status: "Pending", transactionId: "131634495754", date: "Yesterday, 03:45 PM", amount: "₹1,980.00" },
    { id: "#281217", status: "Successful", transactionId: "131634495755", date: "Today, 11:45 AM", amount: "₹3,700.00" },
    { id: "#281218", status: "Failed", transactionId: "131634495756", date: "Yesterday, 06:00 PM", amount: "₹1,250.00" },
    { id: "#281219", status: "Pending", transactionId: "131634495757", date: "Today, 12:30 PM", amount: "₹4,300.00" },
    { id: "#281220", status: "Successful", transactionId: "131634495758", date: "Yesterday, 07:45 PM", amount: "₹2,650.00" },
    { id: "#281221", status: "Successful", transactionId: "131634495759", date: "Today, 02:15 PM", amount: "₹1,150.00" },
    { id: "#281222", status: "Failed", transactionId: "131634495760", date: "Yesterday, 08:30 PM", amount: "₹1,870.00" },
    { id: "#281223", status: "Pending", transactionId: "131634495761", date: "Today, 04:45 PM", amount: "₹2,450.00" },
    { id: "#281224", status: "Successful", transactionId: "131634495762", date: "Yesterday, 09:15 PM", amount: "₹1,500.00" },
    { id: "#281225", status: "Failed", transactionId: "131634495763", date: "Today, 03:30 PM", amount: "₹3,050.00" },
    { id: "#281226", status: "Successful", transactionId: "131634495764", date: "Yesterday, 10:15 AM", amount: "₹2,780.00" },
    { id: "#281227", status: "Pending", transactionId: "131634495765", date: "Today, 09:00 AM", amount: "₹1,620.00" },
    { id: "#281228", status: "Successful", transactionId: "131634495766", date: "Yesterday, 11:00 AM", amount: "₹2,980.00" },
  ];
  

export default function Transactions(){

    return (
        <div className="grid gird-cols-10 grid-rows-1 px-5 py-2 ">
            <div className="col-span-12">
                <div>
                    <h1 className="text-2xl font-semibold">
                    Transactions | This Month    
                    </h1> 
                </div>
                <div className="flex flex-row px-1 justify-start items-center gap-5 mt-5">
                    <div><button className="bg-zinc-300  px-4 text-zinc-500 rounded-full text-md">Payouts (22)
                    </button></div>
                    <div><button className="bg-[#1174c2] px-4 text-white rounded-full text-md">Refunds (6)</button></div>
                </div>
            </div>
            <div className="flex flex-col justify-around items-start md:px-4 mt-10 ">
                <div className="flex flex-row justify-between items-center w-[72vw] md:w-[84vw] ">
                    <div>
                    <div className="flex flex-cols items-center gap-5 justify-center px-3 w-30 md:w-96 bg-[#ffffff] border border-zinc-500  rounded-lg">
                    <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080"></path></svg>
                    <input type="text" placeholder="Order ID or transaction ID" className="bg-[#ffffff] w-20 md:w-96 border-0 focus:border-none focus:outline-none" style={{border:"0px solid white"}}/>
                    </div>
                    </div>
                    <div className=" flex flex-row gap-2 md:gap-5">
                        <div>
                            <button className="border-zinc-500 border px-1 md:px-3 py-1">
                                Sort ↑↓
                            </button>
                        </div>
                        <div>
                            <button className="border-zinc-500 border p-3 ">
                            <svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z" fill="#4D4D4D"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex px-12 md:justify-center items-center w-96 md:w-full mt-5 overflow-auto">
                    <table className=" md:w-[84vw] text-center md:p-5">
                        <tr>
                            <th className="font-semibold text-md md:text-xl">ORDER ID</th>
                            <th className="font-semibold text-md md:text-xl text-left pl-5">STATUS</th>
                            <th className="font-semibold text-md md:text-xl">TRANSACTION ID</th>
                            <th className="font-semibold text-md md:text-xl">REFUND DATE</th>
                            <th className="font-semibold text-md md:text-xl">ORDER AMOUNT</th>
                        </tr>
                        {
                            dummyData.map((ele,i)=>{
                                return <TableRow id={ele.id} status={ele.status} transactionId={ele.transactionId} date={ele.date} amount={ele.amount} key={i} />
                            })
                        }
                    </table>
                </div>
                <div className="flex justify-center items-center w-full mt-5 mb-5">
                    <div>
                        <h1 className="text-lg md:text-xl">----- Made By <span className="text-blue-500 font-semibold"><a href="https://chandu-ten.vercel.app/" target="_blank">Guruprasad G</a></span>, inspired by <span  className="text-blue-500 font-semibold" >Dukaan App UI</span> -----</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TableRow = ({id,status,transactionId,date,amount})=>{
    return <tr className="text-center font-semibold border-b-2 border-zinc-200 m-5">
                <td className="">{id}</td>
                <td className="flex gap-5  text-center "> <span
                        className={`text-xl text-center ${
                            status === "Successful"
                            ? "text-green-900"
                            : status === "Failed"
                            ? "text-red-900"
                            : "text-gray-500"
                        }`}
                        >
                        ⦿
                        </span>
                        <span>{status}</span></td>
                <td>{transactionId}</td>
                <td>{date}</td>
                <td>{amount}</td>
            </tr>
}