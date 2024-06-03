import IndexPage from "../component/doctor";
import AllSpecialty from "../component/menu";
import SideNavBar from "../navbar/page";


export default function AllDoctors(){
  return(
    <div className="grid grid-cols-5 gap-6 pr-[140px] pl-[100px]">
      <div>
      <SideNavBar/>
      </div>
      <div className="col-span-4">
          <div className="my-4">
            <AllSpecialty/>
          </div>
          <div className="grid grid-cols-4">
          <div className="col-span-3">
          <IndexPage/>
          </div>
          <div className="col-span-1"></div>
          </div>
        </div>
    </div>
  )
}