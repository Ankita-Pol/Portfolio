import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const Skills = () => {
  return (
   <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="ReactJs"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
    </div>
    
   </section>
  )
}

export default Skills
