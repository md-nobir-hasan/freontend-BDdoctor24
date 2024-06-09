
'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Indexpage ({products}) {
 
return(
  <div>
    {products.map((product) => (
      <div
        key={product.id}
        className="flex justify-between border p-4 rounded-lg shadow-sm bg-white my-4"
      >
        <div>
        <p className="text-gray-600 text-xl font-semibold my-2">{product.specialty}</p>
        <Link href='/doctors-details'><h3 className="text-xl font-semibold">{product.name}</h3></Link>
          <p className="text-gray-600">{product.degrees}</p>
          <p className="text-gray-600">{product.position}</p>
          <p className="text-gray-600">{product.institution}</p>
          <p className="text-gray-600">{product.experience}</p>
          <p className="text-gray-600">{product.hospital}</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <Image src={product.logo} alt="doctor logo" width={150} height={150} />
          <button className="mt-2 py-2 text-green-600 rounded-lg">
            Book Apointment
          </button>
        </div>
      </div>
    ))}
  </div>

);
}


