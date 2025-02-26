import styles from './HeroStyles.module.css'
import heroImg from '../../assets/red.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import RESUME from '../../assets/ankita_resume.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light'? sun:moon;
  const twitterIcon = theme === 'light'? twitterLight:twitterDark;
  const githubIcon = theme === 'light'? githubLight:githubDark;
  const linkedinIcon = theme === 'light'? linkedinLight:linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile pic of me" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>      
      </div>
      <div className={styles.info}>
        <h1>Ankita <br />Pol</h1>
        <h2>Frontend Developer</h2>
        <span>
            {/* <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="twitter icon" />
            </a> */}
            <a href="https://github.com/polankita" target="_blank">
                <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/ankita-pol-03186524a/" target="_blank">
                <img src={linkedinIcon} alt="linkedin icon" />
            </a>
        </span>
        <p className={styles.description}>"Bringing ideas to life with sleek React interfaces while delving into the depths of MERN to craft seamless web experiences." 🚀</p>
        <a href={RESUME} download>
            <button className='hover'>
                Resume
            </button>
        </a>
      </div>
    </section>
  )
}

export default Hero;
