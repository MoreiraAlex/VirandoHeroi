import styles from '../styles/layout/Depositions.module.css'

import Image from 'next/image'

import bat from '../assets/icons/bat.svg'
import woman from '../assets/depositions/Thumbs_Herois_Mulher Maravilha.jpg'
import man from '../assets/depositions/Thumbs_Herois_Super Homem.jpg'
import green from '../assets/depositions/Thumbs_Herois_Lanterna Verde.jpg'
import aquaman from '../assets/depositions/Thumbs_Herois_Aquaman.jpg'
import cib from '../assets/depositions/Thumbs_Herois_Ciborgue.jpg'
import flash from '../assets/depositions/Thumbs_Herois_Flash.jpg'

import DepositionsCard from '../components/DepositionsCard'

export default function Depositions() {
  return (
    <section className={styles.depositions}>
        <header>
            <Image src={bat} width={150} height={150} alt='Logo do batman'/>
            <h2>O QUE OS OUTROS HERÓIS TEM A DIZER?</h2>
        </header>
        <main>
            <DepositionsCard 
                img={woman} 
                title='Mulher Maravilha' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            />
            <DepositionsCard 
                img={man} 
                title='Super Homem' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            />
            <DepositionsCard 
                img={green} 
                title='Lanterna Verde' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            />
            <DepositionsCard 
                img={aquaman} 
                title='Aquaman' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            />
            <DepositionsCard 
                img={cib} 
                title='Ciborgue' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            />
            <DepositionsCard 
                img={flash} 
                title='Flash' 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
            />
        </main>
    </section>
  )
}
