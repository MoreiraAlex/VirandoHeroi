import styles from '../styles/components/DepositionsCard.module.css'

import Image from 'next/image'


export default function DepositionsCard({img, title, text}) {
  return (
    <section className={styles.depositionsCard}>
        <Image src={img} alt='Imagem dos depoimentos' quality={100} priority/>
        <h4>{title}</h4>
        <p>{text}</p>   
    </section>
  )
}
