const Annaouncements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Kegiatan UTS Semester Ganjil</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024/2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Ujian Tengah Semester diadakan pada tanggal 6 Desember 2024
          </p>
        </div>
      </div>
      <div className="bg-lamaPurpleLight rounded-md p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Kegiatan UAS Semester Ganjil</h2>
          <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
            2024/2025
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          Ujian Akhir Semester diadakan pada tanggal 13 Januari 2025
        </p>
      </div>
      <div className="bg-lamaYellowLight rounded-md p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">
            Kegiatan Cuti Menyambut Bulan Ramadhan
          </h2>
          <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
            2025/2026
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          Dengan menyambut bulan ramadhan ini, kami memberikan cuti kepada
          seluruh siswa untuk menyambut ramadhan
        </p>
      </div>
    </div>
  );
};

export default Annaouncements;
