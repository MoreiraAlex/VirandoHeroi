import styles from '../styles/layout/Professor.module.css'

import Image from 'next/image'

import batman from '../assets/Card-Batman.jpg'

export default function Professor() {
  return (
    <section className={styles.professor}>
        <div>
            <Image src={batman} alt='Foto do Professor' width={200} quality={100}/>
            <header>
                <h2>QUEM SERÁ SEU PROFESSOR</h2>
            </header>
            <article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui non nulla porta placerat. <strong>Vest ibulum sed rhoncus</strong> erat. Proin ut rutrum orci. Quisque risus lectus, sodales a faucibus at, accumsan nec nulla. Nulla ut dapibus risus, sed tempor dui.
                    In varius sed nibh ac sodales. Pellentesque aliquam odio
                </p>
                <p>
                    nec ex pulvinar gravida. <strong>Maecenas id nibh vitae</strong> leo eleifend porttitor in eu purus. Nulla et ornare tellus. Nunc molestie turpis id quam mollis, sed dictum risus faucibus. Ut tristique consequat quam quis commodo. Curabitur nec sagittis lectus. Sed sagittis odio ut maximus mollis. Vestibulum imperdiet sodales tortor gravida varius. Fusce accumsan, urna a vehicula facilisis, ante orci rhoncus dolor, eu sagittis dui massa vel nunc.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui non nulla porta placerat.
                </p>
            </article>
        </div>
    </section>
  )
}
