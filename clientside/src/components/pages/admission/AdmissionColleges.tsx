"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { University } from "@/types/university";
import React from "react";
type Props = {
  colleges: University[];
};
export default function AdmissionColleges({ colleges }: Props) {
  
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Available Colleges({colleges.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-6 gap-6">
        {colleges.map((college) => (
          <Card key={college.id} className="pt-0 ">
            <figure className=" h-[200px] ">
              <img
                className="mt-0 h-full w-full object-cover rounded-t-md"
                src={college.image}
                alt="college.name"
              />
            </figure>
            <CardHeader className="">
              <CardTitle>{college.name}</CardTitle>
              <CardDescription>
                <span className="font-medium">Admission Date:</span>
                {college.admissionDate}
              </CardDescription>

              <Link href={`/admissions/${college._id}`}>
                <Button variant={"gradient"} className="w-full">
                  Apply Now
                </Button>
              </Link>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
