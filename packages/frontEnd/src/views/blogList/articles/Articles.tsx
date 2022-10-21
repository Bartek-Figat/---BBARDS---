import article1 from "../../../assets/images/blog-suggest/01.jpg";
import article2 from "../../../assets/images/blog-suggest/02.jpg";
import article3 from "../../../assets/images/blog-suggest/03.jpg";
import article4 from "../../../assets/images/blog-suggest/04.jpg";

import avatar1 from "../../../assets/images/avatar/01.jpg";
import avatar2 from "../../../assets/images/avatar/02.jpg";
import avatar3 from "../../../assets/images/avatar/03.jpg";
import avatar4 from "../../../assets/images/avatar/04.jpg";

export interface IArticles {
  img: string;
  title: string;
  date: string;
  category: string;
  author: string;
  avatar: string;
  content: string;
  comments: string;
}

export const articlesMap: IArticles[] = [
  {
    img: article1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",

    date: "02 Feb 2021",
    category: "Marketing",
    author: "MironMahmud",
    avatar: avatar1,
    comments: "16",
  },
  {
    img: article2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",

    date: "02 Feb 2021",
    category: "Advertise",
    author: "LabonnoKhan",
    avatar: avatar2,
    comments: "13",
  },
  {
    img: article3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",

    date: "02 Feb 2021",
    category: "Safety",
    author: "MironMahmud",
    avatar: avatar3,
    comments: "19",
  },
  {
    img: article4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",

    date: "02 Feb 2021",
    category: "Security",
    author: "MironMahmud",
    avatar: avatar4,
    comments: "19",
  },
  {
    img: article1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",

    date: "02 Feb 2021",
    category: "Marketing",
    author: "MironMahmud",
    avatar: avatar1,
    comments: "16",
  },
  {
    img: article4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit cum quaerat volupt.",

    date: "02 Feb 2021",
    category: "Security",
    author: "MironMahmud",
    avatar: avatar4,
    comments: "19",
  },
];
