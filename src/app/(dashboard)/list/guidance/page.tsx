"use client";

import { useState } from "react";

const studentsData = [
  { id: "00001", name: "Christine Brooks", absensi: 7, semester: "Semester 1", kelas: "A", ips: 3.56, status: "Sudah" },
  { id: "00002", name: "Rosie Pearson", absensi: 0, semester: "Semester 1", kelas: "B", ips: 3.56, status: "Belum" },
  { id: "00003", name: "Darrell Caldwell", absensi: "-", semester: "Semester 1", kelas: "C", ips: 3.56, status: "Belum" },
  { id: "00004", name: "Gilbert Johnston", absensi: 19, semester: "Semester 1", kelas: "D", ips: 3.56, status: "Sudah" },
  { id: "00005", name: "Alan Cain", absensi: 0, semester: "Semester 3", kelas: "A", ips: 3.56, status: "Sudah" },
  { id: "00006", name: "Alfred Murray", absensi: 19, semester: "Semester 3", kelas: "B", ips: 3.56, status: "Sudah" },
  { id: "00007", name: "Maggie Sullivan", absensi: 0, semester: "Semester 3", kelas: "C", ips: 3.56, status: "Sudah" },
  { id: "00008", name: "Rosie Todd", absensi: 19, semester: "Semester 3", kelas: "A", ips: 3.56, status: "Sudah" },
  { id: "00009", name: "Dollie Hines", absensi: 0, semester: "Semester 3", kelas: "B", ips: 3.56, status: "Sudah" },
  { id: "00007", name: "Maggie Sullivan", absensi: 0, semester: "Semester 5", kelas: "C", ips: 3.56, status: "Belum" },
  { id: "00008", name: "Rosie Todd", absensi: 19, semester: "Semester 5", kelas: "A", ips: 3.56, status: "Sudah" },
  { id: "00009", name: "Dollie Hines", absensi: 0, semester: "Semester 5", kelas: "B", ips: 3.56, status: "Belum" },
  { id: "00007", name: "Maggie Sullivan", absensi: 0, semester: "Semester 7", kelas: "C", ips: 3.56, status: "Sudah" },
  { id: "00008", name: "Rosie Todd", absensi: 19, semester: "Semester 7", kelas: "A", ips: 3.56, status: "Sudah" },
  { id: "00009", name: "Dollie Hines", absensi: 0, semester: "Semester 7", kelas: "B", ips: 3.56, status: "Belum" },
];

const Guidance = () => {
  const [filters, setFilters] = useState({ semester: "", status: "", kelas: "", search: "" });
  const [students, setStudents] = useState(studentsData);

  const resetFilters = () => setFilters({ semester: "", status: "", kelas: "", search: "" });

  const handleDelete = (id: any) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter(
    (student) =>
      (filters.semester ? student.semester === filters.semester : true) &&
      (filters.status ? student.status === filters.status : true) &&
      (filters.kelas ? student.kelas === filters.kelas : true) &&
      (filters.search
        ? student.name.toLowerCase().includes(filters.search.toLowerCase())
        : true)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Bimbingan Dosen</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Perwalian Mahasiswa</h2>
          <button onClick={resetFilters} className="text-red-500 text-sm underline">
            Reset Filter
          </button>
        </div>
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className="p-2 border rounded-md"
            value={filters.semester}
            onChange={(e) => setFilters({ ...filters, semester: e.target.value })}
          >
            <option value="">Semester</option>
            <option value="Semester 1">Semester 1</option>
            <option value="Semester 3">Semester 3</option>
            <option value="Semester 3">Semester 5</option>
            <option value="Semester 3">Semester 7</option>
          </select>
          <select
            className="p-2 border rounded-md"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">Status</option>
            <option value="Sudah">Sudah</option>
            <option value="Belum">Belum</option>
          </select>
          <select
            className="p-2 border rounded-md"
            value={filters.kelas}
            onChange={(e) => setFilters({ ...filters, kelas: e.target.value })}
          >
            <option value="">Kelas</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <input
            type="text"
            placeholder="Search by Name"
            className="p-2 border rounded-md flex-1"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-2 border">Nim</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Absensi</th>
              <th className="p-2 border">Semester</th>
              <th className="p-2 border">Kelas</th>
              <th className="p-2 border">IPS</th>
              <th className="p-2 border">Status Bimbingan</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="p-2 border">{student.id}</td>
                <td className="p-2 border">{student.name}</td>
                <td className="p-2 border">{student.absensi}</td>
                <td className="p-2 border">{student.semester}</td>
                <td className="p-2 border">{student.kelas}</td>
                <td className="p-2 border">{student.ips.toFixed(2)}</td>
                <td className="p-2 border">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      student.status === "Sudah" ? "bg-teal-400" : "bg-red-400"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-2 border flex gap-2">
                  <img
                    src="/view.png"
                    alt="View"
                    className="w-6 h-6 cursor-pointer"
                  />
                  <img
                    src="/delete.png"
                    alt="Delete"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleDelete(student.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No data found</p>
        )}
      </div>
    </div>
  );
};

export default Guidance;
