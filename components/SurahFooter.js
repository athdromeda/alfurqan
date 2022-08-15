import { useRouter } from "next/router";

const SurahFooter = ({ surahNumber }) => {
  const router = useRouter();
  return (
    <section className="flex justify-between font-nunito">
      <button
        className={surahNumber == 114 ? "invisible" : "flex"}
        onClick={() => router.push(`/surah/${surahNumber + 1}`)}
      >
        <picture>
          <img src="/arrow-left.svg" className="mr-4" alt="next surah" />
        </picture>
        <p>NEXT</p>
      </button>
      <button
        className={surahNumber == 1 ? "invisible" : "flex"}
        onClick={() => router.push(`/surah/${surahNumber - 1}`)}
      >
        <p>PREVIOUS</p>
        <picture>
          <img src="/arrow-right.svg" className="ml-4" alt="previous surah" />
        </picture>
      </button>
    </section>
  );
};

export default SurahFooter;
