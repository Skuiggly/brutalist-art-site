import Image from "next/image";
import styles from "../styles/Article.module.css"
import StyledLink from "./styledlink";

interface Props {
  imgsrc: string;
  alt: string;
  children?: React.ReactNode;
}

const Article = ({ imgsrc, alt, children}:Props) => {
  console.log(children);
  
  return (
    <article className={styles.container} style={{backgroundImage: "url(" + imgsrc + ")"}}>
      <div className={styles.card} >
        {children}
        <StyledLink href="booking">
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