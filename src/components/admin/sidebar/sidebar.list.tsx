import {
  MdOutlineManageAccounts,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";
import { FiLogOut, FiMail } from "react-icons/fi";
import { TbNotes } from "react-icons/tb";

export const sibarList = [
  {
    id: 1,
    icon: MdOutlineManageAccounts,
    content: "Account Settings",
  },
  {
    id: 2,
    icon: MdOutlineNotificationsActive,
    content: "Notification",
  },
  {
    id: 3,
    icon: AiOutlineCalendar,
    content: "Calendar",
  },
  {
    id: 4,
    icon: FiMail,
    content: "Mail",
  },
  {
    id: 5,
    icon: BsChatDots,
    content: "Chat",
  },
  {
    id: 6,
    icon: RiContactsBookLine,
    content: "Contacts",
  },
  {
    id: 7,
    icon: TbNotes,
    content: "Notes",
  },
  {
    id: 8,
    icon: FiLogOut,
    content: "Logout",
  },
];
