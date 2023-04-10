import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function Movie({ params }) {
  const { movie } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  const imgPath = `https://image.tmdb.org/t/p/original`;

  return (
    <div>
      <h2 className="text-2xl">{data.title}</h2>
      <h2 className="text-lg">{data.release_date}</h2>
      <h2>Runtime : {data.runtime} Minutes</h2>
      <h2>IMDb ID : {data.imdb_id}</h2>
      <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded text-sm">
        {data.status}
      </h2>

      <Image
        className="my-12 w-full"
        src={imgPath + data.poster_path}
        alt={data.title}
        width={600}
        height={800}
        priority
      />

      <p>{data.overview}</p>
    </div>
  );
}
