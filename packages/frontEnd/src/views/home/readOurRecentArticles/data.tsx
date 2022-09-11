export const data: Data[] = [
  {
    id: 1,
    author: "Lorem ipsum",
    category: "marketing",
    date: "02 Feb 2021",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quos?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quos magni libero ex iste hic, expedita sint consectetur rem?",
  },
  {
    id: 2,
    author: "Lorem ipsum",
    category: "security",
    date: "02 Feb 2021",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quos?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quos magni libero ex iste hic, expedita sint consectetur rem?",
  },
  {
    id: 3,
    author: "Lorem ipsum",
    category: "safe",
    date: "02 Feb 2021",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quos?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quos magni libero ex iste hic, expedita sint consectetur rem?",
  },
  {
    id: 4,
    author: "Lorem ipsum",
    category: "advertise",
    date: "02 Feb 2021",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quos?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora quos magni libero ex iste hic, expedita sint consectetur rem?",
  },
];

type Data = {
  id: number;
  author: string;
  category: "marketing" | "security" | "advertise" | "safe";
  date: string;
  title: string;
  text: string;
};
