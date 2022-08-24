import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsChatDots, BsBookmarks } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";
import { FiLogOut, FiMail } from "react-icons/fi";
import { TbNotes } from "react-icons/tb";
import { ImProfile } from "react-icons/im";

export const sibarList = [
  {
    id: 1,
    icon: ImProfile,

    content: "Profile",
  },

  {
    id: 2,
    icon: BsBookmarks,
    content: "Bookmarks",
  },
  {
    id: 3,
    icon: AiOutlineCalendar,
    content: "Calendar",
  },
  {
    id: 4,
    icon: FiMail,
    content: "Message",
  },
  {
    id: 5,
    icon: RiContactsBookLine,
    content: "Contacts",
  },
  {
    id: 6,
    icon: BsChatDots,
    content: "Chat",
  },
  {
    id: 7,
    icon: TbNotes,
    content: "Notification",
  },
  {
    id: 8,
    icon: MdOutlineManageAccounts,
    content: "Account Settings",
  },
  {
    id: 9,
    icon: FiLogOut,
    content: "Logout",
  },
];
