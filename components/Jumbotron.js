import { useRef } from "react";
import styles from "../styles/Home.module.css";

const Jumbotron = ({ handleForm, handleQuery }) => {
  const refQuery = useRef();

  return (
    <section
      className={
        styles.hero +
        " py-12 px-20 flex flex-col items-center justify-center h-screen font-nunito"
      }
    >
      <p className="text-center text-6xl font-bold font-playfair">al Furqan</p>
      <p className="text-center text-2xl mb-8 font-bold">
        read al Quran from web
      </p>

      <form
        onSubmit={handleForm}
        className="bg-white/10 hover:bg-white/20 w-content flex"
      >
        <input
          ref={refQuery}
          type="text"
          placeholder="Cari di sini"
          className="px-4 bg-transparent border-0 outline-none focus:outline-none placeholder:text-white/50 w-100"
        />
        <button
          type="submit"
          onClick={() => {
            handleQuery(refQuery.current.value);
            refQuery.current.value = "";
          }}
          className="px-4 py-3 bg-transparent hover:bg-white/5"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Jumbotron;
