import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from "../components/Header";
import LargCard from '../components/LargCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

const Home: NextPage = ({exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-11 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 pl-11">Explore Nearby</h2>

          {/* pull some data from server- API endpoints*/}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pl-11">

          {exploreData?.map(({img, distance, location}) => (
          <SmallCard 
          key={img}
          img={img} distance={distance} location={location} />
          ))}

          </div>
        </section>


        <section>
           <h2 className="text-4xl font-semibold py-8 pl-11">Live Anywhere</h2>

              <div className="flex space-x-3 scrollbar-hide p-3 -ml-3 overflow-scroll">
              {cardsData?.map(({img, title}) => (
                <MediumCard key={img} img={img} title={title} />
              ))}  
              </div>

        </section>

        <LargCard 
        img="https://links.papareact.com/4cj"
        title="The Greatest outdoors"
        description="Wishlist created by Airbnb."
        buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>

  )
}
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

const cardsData = await fetch('https://links.papareact.com/zp1').then(
(res) => res.json()
);

  return{
    props:{
      exploreData, cardsData
    }
  }
}

export default Home
