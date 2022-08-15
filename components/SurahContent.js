import Ayah from "../components/Ayah";

const SurahContent = ({ readingMode, surah }) => {
  if (!surah.data) return null;
  const {data} = surah

  return (
    <>
      {readingMode ? (
        <section
          className="flex flex-row-reverse flex-wrap arabic justify-end text-xl leading-10 ml-3 mb-12"
          dir="rtl"
        >
          {data.ayahs?.map((ayah) => ayah.text + " ۝  ")}
        </section>
      ) : (
        <section>
          {data.ayahs?.map((ayah, key) => (
            <Ayah ayah={ayah} readingMode={readingMode} key={key} />
          ))}
        </section>
      )}
    </>
  );
};

export default SurahContent;
