"use client";

import AttandanceChart from "@/components/AttandanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import AlumniChart from "@/components/AlumniChart";
import EventCalendar from "@/components/EventCalendar";
import Annaouncements from "@/components/Announcements";
import { useRouter } from "next/navigation";

const AdminPage = () => {
    const router = useRouter();
    const handleCardClick = (type: string) => {
        let path = "/"; // Default path
        switch (type) {
          case "Student":
            path = "/list/students";
            break;
          case "Dosen":
            path = "/list/teachers";
            break;
          case "Alumni":
            path = "/list/alumni/daftar-alumni";
            break;
          case "Admin":
            path = "/list/dosenPerwalian"; // Path khusus Admin
            break;
          default:
            break;
        }
        router.push(path);
      };
      
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" onClick={() => {handleCardClick("Student")}}/>
          <UserCard type="Dosen" onClick={() => {handleCardClick("Dosen")}}/>
          <UserCard type="Alumni" onClick={() => {handleCardClick("Alumni")}}/>
          <UserCard type="Staff" onClick={() => {handleCardClick("Staff")}}/>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
            <AlumniChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Annaouncements/>
      </div>
    </div>
  );
};

export default AdminPage;
