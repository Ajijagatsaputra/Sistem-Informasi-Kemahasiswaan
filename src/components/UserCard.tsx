import Image from "next/image";

const UserCard = ({ type, onClick }: { type: string; onClick: () => void }) => {
  return (
    <div
      className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-5 flex-1 min-w-[250px] cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] bg-white px-3 py-1 rounded-full text-green-600 shadow-sm">
          2025/26
        </span>
        <div className="p-1 rounded-full hover:bg-black/10 transition-colors">
          <Image src="/more.png" alt="More options" width={20} height={20} />
        </div>
      </div>

      <h1 className="text-3xl font-bold my-4 text-gray-800">1,234</h1>

      <h2 className="capitalize text-sm font-medium text-gray-600">{type}</h2>
    </div>
  );
};

export default UserCard;
