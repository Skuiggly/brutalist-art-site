import Link from "next/link";
import styles from "../styles/Navbar.module.css";

interface Props {
  items: {href: string, text: string}[]
}

const Navbar = ({ items }:Props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {items.map((item, i) => {
          return <li key={i} className={styles.item}><Link href={item.href}>{item.text}</Link></li>
        })}
      </ul>  

      <Link href="/contact-us" >
        <a className={styles.main_button}>
          Get in touch
        </a>
      </Link>
    </nav>
);
}

export default Navbar