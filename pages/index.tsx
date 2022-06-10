import type { NextPage } from 'next'
import Article from '../components/article'

const Home: NextPage = () => {
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
      <section className='wrapper'>
        <h2 className='section-title'>ARTISTS</h2>
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
