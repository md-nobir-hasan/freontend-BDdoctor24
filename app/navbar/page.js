import { Input } from "postcss";
import SearchBar from "./searchBar";
import Degree from "./degree";
import Designation from "./designation";
import HospitalWise from "./hospital";
import SpecialtyWise from "./specialty";
import PactecingDay from "./pactecing";
import Location from "./location";
import ExperienceRange from "./experienceRang";
export default function SideNavBar(){
    return(
     
         <aside >
         <div className="flex justify-between items-center p-4 shadow-lg rounded-lg my-4 bg-white">
         <p className="text-xl">
            Filter:3
         </p>
         <p className="text-xl bg-slate-200 py-1 px-4">
           Clear
         </p>
         </div>
         <div className="bg-white rounded-lg p-4 my-4 shadow-lg">
            <SearchBar/>
         </div>
         <div className="my-4 shadow-lg rounded-lg">
          <ExperienceRange/>
         </div>
          <div className="my-4">
            <Degree/>
          </div>
          <div className="my-4">
            <Designation/>
          </div>
          <div className="my-4">
            <SpecialtyWise/>
          </div>
          <div className="my-4">
            <HospitalWise/>
          </div>
          <div className="my-4">
            <PactecingDay/>
          </div>
          <div className="my-4">
            <Location/>
          </div>
         </aside>
      
    )
}