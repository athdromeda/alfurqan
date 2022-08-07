const SurahHeader = ({ data }) => {
  return (
    <section className="text-center mb-8">
      <h3 className="text-2xl font-arabic">{data.name}</h3>
      <h4 className="font-nunito">
        {data.englishName + " | " + data.englishNameTranslation}
      </h4>
    </section>
  );
};

export default SurahHeader;
