export default function Surah({surahs}){
    return <p>{JSON.stringify(surahs)}</p>
}

export async function getStaticProps(){
    const res = await fetch('http://api.alquran.cloud/v1/surah')
    const surahs = await res.json();
    return {
        props:{
            surahs
        }
    }
}