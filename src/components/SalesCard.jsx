
export default function SalesCard(){
    return(
        <div className="md:p-2 md:mx-3 py-2 mr-8 md:mr-5 ">
            <div className=" flex flex-row justify-between">
                <div>
                    <h1 className="text-xl md:text-2xl font-semibold">Overview</h1>
                </div>
                <div>
                    <select className="border-2 rounded-lg border-zinc-500">
                        <option value="This Month">This Month</option>
                        <option value="This Quater">This Quater</option>
                        <option value="This Year">This Year</option>
                        <option value="This Last Year">This Last Year</option>
                    </select>
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-5 grid-rows-15 md:grid-cols-6 md:grid-rows-1 h-full ">
                    <div className="md:col-span-2 col-span-5 row-span-4 flex flex-col justify-center items-start shadow-lg rounded-xl  w-full bg-[#1174c2] text-white">
                        <div className="flex flex-row justify-between items-center md:gap-5 md:px-4 md:py-2 px-5">
                            <h1>Next Payout</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z" fill="#4D4D4D"></path></svg>
                        </div>
                        <div className="flex flex-row justify-between w-full py-5 px-4">
                            <div>
                                <h1 className="text-xl md:text-4xl">₹ 2,312.23</h1>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="underline">23 orders </a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                            </div>
                        </div>
                        <div className=" bg-[#1e2640] w-full px-5 mt-5 rounded-b-xl py-1 flex flex-row justify-between">
                            <div>
                                <h1>Next payout date:
                                </h1>
                            </div>
                            <div>
                                <h1>Today, 04:00 PM</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mr-8 sm:col-span-4 row-span-8 grid grid-cols-1 grid-rows-2 md:p-2  w-screen md:flex flex-col sm:flex-row justify-around md:w-full">
                    <div>
                    <div className="flex flex-col justify-center items-start shadow-lg md:w-[25vw] mt-5 w-80 px-10 py-5">
                        <div className="flex flex-row justify-start items-center gap-5 w-full">
                            <h1>Amount Pending</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z" fill="#4D4D4D"></path></svg>
                        </div>
                        <div className="flex flex-row justify-between w-full py-5">
                            <div>
                                <h1 className="text-xl md:text-4xl">₹ 92,312.20</h1>
                            </div>
                            <div className="flex justify-between items-center text-blue-700">
                                <a href="#" className="underline text-blue-700">13 orders </a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="flex flex-col justify-center items-start shadow-lg md:w-[25vw] w-80  px-10 py-5">
                        <div className="flex flex-row justify-between items-center gap-5">
                            <h1>Amount Processed</h1>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z" fill="#4D4D4D"></path></svg>
                        </div>
                        <div className="flex flex-row justify-between w-full py-5">
                            <div>
                                <h1 className="text-xl md:text-4xl">₹ 23,92,312.19</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div> 
                
            </div>  
        </div>
    )
}   