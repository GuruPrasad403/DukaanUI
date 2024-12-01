import SalesCard from "../components/SalesCard";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Transactions from "../components/Transactions";


export default function GridLayout(){
    return <div className="grid grid-rows-4 grid-flow-col overflow-hidden leading-10">
                <div className=" absolute md:relative md:w-56 w-full  mg:h-full  row-span-6">
                    <SideBar  className=" absolute hidden lg:block"/>
                </div>
                <div className=" w-[85vw] ml-8 md:ml-0 md:w-[88vw] md:col-span-2 p-2 ">
                    <TopNav />
                    <SalesCard />
                </div>
                <div className="ml-8 md:ml-0  row-span-3  col-span-2 mr-10 md:mr-1">
                <Transactions />
                </div>
            </div>

}