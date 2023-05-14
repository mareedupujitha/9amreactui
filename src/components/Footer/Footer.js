import React from "react";
import styles from '@/components/Footer/Footer.module.css'

export const Footer = () => {
    return (
        <div className={`bg-primary text-center text-white ${styles.footer}`}>&copy; right belongs to me</div>
    )
}