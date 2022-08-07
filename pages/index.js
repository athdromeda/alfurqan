import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SurahHeader from "../components/SurahHeader";
import Hero from "../components/Hero";
import SurahContent from "../components/SurahContent";
import SurahFooter from "../components/SurahFooter";
import Header from "../components/Header";

const baseURL = "http://api.alquran.cloud/v1/surah/";
const Spinner = () => {
  return <h1 className="text-center mt-16">Loading ...</h1>;
};

export default function Home() {
  const [surah, setSurah] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const [readingMode, setReadingMode] = useState(false);
  const [query, setQuery] = useState("1");

  const sendQuery = () => {
    setSpinner(true);
    axios
      .get(baseURL + query)
      .then((res) => {
        setSurah(res.data);
        setSpinner(false);
      })
      .catch((err) => {
        alert(err + ": Nomor surah harus berupa angka 1-114");
      });
  };

  useEffect(() => {
    sendQuery();
  }, [query]);

  const handleForm = (e) => {
    e.preventDefault();
    sendQuery();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Alfurqan - Read your Quran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header readingMode={readingMode} setReadingMode={setReadingMode} />

      <Hero handleForm={handleForm} handleQuery={setQuery} />
      <main className="p-8">
        {spinner ? (
          <Spinner />
        ) : (
          <>
            <SurahHeader data={surah.data} />
            <SurahContent readingMode={readingMode} ayahs={surah.data.ayahs} />
            <SurahFooter surah={surah.data.number} setQuery={setQuery} />
          </>
        )}
      </main>
    </div>
  );
}
