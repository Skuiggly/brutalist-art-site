import type { NextPage } from 'next'
import Image from 'next/image'
import Article from '../components/article'
import CardList, { Card } from '../components/cardlist'
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const artists_json = {
    items: [
      {
        name: "Maria Miramar",
        location: "Berlin",
        occupation: "Digital Creator",
        imgsrc: "/Card-Photos/Maria-Miramar.jpeg",
        alt: "Profile photo of a young woman"
      },
      {
        name: "Ben Karl",
        location: "Amsterdam",
        occupation: "Audio-Video Artist",
        imgsrc: "/Card-Photos/Ben-Karl.jpeg",
        alt: "Profile photo of a young man"
      },
      {
        name: "Alana David",
        location: "Paris",
        occupation: "Installation Artist",
        imgsrc: "/Card-Photos/Alana-David.png",
        alt: "Profile photo of a young woman"
      }
    ]
  }
  return (
    <>
      <Article imgsrc='/wall-graffiti.jpeg' alt='4 people standing in front of a graffiti painting. 1 woman looking down on her phone. A mother and son looking at the painting. A person blurred and in motion'>
        <h1 className='main__title'>
          Radical landscapes: Art, identity and activism
        </h1>
        <p>
          Expanding on landscape art as being limited to paintings of lush green hills, 
          enjoy art that reflects the diversity of the landscape and the communities that inhabit it.</p>
      </Article>
      <section className='wrapper flow' aria-labelledby='section-title'>
        <h2 className='section-title'>ARTISTS</h2>
        <CardList className={styles.container}>
          {artists_json.items.map((item, i) => {
            return (<Card key={i} className={styles.card}>
              <Image src={item.imgsrc} alt={item.alt} width="411px" height="620px" objectFit='cover'/>
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              <hr />
              <p>{item.occupation}</p>
            </Card>);
          })}
        </CardList>
      </section>
{/* 
      <main className={styles.main}>
        <Carousel />
      </main>

      <section>
        <h2>ARTISTS</h2>
        <Carousel />
      </section>

      <RollingBanner icon="" text="This is a rolling banner"/>
 */}
      
    </>
  )
}

export default Home
