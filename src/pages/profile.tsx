import MainLayout from "../components/MainLayout";
import styles from '../styles/profile.module.css'

export default function Profile() {

    return (
        <MainLayout>
            <section className={styles.links}>
                <a>GitHub ↗</a>
                <a>LinkedIn ↗</a>
            </section>
            <section className={styles.certificate} >
                <a>Harvard cs50 2020 web programming certificate ↗</a>
            </section>
        </MainLayout>
    )
}