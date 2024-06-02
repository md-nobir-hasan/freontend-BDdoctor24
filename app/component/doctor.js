import React from "react";
import Image from "next/image";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Mariam Faruqui (Shati)",
    specialty: "Gynecologist & Obstetrics",
    degrees:
      "MBBS, FCPS (ObGyn), MMed (UK), MSc (Embryology), PhD (Reproduction Medicine)",
    position: "Professor (Gynecology & Obstetrics)",
    institution: "Institute of Child and Mother Health (ICMH)",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
     specialty: "Cardiac Surgeon",
    name: "Dr. Lutfor Rahman",
    degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
    experience: "20+ Years of Experience",
    hospital: "LabAid Specialized Hospital",
    logo: "/hospital-logo.png",
  },
  {
    specialty: "Cardiac Surgeon",
   name: "Dr. Lutfor Rahman",
   degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
   experience: "20+ Years of Experience",
   hospital: "LabAid Specialized Hospital",
   logo: "/hospital-logo.png",
 },
 {
  specialty: "Cardiac Surgeon",
 name: "Dr. Lutfor Rahman",
 degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
 experience: "20+ Years of Experience",
 hospital: "LabAid Specialized Hospital",
 logo: "/hospital-logo.png",
},
{
  specialty: "Cardiac Surgeon",
 name: "Dr. Lutfor Rahman",
 degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
 experience: "20+ Years of Experience",
 hospital: "LabAid Specialized Hospital",
 logo: "/hospital-logo.png",
},
{
  specialty: "Cardiac Surgeon",
 name: "Dr. Lutfor Rahman",
 degrees: "MBBS, DGO (DU), MCPS, MS (DU), FCPS",
 experience: "20+ Years of Experience",
 hospital: "LabAid Specialized Hospital",
 logo: "/hospital-logo.png",
},
];

const IndexPage = () => (
  <div>
    <div>
      {doctors.map((doctor, index) => (
        <div
          key={index}
          className="flex justify-between border p-4 rounded-lg shadow-sm bg-white my-4"
        >
          <div>
          <p className="text-gray-600 text-xl font-semibold my-2">{doctor.specialty}</p>
          <Link href='/doctors-details'><h3 className="text-xl font-semibold">{doctor.name}</h3></Link>
            <p className="text-gray-600">{doctor.degrees}</p>
            <p className="text-gray-600">{doctor.position}</p>
            <p className="text-gray-600">{doctor.institution}</p>
            <p className="text-gray-600">{doctor.experience}</p>
            <p className="text-gray-600">{doctor.hospital}</p>
          </div>
          <div className="flex flex-col justify-between items-end">
            <Image src={doctor.logo} alt="doctor logo" width={150} height={150} />
            <button className="mt-2 py-2 text-green-600 rounded-lg">
              Book Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default IndexPage;
