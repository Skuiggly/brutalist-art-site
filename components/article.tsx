import Image from "next/image";
import styles from "../styles/Article.module.css"
import StyledLink from "./styledlink";

interface Props {
  title: string;
  description: string;
  imgsrc: string;
  alt: string;
}

const Article = ({ title, description, imgsrc, alt}:Props) => {
  return (
    <article className={styles.container} style={{backgroundImage: "url(" + imgsrc + ")"}}>
      <div className={styles.card} >
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
        <StyledLink href="booking" className={styles.button}>
          Book your visit
        </StyledLink>
      </div>

      <div className={styles.image}>
        <Image src={imgsrc} alt={alt} layout="fill"  objectFit="cover"/>
      </div>
    </article>
  )
}

export default Article