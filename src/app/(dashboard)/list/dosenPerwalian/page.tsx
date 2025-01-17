"use client";

import { useState } from "react";
import FormModal from "@/components/FormModal";

const StudentGuidanceTable = () => {
  const [activeTab, setActiveTab] = useState("Bimbingan pra uts");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const data = [
    { nim: "00001", name: "Christine Brooks", absensi: 7, semester: "Semester 1", kelas: "A", ips: 3.56, status: "Sudah" },
    { nim: "00002", name: "Rosie Pearson", absensi: 0, semester: "Semester 1", kelas: "B", ips: 3.56, status: "Belum" },
    { nim: "00003", name: "Darrell Caldwell", absensi: "-", semester: "Semester 1", kelas: "C", ips: 3.56, status: "Proses" },
    { nim: "00004", name: "Gilbert Johnston", absensi: 19, semester: "Semester 1", kelas: "D", ips: 3.56, status: "Sudah" },
    { nim: "00005", name: "Alan Cain", absensi: 0, semester: "Semester 3", kelas: "A", ips: 3.56, status: "Sudah" },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Sudah":
        return "bg-green-100 text-green-700";
      case "Belum":
        return "bg-red-100 text-red-700";
      case "Proses":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Perwalian Mahasiswa</h1>

      {/* Tab Navigasi */}
      <div className="flex items-center gap-4 mb-6 border-b pb-2">
        <button
          onClick={() => handleTabClick("Bimbingan pra uts")}
          className={`py-2 px-4 font-semibold rounded ${
            activeTab === "Bimbingan pra uts"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Bimbingan pra uts
        </button>
        <button
          onClick={() => handleTabClick("Bimbingan pra uas")}
          className={`py-2 px-4 font-semibold rounded ${
            activeTab === "Bimbingan pra uas"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Bimbingan pra uas
        </button>
        <button
          className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded font-semibold ml-auto"
          onClick={handleModalToggle}
        >
          + Perwalian
        </button>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <div className="flex items-center gap-2">
          <label className="text-gray-600">Filter By</label>
          <select className="border rounded px-3 py-2 text-gray-600 bg-white">
            <option>Semester</option>
            <option>1</option>
            <option>3</option>
            <option>5</option>
            <option>7</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <select className="border rounded px-3 py-2 text-gray-600 bg-white">
            <option>Status</option>
            <option>Sudah</option>
            <option>Belum</option>
            <option>Proses</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <select className="border rounded px-3 py-2 text-gray-600 bg-white">
            <option>Kelas</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
        </div>
        <button className="text-red-500 font-semibold hover:underline">Reset Filter</button>
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-3 py-2 ml-auto text-gray-600"
        />
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-left border-collapse border">
          <thead className="bg-blue-50">
            <tr>
              <th className="border px-4 py-2">Nim</th>
              <th className="border px-4 py-2">NAME</th>
              <th className="border px-4 py-2">Absensi</th>
              <th className="border px-4 py-2">Semester</th>
              <th className="border px-4 py-2">Kelas</th>
              <th className="border px-4 py-2">IPS</th>
              <th className="border px-4 py-2">Status Bimbingan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.nim}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2 text-center">{item.absensi}</td>
                <td className="border px-4 py-2">{item.semester}</td>
                <td className="border px-4 py-2">{item.kelas}</td>
                <td className="border px-4 py-2 text-center">{item.ips}</td>
                <td
                  className={`border px-4 py-2 text-center rounded ${getStatusClass(
                    item.status
                  )}`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600">Showing 1-9 of 78</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">{"<"}</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">{">"}</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <FormModal onClose={handleModalToggle} />}
    </div>
  );
};

export default StudentGuidanceTable;
