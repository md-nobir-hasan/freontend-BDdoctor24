'use client'
const options = [
    {label:'10',value:'10'},
    {label:'20',value:'20'},
    {label:'30',value:'20'},
]
export default function AllSpecialty() {
    return(
        <div className="flex justify-between text-xl font-semibold items-center px-8 py-4 bg-white shadow-lg rounded-lg">
         <div>
            <p>All Specialty</p>
         </div>
         <div className="flex gap-2 text-xl font-semibold">
            <p>show</p>
            <select className="bg-slate-300 px-2">
                {options.map(option =>(
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
         </div>

        </div>
    )
}