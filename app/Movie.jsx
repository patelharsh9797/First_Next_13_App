import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, release_date }) {
  const imgPath = `https://image.tmdb.org/t/p/original`;

  return (
    <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="text-center">
        <h1 className="text-lg leading-5">{title}</h1>
        <h2 className="text-sm mt-2">{release_date}</h2>
      </div>

      <div className="w-fll h-full">
        <Link href={`/${id}`}>
          {/* <img src={imgPath + poster_path} alt="title" /> */}
          <Image
            className="rounded w-full mt-2"
            src={imgPath + poster_path}
            width={800}
            height={800}
            alt="title"
          />
        </Link>
      </div>
    </div>
  );
}
