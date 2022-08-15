const SurahHeader = ({ surah }) => {
  if (!surah.data) return null;
  const {name, englishName, englishNameTranslation} = surah.data;


  return (
    <section className="text-center mb-8">
      <h3 className="text-2xl font-arabic">{name}</h3>
      <h4 className="font-nunito">
        {englishName + " | " + englishNameTranslation}
      </h4>
    </section>
  );
};

export default SurahHeader;
