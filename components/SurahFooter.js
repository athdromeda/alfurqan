const SurahFooter = ({ surah, setQuery }) => {
  return (
    <section className="flex justify-between font-nunito">
      <button
        className={surah == 114 ? "invisible" : "flex"}
        onClick={() => setQuery((prev) => prev + 1)}
      >
        <picture>
          <img src="/arrow-left.svg" className="mr-4" alt="next surah" />
        </picture>
        <p>NEXT</p>
      </button>
      <button
        className={surah == 1 ? "invisible" : "flex"}
        onClick={() => setQuery((prev) => prev - 1)}
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
