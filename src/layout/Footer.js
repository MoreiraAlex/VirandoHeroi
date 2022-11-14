import styles from '../styles/layout/Footer.module.css'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/logo.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Image src={logo} width={100} height={100} alt='Logo do site' quality={100}/>
        <section>
            <span>VirandoHeroi &copy; 2022 Todos os direitos reservados</span>
            <span>
                Desenvolvido por <a href="https://github.com/MoreiraAlex" target="_blank">Alex Moreira</a>
            </span>
        </section>
        <Link href='/policy'>Politica de Privacidade & Termos de Uso</Link>
    </footer>
  )
}
