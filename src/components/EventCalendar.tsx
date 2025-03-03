"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { id } from "date-fns/locale";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY EVENT DATA
const events = [
  {
    id: 1,
    title: "Infosary",
    time: "2025-12-13",
    description: "Infosary adalah event untuk memperingati HUT TI",
  },
  {
    id: 2,
    title: "Invovest",
    time: "2025-07-01",
    description: "Invovest adalah event tahunan yang diadakan oleh Kemahasiswaan TI",
  },
  {
    id: 3,
    title: "Kunjungi Industri",
    time: "2025-01-01",
    description: "Kunjungan Industri bertujuan memperkenalkan industri kepada mahasiswa TI",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {/* Calendar Section */}
      <Calendar onChange={onChange} value={value} locale="id-ID" className="rounded-md shadow-sm" />

      {/* Header */}
      <div className="flex items-center justify-between mt-6">
        <h1 className="text-2xl font-bold text-gray-700">Upcoming Events</h1>
        <Image src="/more.png" alt="More" width={24} height={24} className="cursor-pointer hover:opacity-75 transition-opacity" />
      </div>

      {/* Event List */}
      <div className="mt-4 space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-purple-50 to-blue-50"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-700 text-lg">{event.title}</h1>
              <span className="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-md">
                {format(new Date(event.time), "dd MMM yyyy", { locale: id })}
              </span>
            </div>
            <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
