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
      <div className={styles.main_button}>
        <Link href="/contact-us" >
          Get in touch
        </Link>
      </div>
    </nav>
);
}

export default Navbar