import styles from '../styles/layout/Objections.module.css'

import Image from 'next/image'

import mockup from '../assets/mockup.png'

export default function Objections() {
  return (
    <section className={styles.section}>
        <header>
            <h2>O QUE É O CURSO VIRANDO HERÓI?</h2>
        </header>
        <div>
            <article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui non nulla porta placerat. <strong>Vest ibulum sed rhoncus</strong> erat. Proin ut rutrum orci. Quisque risus lectus, sodales a faucibus at, accumsan nec nulla. Nulla ut dapibus risus, sed tempor dui.
                    In varius sed nibh ac sodales. Pellentesque aliquam odio
                </p>
                <p>
                    nec ex pulvinar gravida. <strong>Maecenas id nibh vitae</strong> leo eleifend porttitor in eu purus. Nulla et ornare tellus. Nunc molestie turpis id quam mollis, sed dictum risus faucibus. Ut tristique consequat quam quis commodo. Curabitur nec sagittis lectus. Sed sagittis odio ut maximus mollis. Vestibulum imperdiet sodales tortor gravida varius. Fusce accumsan, urna a vehicula facilisis, ante orci rhoncus dolor, eu sagittis dui massa vel nunc.
                </p>
            </article>
            <Image src={mockup} width={300} alt='Imagem de capa do curso' quality={100}/>
        </div>
    </section>
  )
}
