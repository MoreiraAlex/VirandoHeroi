import styles from '../styles/layout/Home.module.css'

import Image from 'next/image'

import { Link } from 'react-scroll'

import logo from '../../public/logo.svg'

export default function Home() {
  return (
    <main className={styles.main}>
        <header>
            <Image src={logo} width={100} height={100} alt='Logo do site' quality={100}/>
        </header>
        <section>
            <h1>
                se torne um herói<br/>
                <span>de uma vez por todas</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </section>
        <section>
            <video controls poster='/Thumb1.jpg'></video>
            <Link to='ofert' spy={true} smooth={true} offset={100} duration={1800}>
                <button>quero me inscrever agora!</button>
            </Link>
        </section>
    </main>
  )
}
