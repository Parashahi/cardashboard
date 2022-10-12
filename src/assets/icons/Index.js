import {
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { BiPointer } from "react-icons/bi";
import { TiTicket } from "react-icons/ti";
import { BsPerson, BsPeople, BsFolder } from "react-icons/bs";
import { TbReportSearch, TbSettings, TbLogout } from "react-icons/tb";

const Icons = {
  SearchIcon: <CgSearch />,
  BellIcon: <HiOutlineBell />,
  MailIcon: <FiMail />,
  PlusIcon: <AiOutlinePlus />,
  HomeIcon: <AiOutlineHome />,
  BarGraphIcon: <VscGraph />,
  PointerIcon: <BiPointer />,
  TicketIcon: <TiTicket />,
  PersonIcon: <BsPerson />,
  DoublePersonIcon: <BsPeople />,
  FolderIcon: <BsFolder />,
  ReportIcon: <TbReportSearch />,
  SettingIcon: <TbSettings />,
  LogoutIcon: <TbLogout />,
  UpArrowIcon: <AiOutlineArrowUp />,
  DownArrowIcon: <AiOutlineArrowDown />,
};

export default Icons;
