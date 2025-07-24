// types/university.ts

export type ResearchArea = {
  title: string;
  description: string;
};

export type Event = {
  title: string;
  date: string;
  description: string;
};

export type University = {
  id: string;
  _id?:string;
  name: string;
  location: string;
  image: string;
  rating: number;
  students: number;
  admissionDate: string;
  admissionProcess: string;
  researchCount: number;
  researchAreas: ResearchArea[];
  gallery: string[];
  details: {
    description: string;
    events: string[];
    sports: string[];
  };
};

export type ApplicationFormData = {
  candidateName: string;
  subjectMajor: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;      
  profileImageURL?: string; 
};

