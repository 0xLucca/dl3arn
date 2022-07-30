export type UID = string;

export interface Contract {
  address: string;
  networkId: number;
}

export interface Instructor {
  name: string;
}

export interface Video {
  uid?: UID;
  free: boolean;
  name: string;
  duration: string;
  videoId: string;
  description: string;
  contract: Contract | null;
}

export interface Course {
  uid?: UID;
  name: string;
  description: string;
  total_duration: string;
  score: number;
  image: string;

  instructor: Instructor;
  videos: (Video | UID | null)[];
}

export interface GetCourse extends Course {
  videos: (Video | null)[];
}

export default Course;

import instructors from "mockups/instructors.json";

type Ignore = "uid" | "videos";
export interface CreateCourse extends Omit<Course, Ignore> {
  videos: Omit<Video, "uid">[];
}

export const exampleCourses: CreateCourse[] = [
  {
    name: "Learn Creative Codig with Vanilla JavaScript",
    description:
      "Discover creative coding and go from drawing a single line all the way to complex randomised fractal shapes. Then turn it into a particle system to create 'fractal rain' effect. All of that with just plain HTML, CSS and vanilla JavaScript, no frameworks and no libraries. Today we deep dive into HTML canvas drawing techniques and take it step by step to make sure we understand how everything works.",
    total_duration: "6h 30min",
    score: 4.5,
    image: "https://picsum.photos/1920/1080?random=1",
    instructor: instructors[Math.floor(Math.random() * instructors.length)],

    videos: [
      {
        free: true,
        name: "Introduction & Project preview",
        contract: {
          address: "0xbjoi1345ghjigb1op3u45g",
          networkId: 1,
        },
        duration: "01m 01s",
        videoId: "DYed5whEf4g",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
      {
        free: true,
        name: "Project setup",
        contract: {
          address: "0xbhjlk4h5j1jp",
          networkId: 1,
        },
        duration: "04m 05s",
        videoId: "7j7twuejxvU",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
      {
        free: true,
        name: "Introduction & Project preview",
        contract: {
          address: "0xbjoi1345ghjigb1op3u45g",
          networkId: 1,
        },
        duration: "01m 01s",
        videoId: "gOsM-DYAEhY",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
      {
        free: false,
        name: "Project setup",
        contract: {
          address: "0xbhjlk4h5j1jp",
          networkId: 1,
        },
        duration: "04m 05s",
        videoId: "47dtFZ8CFo8",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
      {
        free: false,
        name: "Fractals & JavaScript classes",
        contract: {
          address: "0xbahjbvshp2354",
          networkId: 1,
        },
        duration: "02m 36s",
        videoId: "w5ODkszYleo",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
      {
        free: false,
        name: "Drawing basic shapes",
        contract: {
          address: "0xbhjlk4h5j1jp",
          networkId: 1,
        },
        duration: "04m 53s",
        videoId: "WjraBGgkZs4",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
    ],
  },

  {
    name: "Python TOTAL - Programador Avanzado en 16 días",
    description:
      "Mi nombre es Federico Garay y soy instructor Best Seller, con las mejores calificaciones en Udemy. He ayudado a más de 90.000 personas a lograr aprendizajes que cambiaron sus vidas. Mis cursos de programación en C#, VBA y Pandas/Python llevaron a muchos estudiantes a lograr ese trabajo soñado o esa promoción tan merecida",
    total_duration: "30h 33min",
    score: 4.8,
    image: "https://picsum.photos/1920/1080?random=1",
    instructor: instructors[Math.floor(Math.random() * instructors.length)],

    videos: [
      {
        free: false,
        name: "Recorrido del Curso",
        contract: {
          address: "0xbhjlk135g4ho",
          networkId: 3,
        },
        duration: "02m 48s",
        videoId: "up1UIrAVzqc",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
      {
        free: false,
        name: "Por Qué Python",
        contract: {
          address: "0xbhjpo14h5g6pn",
          networkId: 3,
        },
        duration: "02m 03s",
        videoId: "MHgzzkgQC0Y",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
      {
        free: true,
        name: "Meta del Día 1",
        contract: {
          address: "0xbjglk2g4yofg1",
          networkId: 3,
        },
        duration: "01m 18s",
        videoId: "mUEsqQpact0",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio, repudiandae ipsa repellat ratione rem consectetur, exercitationem fugiat, vero aperiam eius quaerat vel incidunt dolores quos voluptate tenetur. Nemo, nulla?",
      },
    ],
  },
];
