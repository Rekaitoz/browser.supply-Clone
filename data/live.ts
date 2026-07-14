// data/templates.ts

export interface Live {
  id: number;

  name: string;

  profileImage: string;

  template: string;

  video: string;

  templateImage: string;
}

export const liveData: Live[] = [
  {
    id: 1,
    name: "Paul Lucyk",
    profileImage: "/images/review/review-1.avif",
    template: "Selene",
    video: "/videos/live/live-1.mp4",
    templateImage: "/images/templates/template-1.avif",
  },

  {
    id: 2,
    name: "Spencer Le Von",
    profileImage: "/images/review/review-2.avif",
    template: "Nova",
    video: "/videos/live/live-2.mp4",
    templateImage: "/images/templates/template-2.avif",
  },
  {
    id: 3,
    name: "Julius Zeice",
    profileImage: "/images/review/review-3.avif",
    template: "Atlas",
    video: "/videos/live/live-3.mp4",
    templateImage: "/images/templates/template-3.avif",
  },
  {
    id: 4,
    name: "Cam Rickerby",
    profileImage: "/images/review/review-4.avif",
    template: "Pulse",
    video: "/videos/live/live-4.mp4",
    templateImage: "/images/templates/template-4.avif",
  },

  {
    id: 5,
    name: "Giselle Dina",
    profileImage: "/images/review/review-5.avif",
    template: "Orbit",
    video: "/videos/live/live-5.mp4",
    templateImage: "/images/templates/template-5.avif",
  },

  {
    id: 6,
    name: "Yovann Pignet",
    profileImage: "/images/review/review-6.avif",
    template: "Vertex",
    video: "/videos/live/live-6.mp4",
    templateImage: "/images/templates/template-6.avif",
  },
];
