import React from 'react';
import styles from '../../footer.module.scss';
import { NewsLetterDataProps } from './utils/newsletter.interface';

const NewsLetter: React.FC<NewsLetterDataProps> = ({ newsletter }) => {
    return (
        <section className={styles.footerNewsLetter}>
            <h1 className={styles.footerNewsLetterTitle}>{newsletter.title}</h1>
            <form className={styles.footerNewsLetterForm}>
                <input className={styles.footerNewsLetterInput} type="text" placeholder={newsletter.form.placeholder} />
                <button className={styles.footerNewsLetterSubmit} type="submit">{newsletter.form.submit}</button>
            </form>
        </section>
    )
}

export default NewsLetter;