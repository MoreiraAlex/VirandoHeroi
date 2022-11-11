import styles from '../styles/layout/Ofert.module.css'

import Image from 'next/image'

import bat from '../assets/icons/bat.svg'

export default function Ofert() {
  return (
    <section className={styles.ofert}>
        <header>
            <Image src={bat} width={150} height={150} alt='Logo do batman'/>
            <h2>
                QUAL SERÁ O VALOR DO INVESTIMENTO 
                <br/>
                PARA SE TONAR UM VERDADEIRO HEROI?
            </h2>
        </header>
        <main>
            <section>
                <span>DE <span>R$2.000.00</span> POR APENAS</span>
                <span>R$997,00</span>
            </section>
            <span>50% DE DESCONTO</span>
            <button>INSCREVA-SE</button>
        </main>
    </section>
  )
}
