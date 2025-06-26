import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {
        Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="w-full h-10">
            {index}
          </div>
        ))
      }
    </div>
  );
}
