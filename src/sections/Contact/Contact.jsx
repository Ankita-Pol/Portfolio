import styles from './ContactStyle.module.css'

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder='Name' required />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name="email" id="email" placeholder='Email' required />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea type="text"  name="message" id="massage" placeholder='Massage' required />
            </div>
            <input className='hover btn' type="submit" value='submit' />
        </form>
    </section>
  )
}

export default Contact