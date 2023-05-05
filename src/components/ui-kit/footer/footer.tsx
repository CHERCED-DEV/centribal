import React, { lazy, memo } from 'react';
import styles from './utils/footer.module.scss';
import { footerDataProps } from './utils/footer.interface';

const ContactMe = lazy(() => import('./utils/sections/contact-me/ContactMe'));
const NewsLetter = lazy(() => import('./utils/sections/news-letter/NewsLetter'));
const CopyRigth = lazy(() => import('./utils/sections/copyrigth/CopyRigth'));

const Footer: React.FC<footerDataProps> = ({ footer }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <NewsLetter newsletter={footer.newsletter} />
                <ContactMe contactMe={footer.contactMe} />
            </div>
            <CopyRigth copyRight={footer.copyRight} />
        </footer>
    );
};

export default memo(Footer);

