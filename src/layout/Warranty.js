import styles from '../styles/layout/Warranty.module.css'

import Image from 'next/image'

import bat from '../assets/icons/batYellow.svg'
import garantia from '../assets/Garantia.svg'


export default function Warranty() {
  return (
    <section className={styles.warranty}>
       <header>
            <Image src={bat} width={150} height={150} alt='Logo do batman'/>
            <h2>ZERO PREOCUPAÇÕES</h2>
       </header>
       <main>
            <section>
                <header>
                    <h3>7 DIAS DE GARANTIA INCONDICIONAL</h3>
                </header>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui non nulla porta placerat. Vestibulum sed rhoncus erat. Proin ut rutrum orci. Quisque risus lectus, sodales a faucibus at, accumsan nec nulla. Nulla ut dapibus risus, sed tempor dui. In varius sed nibh ac sodales. Pellentesque aliquam odio nec ex pulvinar gravida.
                    </p>
                </article>
            </section>
            <section>
                <Image src={garantia} alt='Selo de garantia'/>
            </section>
       </main>
    </section>
  )
}
