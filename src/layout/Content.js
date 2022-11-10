import styles from '../styles/layout/Content.module.css'

import Image from 'next/image'

import bat from '../assets/icons/bat.svg'
import firstStep from '../assets/icons/primeirosPassos.svg'
import etica from '../assets/icons/etica.svg'
import win from '../assets/icons/ganhandoReputação.svg'
import dangers from '../assets/icons/situaçõesPerigosas.svg'
import natural from '../assets/icons/desastresNaturais.svg'
import enemy from '../assets/icons/derrotandoInimigo.svg'
import dangers2 from '../assets/icons/perigosEminentes.svg'
import bad from '../assets/icons/vilões.svg'

import Card from '../components/Card'

export default function Content() {
  return (
    <section className={styles.content}>
       <header>
            <Image src={bat} width={150} height={150}/>
            <h2>O QUE VOCÊ IRÁ APRENDER</h2>
       </header>
       <main>
            <section>
                <main>
                    <Card 
                        icon={firstStep} 
                        title='Primeiros Passos' 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                    <Card 
                        icon={etica} 
                        title='Primeiros Passos' 
                        text='Lorem ipsum dolor sit amet.'
                    />
                    <Card 
                        icon={win} 
                        title='Primeiros Passos' 
                        text='Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                    <Card 
                        icon={dangers} 
                        title='Primeiros Passos' 
                        text='Lorem ipsum dolor sit amet, pulvinar dapibus leo.'
                    />
                    <Card 
                        icon={natural} 
                        title='Primeiros Passos' 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                    <Card 
                        icon={enemy} 
                        title='Primeiros Passos' 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                </main>
            </section>
            <section>
                <header>
                    <h3>CONHEÇA OS NOSSOS BÔNUS</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                        <br/>
                        ullamcorper mattis, pulvinar dapibus leo. in varius sed nibh ac sodales.
                    </p>                    
                </header>
                <main>
                    <Card 
                        icon={dangers2} 
                        bonus = {true}
                        title='Primeiros Passos' 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                    <Card 
                        icon={bad} 
                        bonus = {true}
                        title='Primeiros Passos' 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                </main>
            </section>
       </main>
    </section>
  )
}
