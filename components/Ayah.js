const Ayah = ({ ayah, readingMode }) => {
  return (
        <section className="mb-8">
          <div className="flex justify-between">
            <p className="arabic text-right text-xl mb-4 mr-3">
              {ayah.numberInSurah}
            </p>
            <p className="arabic text-right text-xl leading-10 mb-4">
              {ayah.text} ۝
            </p>
          </div>

          <hr className="opacity-20" />
        </section>
  );
};

export default Ayah;
