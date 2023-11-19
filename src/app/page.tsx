// import Image from 'next/image'
import AnimatedMouseChaseWrapper from '@/components/AnimatedMouseChaseWrapper/AnimatedMouseChaseWrapper'
import styles from './page.module.scss'
import AnimatedPoints from '@/components/AnimatedPoints/AnimatedPoints'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Hello, {`I'm`} <AnimatedMouseChaseWrapper>
          <a className={styles.link} href="https://github.com/Alexander-2049" target='_blank'>Alexander</a>
        </AnimatedMouseChaseWrapper>!
      </h1>
      <div className={styles.points}>
        <AnimatedPoints
          basePointSize = {12}
          pointMaxScale = {4.2}
          distanceBetweenPoints = {32}
          hoverRadius = {190}
          padding = {24}
          colorMain = {'#ff3535'}
          colorSecondary = {'#ffb300'}
          isHoverEffect = {true}
          isColorChange = {true}
          isScaleChange = {true}
          isGradientAnimation = {true}
          pointBorderRadius = {50}
          transitionDuration = {250}
        />
      </div>
    </main>
  )
}
