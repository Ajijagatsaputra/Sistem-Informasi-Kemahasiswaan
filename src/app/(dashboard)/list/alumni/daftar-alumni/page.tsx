"use client";

import FormModal from "@/components/ModalAlumni";
import Image from "next/image";
import { role } from "@/lib/data";
import { useState } from "react";

const StudentGuidanceTable = () => {
  const [activeTab, setActiveTab] = useState("Bimbingan pra uts");
  const [isModalOpen, setModalOpen] = useState(false);

  const [filters, setFilters] = useState({
    TahunLulus: "",
    RangeGaji: "",
    kelas: "",
    search: "",
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters({ ...filters, [filterKey]: value });
  };

  const handleResetFilters = () => {
    setFilters({ TahunLulus: "", RangeGaji: "", kelas: "", search: "" });
  };

  const data = [
    { nim: "00001", name: "Christine Brooks", RangeGaji: "1jt-3jt",TahunLulus: "2024", kelas: "A", ips: 3.56, TempatKerja: "Sudah" },
    { nim: "00002", name: "Rosie Pearson", RangeGaji: "1jt-3jt",TahunLulus: "2022", kelas: "B", ips: 3.56, TempatKerja: "Belum" },
    { nim: "00003", name: "Darrell Caldwell", RangeGaji: "1jt-3jt",TahunLulus: "2024", kelas: "C", ips: 3.56, TempatKerja: "Proses" },
    { nim: "00004", name: "Gilbert Johnston", RangeGaji: "-1jt",TahunLulus: "2024", kelas: "D", ips: 3.56, TempatKerja: "Sudah" },
    { nim: "00005", name: "Alan Cain", RangeGaji: "-1jt",TahunLulus: "2024", kelas: "A", ips: 3.56, TempatKerja: "Sudah" },
    { nim: "00006", name: "Dustin Dawson", RangeGaji: "-1jt",TahunLulus: "2024", kelas: "B", ips: 3.56, TempatKerja: "Belum" },
    { nim: "00007", name: "Kathryn Mccullough", RangeGaji: "-1jt",TahunLulus: "2021", kelas: "C", ips: 3.56, TempatKerja: "Proses" },
    { nim: "00006", name: "Dustin Dawson", RangeGaji: "-1jt",TahunLulus: "2024", kelas: "B", ips: 3.56, TempatKerja: "Belum" },
    { nim: "00007", name: "Kathryn Mccullough", RangeGaji: "-1jt",TahunLulus: "2023", kelas: "C", ips: 3.56, TempatKerja: "Proses" },
    { nim: "00006", name: "Dustin Dawson", RangeGaji: "3jt-5jt",TahunLulus: "2024", kelas: "B", ips: 3.56, TempatKerja: "Belum" },
    { nim: "00007", name: "Kathryn Mccullough", RangeGaji: "3jt-5jt",TahunLulus: "2021", kelas: "C", ips: 3.56, TempatKerja: "Proses" },
    { nim: "00006", name: "Dustin Dawson", RangeGaji: "3jt-5jt",TahunLulus: "2024", kelas: "B", ips: 3.56, TempatKerja: "Belum" },
    { nim: "00007", name: "Kathryn Mccullough", RangeGaji: "3jt-5jt",TahunLulus: "2021", kelas: "C", ips: 3.56, TempatKerja: "Proses" },
    { nim: "00006", name: "Dustin Dawson", RangeGaji: "+ 5jt",TahunLulus: "2024", kelas: "B", ips: 3.56, TempatKerja: "Belum" },
    { nim: "00007", name: "Kathryn Mccullough", RangeGaji: "+ 5jt",TahunLulus: "2024", kelas: "C", ips: 3.56, TempatKerja: "Proses" },
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

  const filteredData = data.filter((item) => {
    const { TahunLulus, RangeGaji, kelas, search } = filters;

    return (
      (!TahunLulus || item.TahunLulus === TahunLulus) &&
      (!RangeGaji || item.RangeGaji === RangeGaji) &&
      (!kelas || item.kelas === kelas) &&
      (!search || item.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Daftar Alumni</h1>

      {/* Tab Navigasi */}
      <div className="flex items-center gap-4 mb-6 border-b pb-2">
        <button
          className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded font-semibold ml-auto"
          onClick={handleModalToggle}
        >
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" alt="Add" width={14} height={14} />
              // </button>
              <FormModal table="teacher" type="create"/>
            )}  
        </button>
      </div>
      {/* Filter */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <div className="flex items-center gap-2">
          <label className="text-gray-600">Filter By</label>
          <select
            value={filters.TahunLulus}
            onChange={(e) => handleFilterChange("TahunLulus", e.target.value)}
            className="border rounded px-3 py-2 text-gray-600 bg-white"
          >
            <option value="">Tahun Lulus</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filters.RangeGaji}
            onChange={(e) => handleFilterChange("RangeGaji", e.target.value)}
            className="border rounded px-3 py-2 text-gray-600 bg-white"
          >
            <option value="">Range Gaji</option>
            <option value="-1jt">  -1jt </option>
            <option value="1jt-3jt">1jt-3jt</option>
            <option value="3jt-5jt">3jt-5jt</option>
            <option value="+5jt"> +5jt</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filters.kelas}
            onChange={(e) => handleFilterChange("kelas", e.target.value)}
            className="border rounded px-3 py-2 textTahunLulus-gray-600 bg-white"
          >
            <option value="">Divisi</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <button
          onClick={handleResetFilters}
          className="text-red-500 font-semibold hover:underline"
        >
          Reset Filter
        </button>
        <input
          type="text"
          placeholder="Search"
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
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
              <th className="border px-4 py-2">Range Gaji</th>
              <th className="border px-4 py-2">Tahun Lulus</th>
              <th className="border px-4 py-2">Divisi</th>
              <th className="border px-4 py-2">IPK</th>
              <th className="border px-4 py-2">Tempat Kerja</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.nim}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2 text-center">{item.RangeGaji}</td>
                <td className="border px-4 py-2">{item.TahunLulus}</td>
                <td className="border px-4 py-2">{item.kelas}</td>
                <td className="border px-4 py-2 text-center">{item.ips}</td>
                <td
                  className={`border px-4 py-2 text-center rounded ${getStatusClass(
                    item.TempatKerja
                  )}`}
                >
                  {item.TempatKerja}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600">Showing 1-{filteredData.length} of {data.length}</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">{"<"}</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default StudentGuidanceTable;
