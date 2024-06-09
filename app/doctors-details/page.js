import Image from "next/image";

export default function DoctorsDetails() {
  return (
    <div className="bg-white px-40 py-8">
      <div className="px-10 py-10 border-[3px] border-[#2D2D2D]">
        <div>
          <div className='flex justify-end'>
            <span className="text-[#2D2D2D] text-[20px] font-[700]">Specialty:</span>
            <span className="text-[#2D2D2D] text-[20px] font-[400]">
              Infertility
            </span>
          </div>
          <div className="flex justify-between mt-6">
            <div>
              <div className='mb-4'>
                <h1 className="text-[#2D2D2D] text-[20px] font-[700] mb-2">
                  Dr. Florida Rahman
                </h1>
                <p className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                  Associate Professor (Reproductive Endocrinology and
                  Infertility)
                </p>
                <p className="text-[#2D2D2D] text-[18px] font-[500] list-disc">
                  Dhaka Medical College (DMC)
                </p>
              </div>
              <div>
                <h1 className="text-[#2D2D2D] text-[20px] font-[700] my-4">
                  Areas of Interest
                </h1>
                <ul className='pl-[18px]'>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Female and Male Infertility
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    PCOS & Endometriosis
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Recurrent Pregnancy Losses
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Poor Ovarian Reserve
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    In-Vitro Fertilization (IVF)
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Intracytoplasmic Sperm Injection (ICSI)
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Laparoscopy/Hysteroscopy
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[#2D2D2D] text-[20px] font-[700] my-4">
                  Experience (24+ Yrs)
                </h1>
                <ul className='pl-[18px]'>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Associate Professor at Dhaka Medical College Hospital (Sep
                    2021-Till date)
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Assistant Professor at Dhaka Medical College Hospital
                    (2016-Aug 2021)
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Assistant Professor at Sir Salimullah Medical College
                    (2010-2016)
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Consultant Munshiganj District Hospital (2004-2008)
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Assistant Registrar at Dhaka Medical College Hospital
                    (2001-2003)
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                    Assistant Surgeon at Different Upazila Health Complexes in
                    Bangladesh (1997-2000)
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex justify-between gap-5'>
             <div>
             <Image src='/logo1.png' alt="doctor logo" width={50} height={50} />
             </div>
             <div>
             <div>
                <h1 className="text-[20px] text-white font-bold bg-black px-4 py-4">
                  Doctor Summary
                </h1>
                <ul className='bg-[#f2f2f2] px-4 py-2'>
                  <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                    <span className='text-[20px] font-[600]'>Designation:</span> Asso. Professor
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                    <span className='text-[20px] font-[600]'>Experience:</span> 21+ Yrs
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                    <span className='text-[20px] font-[600]'>Language:</span> Bangla & English
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[20px] text-white font-[700] bg-black px-4 py-4 mt-4">Chamber Summary</h1>
                <ul className='bg-[#f2f2f2] px-4 py-2'>
                  <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                    <span className='text-[20px] font-[600]'>Practicing Day:</span> Sat, Mon & Wed
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                    <span className='text-[20px] font-[600]'>Time:</span> 3.00 PM - 8.00 PM
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                    <span className='text-[20px] font-[600]'>Visit:</span>
                    <div>
                      <ul className='pl-12'>
                        <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                          <span className='text-[20px] font-[600]'>New:</span> 1000 tk
                        </li>
                        <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                          <span>1st Followup:</span> 500 tk
                        </li>
                        <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                          <span>2nd Followup:</span> 500 tk
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="text-[#2D2D2D] text-[18px] font-[400] py-2">
                    <span className='text-[20px] font-[600]'>Daily Total:</span>
                    <span className='text-[20px] font-[400]'> 20 New & 50 Old</span>
                  </li>
                </ul>
              </div>
             </div>
            </div>
          </div>
          <div>
            <h1 className="text-[#2D2D2D] text-[20px] font-[700] my-4">Education</h1>
            <p className="text-[#2D2D2D] text-sm text-[18px] font-[500] list-disc">
              MBBS (SSMC), FCPS (OBG), MS (OBG), FCPS (Reproductive
              Endocrinology and Infertility), PGD in Sexual & Reproductive
              Medicine (UK), Fellowship in ART (Banglore, India)
            </p>
          </div>
          <div>
            <h1 className="text-[#2D2D2D] text-[20px] font-[700] my-4">
              Membership
            </h1>
            <p className="text-[#2D2D2D] text-[18px] font-[600] list-disc italic">
              Life Member
            </p>
            <ul className='pl-[18px]'>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                Fertility and Sterility Society of Bangladesh
              </li>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                Bangladesh College of Physicians and Surgeons
              </li>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                Society of Endometriosis, Bangladesh
              </li>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                Obstetrical and Gynaecological Society of Bangladesh
              </li>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                Society of Laparoscopic Surgeons Bangladesh
              </li>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                Indian Society for Assisted Reproduction
              </li>
            </ul>
            <p className="text-[#2D2D2D] text-[18px] font-[600] list-disc italic">
              Member
            </p>
            <ul className='pl-[18px]'>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                European Society of Human Reproduction and Embryology
              </li>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                American Society of Reproductive Medicine
              </li>
              <li className="text-[#2D2D2D] text-[18px] font-[500] list-disc my-2">
                Asia Pacific Initiative on Reproduction
              </li>
            </ul>
          </div>
          <div className='mt-4'>
            <h1 className="text-[#2D2D2D] text-[20px] font-[700]">Chamber</h1>
            <p className="text-[#2D2D2D] text-[18px] font-[500] list-disc py-2">
              Health and Hope Hospital
            </p>
            <p className="text-[#2D2D2D] text-[18px] font-[500] list-disc">
              Address: 152/2/G Green Road, Panthapath, Dhaka 1205
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
