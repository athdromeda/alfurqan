import { useRef } from "react";
import styles from "../styles/Home.module.css";

const Hero = ({ handleForm, handleQuery }) => {
  const refQuery = useRef();

  return (
    <section
      className={
        styles.hero +
        " py-12 px-20 flex flex-col items-center justify-center h-1/3 font-nunito"
      }
    >
      <p className="text-center text-4xl font-bold font-playfair">al Furqan</p>
      <p className="text-center text-xl mb-8 font-bold">
        read al Quran from web
      </p>

      <form
        onSubmit={handleForm}
        className="bg-white/10 hover:bg-white/20 p-3 rounded-md"
      >
        <input
          ref={refQuery}
          type="text"
          placeholder="Cari di sini"
          className="bg-transparent border-0 outline-none focus:outline-none placeholder:text-white/50"
        />
        <button
          type="submit"
          onClick={() => {
            handleQuery(refQuery.current.value);
            refQuery.current.value = "";
          }}
          className="px-4"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
