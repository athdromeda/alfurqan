import { useRouter } from "next/router";

const SurahGrid = ({ data }) => {
  const router = useRouter();

  return (
    <main className="p-8 flex flex-wrap items-center flex-row-reverse">
      {data.map((e, i) => (
        <section
          key={e.number}
          onClick={() => router.push(`/surah/${e.number}`)}
          className="flex flex-wrap gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-md m-3 cursor-pointer min-w-[50px]"
        >
          <p className="arabic">{e.name}</p>
          <p className="arabic">{toArabicNum(e.number)}</p>
        </section>
      ))}
    </main>
  );
};

function toArabicNum(en) {
  return ("" + en).replace(/[0-9]/g, function (t) {
    return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t + 1);
  });
}

export default SurahGrid;
