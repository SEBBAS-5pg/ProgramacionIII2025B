"use client";

import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";



interface Props{
    path:string;
    text:string;
}

export const ActiveLink = ({path, text}: Props) => {
    const currentPathName = usePathname();
    const isActive = currentPathName === path;

    const finalClassName = `${styles.link} ${isActive ? styles.active: ""}`;

  return (
    <Link className={finalClassName} href={path}>
        {text}
    </Link>
  )
}


