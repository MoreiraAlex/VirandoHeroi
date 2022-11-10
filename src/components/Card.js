import styles from '../styles/components/Card.module.css'

import Image from 'next/image'


export default function Card({icon, bonus, title, text}) {
  return (
    <section className={`${styles.card} ${bonus ? styles.bonus : null}`}>
        <Image src={icon} alt='Icones do conteudo do curso' width={90} height={90}/>
        <h4>{title}</h4>
        <p>{text}</p>   
    </section>
  )
}
