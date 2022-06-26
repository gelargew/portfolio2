import MainLayout from "../components/MainLayout";
import styles from '../styles/profile.module.css'

export default function Profile() {

    return (
        <MainLayout>
            <section className={styles.links}>
                <a href='https://github.com/gelargew' target='_blank' rel='noreferrer' >
                    <div className={styles.emailLink}>
                            <p>GitHub ↗</p>
                            <p>GitHub ↗</p>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/gelar/' target='blank' rel='noreferrer'>
                    <div className={styles.emailLink}>
                            <p>LinkedIn ↗</p>
                            <p>LinkedIn ↗</p>
                    </div>
                </a>
                <a href='mailto:gelargew@gmail.com' target='_blank' rel='noreferrer' >
                    <div className={styles.emailLink}>
                        <p>Email ↗</p>
                        <p>gelargew@gmail ↗</p>
                    </div>
                </a>
            </section>
            <section className={styles.certificate} >
                <a href='https://certificates.cs50.io/89e51546-b427-4fd6-8400-e890c0a4ac54' target='_blank' rel='noreferrer'>Harvard cs50 2021 web programming certificate ↗</a>
            </section>
        </MainLayout>
    )
}