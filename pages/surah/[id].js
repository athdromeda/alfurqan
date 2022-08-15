import { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import SurahHeader from "../../components/SurahHeader";
import Hero from "../../components/Hero";
import SurahContent from "../../components/SurahContent";
import SurahFooter from "../../components/SurahFooter";
import Header from "../../components/Header";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await fetch("http://api.alquran.cloud/v1/surah");
  const surahs = await res.json();
  const paths = surahs.data.map((surah) => ({
    params: {
      id: surah.number + "",
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://api.alquran.cloud/v1/surah/${id}`);
  const surah = await res.json();

  return {
    props: {
      surah,
    },
  };
}

export default function Surah({ surah }) {
  const router = useRouter;
  const [readingMode, setReadingMode] = useState(false);
  const [query, setQuery] = useState("1");

  if(!surah){return null}

  return (
    <div className={styles.container}>
      <Head>
        <title>Alfurqan - Read your Quran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header readingMode={readingMode} setReadingMode={setReadingMode} />

      <Hero handleQuery={setQuery} />
      <main className="p-8">
        <SurahHeader surah={surah} />
        <SurahContent readingMode={readingMode} surah={surah} />
        <SurahFooter surah={surah} />
      </main>
    </div>
  );
}
