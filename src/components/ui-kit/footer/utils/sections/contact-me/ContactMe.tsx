import Image from 'next/image';
import React from 'react';
import styles from '../../footer.module.scss';
import { ContactMeDataProps } from './utils/contact-me.interface';

const ContactMe: React.FC<ContactMeDataProps> = ({ contactMe }) => {
    return (
        <section className={styles.footerContactMe}>
            <ul className={styles.footerContactMeChanels}>
                {
                    contactMe.channels.map((channel) => (
                        <li key={channel.label} className={styles.footerContactMeChanelsItem}>
                            {
                                channel.img.src && (
                                    <Image
                                        className={styles.footerContactMeChanelsImg}
                                        src={channel.img.src}
                                        alt={channel.img.alt}
                                        fill={channel.img.fill}
                                        width={channel.img.width}
                                        height={channel.img.height}
                                    />
                                )
                            }
                            <label className={styles.footerContactMeChanelsLabel}>{channel.label}</label>
                        </li>
                    ))
                }
            </ul>
            <ul className={styles.footerContactMeSocialMedia}>
                {
                    contactMe.social_media.map((media) => (
                        <li key={media.alt} className={styles.footerContactMeSocialMediaItem}>
                            {
                                media.src && (
                                    <Image
                                        className={styles.footerContactMeSocialMediaImg}
                                        src={media.src}
                                        alt={media.alt}
                                        fill={media.fill}
                                        width={media.width}
                                        height={media.height}
                                    />
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ContactMe;
