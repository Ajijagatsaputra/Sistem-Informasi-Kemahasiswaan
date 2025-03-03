import React from "react";

const announcementsData = [
  {
    title: "Kegiatan UTS Semester Ganjil",
    session: "2024/2025",
    description: "Ujian Tengah Semester diadakan pada tanggal 6 Desember 2024",
    bgColor: "bg-blue-50",
  },
  {
    title: "Kegiatan UAS Semester Ganjil",
    session: "2024/2025",
    description: "Ujian Akhir Semester diadakan pada tanggal 13 Januari 2025",
    bgColor: "bg-purple-50",
  },
  {
    title: "Kegiatan Cuti Menyambut Bulan Ramadhan",
    session: "2025/2026",
    description:
      "Dengan menyambut bulan ramadhan ini, kami memberikan cuti kepada seluruh siswa untuk menyambut ramadhan",
    bgColor: "bg-yellow-50",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Announcements</h1>
        <button className="text-sm text-blue-500 hover:underline">View All</button>
      </div>
      <div className="space-y-4">
        {announcementsData.map((announcement, index) => (
          <div
            key={index}
            className={`${announcement.bgColor} p-4 rounded-lg transition-transform transform hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-700">{announcement.title}</h2>
              <span className="text-xs text-gray-500 bg-white rounded-full px-2 py-1 shadow">
                {announcement.session}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
