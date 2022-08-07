import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Ayah from "../components/Ayah";
import SurahHeader from "../components/SurahHeader";
import Hero from "../components/Hero";

const baseURL = "http://api.alquran.cloud/v1/surah/";
export default function Home() {
  const [surah, setSurah] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(baseURL + "1").then((res) => {
      setSurah(res.data);
      setSpinner(false);
    });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    axios
      .get(baseURL + query)
      .then((res) => {
        setSurah(res.data);
      })
      .catch((err) => {
        alert(err + ": Nomor surah harus berupa angka 1-114");
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Alfurqan - Read your Quran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero handleForm={handleForm} handleQuery={setQuery} />
      <main className="p-8">
        {spinner ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <SurahHeader data={surah.data} />
            {surah.data.ayahs.map((ayah, key) => (
              <Ayah ayah={ayah} key={key} />
            ))}
          </>
        )}
        <section className="flex justify-between font-nunito">
          <button>Selanjutnya</button>
          <button>Sebelumnya</button>
        </section>
      </main>
    </div>
  );
}
