"use client";
import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUnifiedUser from "@/hooks/useUnifiedUser";
import CustomLoader from "@/components/Loader/CustomLoader";
import { ApplicationFormData } from "@/types/university";
import { toast } from "sonner";

export default function ApplicationForm({ id }: { id: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } =  useForm<ApplicationFormData>();
  const { user, loading, source } = useUnifiedUser();
  
  const onSubmit:SubmitHandler<ApplicationFormData> = async(data) => {
    console.log(data);
    const admissiondata={
      ...data,
      collegeId:id
    }
    try {
      const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/applications`,
      admissiondata
    );

    toast("Application submitted")
    reset()
    } catch (error) {
       toast("Submission failed")
    }

  };
if(loading){
  return <CustomLoader/>
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 border p-4">
      <div className="space-y-2">
        <Label htmlFor="candidateName">Candidate Name</Label>
        <Input
          id="candidateName"
          placeholder="e.g. John Doe"
          {...register("candidateName", { required: true })}
        />
        {errors.candidateName && <p className="text-red-500">This field is required</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subjectMajor">Subject/Major</Label>
        <Input
          id="subjectMajor"
          placeholder="e.g. Computer Science"
          {...register("subjectMajor", { required: true })}
        />
        {errors.subjectMajor && <p className="text-red-500">This field is required</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          defaultValue={user?.email ?? ""}
          placeholder="e.g. john@example.com"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">This field is required</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="e.g. +1 123 456 7890"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && <p className="text-red-500">This field is required</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          placeholder="e.g. 123 Main St"
          {...register("address", { required: true })}
        />
        {errors.address && <p className="text-red-500">This field is required</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          type="date"
          {...register("dateOfBirth", { required: true })}
        />
        {errors.dateOfBirth && <p className="text-red-500">This field is required</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="profileImageURL">Profile Image URL</Label>
        <Input
          id="profileImageURL"
          type="url"
          placeholder="https://example.com/image.jpg"
          {...register("profileImageURL")}
        />
      </div>

      <Button
       variant={'gradient'}
        type="submit" 
        className="w-full ">
        Submit Application
      </Button>
     
    </form>
  );
}