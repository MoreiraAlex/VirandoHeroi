import styles from '../styles/pages/NoFound.module.css'

import Image from 'next/image'

import bat from '../assets/icons/batYellow.svg'

export default function NoFound() {
  return (
    <section className={styles.noFound}>
      <Image src={bat} width={150} height={150} alt='Logo do batman'/>
      <h1>ESSA PÁGINA NÃO FOI ENCONTRADA</h1>
    </section>
  )
}
