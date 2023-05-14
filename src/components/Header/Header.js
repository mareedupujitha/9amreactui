import React from "react";
import styles from '@/components/Header/Header.module.css'

export const Header = () => {
    return (
        <div className={`bg-primary text-center text-white ${styles.header}`}>Questions</div>
    )
}