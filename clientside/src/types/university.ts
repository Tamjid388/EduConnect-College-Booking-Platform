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
    events: Event[];
    sports: string[];
  };
};
