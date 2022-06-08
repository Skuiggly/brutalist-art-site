import Link from "next/link";
import styles from "../styles/StyledLink.module.css";

interface Props {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const StyledLink = ({ href, className, children }:Props) => {
  return (
      <Link href={href} >
        <a className={styles.button + ' ' + className}>
          {children}
        </a>
      </Link>
);
}

export default StyledLink