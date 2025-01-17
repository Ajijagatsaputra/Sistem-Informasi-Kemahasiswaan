"use client";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import EventCalendar from "@/components/EventCalendar";
import Annaouncements from "@/components/Announcements";
import { useRouter } from "next/navigation";

const GuidancePage = () => {
  const router = useRouter();
  // Handler untuk navigasi berdasarkan tipe card
  const handleCardClick = (type: string) => {
    let path = "/"; // Default path
    switch (type) {
      case "Mahasiswa":
        path = "/mahasiswa";
        break;
      case "Dosen":
        path = "/dosen";
        break;
      case "Parent":
        path = "/parent";
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
          <UserCard
            type="Mahasiswa"
            onClick={() => handleCardClick("Mahasiswa")}
          />
          <UserCard type="Dosen" onClick={() => handleCardClick("Dosen")} />
          <UserCard type="Parent" onClick={() => handleCardClick("Parent")} />
          <UserCard type="Admin" onClick={() => handleCardClick("Admin")} />
        </div>
        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg-w-1/3 h-[450px]">
            <CountChart />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Annaouncements />
      </div>
    </div>
  );
};

export default GuidancePage;
