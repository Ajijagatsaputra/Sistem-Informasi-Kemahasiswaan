"use client";

import AttandanceChart from "@/components/AttandanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import AlumniChart from "@/components/AlumniChart";
import EventCalendar from "@/components/EventCalendar";
import Annaouncements from "@/components/Announcements";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" onClick={() => {}}/>
          <UserCard type="Teacher" onClick={() => {}}/>
          <UserCard type="Parent" onClick={() => {}}/>
          <UserCard type="Staff" onClick={() => {}}/>
        </div>
        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg-w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTANDENCE CHART */}
          <div className="w-full lg-w-2/3 h-[450px]">
            <AttandanceChart />
          </div>
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
