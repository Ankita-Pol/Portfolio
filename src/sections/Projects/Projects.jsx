import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import bubbles from '../../assets/bubble.jpg'
import profile from '../../assets/profile-card.jpeg'
import clock from '../../assets/clock.jpeg'
import logs from '../../assets/log-in.jpeg'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../common/ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.ProjectsContainer}>
        <ProjectCard src={bubbles} 
        link='https://github.com/Ankita-Pol/bubble-game' 
        h3="Bubble Game" 
        p="Popping Bubbles"/>

        <ProjectCard src={profile} 
        link='https://github.com/Ankita-Pol/profile-card' 
        h3="Profile Card" 
        p="Celebrity social media profiles"/>

        <ProjectCard src={clock} 
        link='https://github.com/Ankita-Pol/web-alarm' 
        h3="Web Alarm" 
        p="In-browser alarm"/>

        <ProjectCard src={logs} 
        link='https://github.com/polankita/login-sighnup-' 
        h3="Sign-up form" 
        p="Login-in & Sign-up form UI"/>
        
      </div>
    </section>
  )
}

export default Projects
