import React, { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './utils/header.module.scss';
import { HeaderConfig } from './utils/header.interface';
import { ListItems } from '@/pages/api/customCms/db/utils.interface';
import { ListSubMenu } from './utils/ListSubMenu';
import { dinamycReaderOptions } from './HeaderLogic/dinamicReaderRouteToOptions';
import { floatMenuData } from './HeaderLogic/floatMenuData';


interface FloarMenuMobilePropsConfig {
    header: HeaderConfig | undefined;
    pageClass: string
    handleEvent: () => void
    handleSubMenu: boolean;
}

export const FloatMenuMobile: React.FC<FloarMenuMobilePropsConfig> = memo(function FloatMenuMobile({ header, handleSubMenu, pageClass, handleEvent }) {

    const [newOptions, setNewOptions] = useState<ListItems[]>([{ title: "", href: "" }]);

    useEffect(() => {
        setNewOptions(dinamycReaderOptions(pageClass, floatMenuData.options));
    }, [pageClass]);


    return (
        <nav className={`${styles.floatMenuNavegation} ${handleSubMenu ? styles.on : styles.off}`}>
            <header className={styles.header}>
                <button className={styles.headerButton} onClick={handleEvent}>
                    {header?.buttonMenu?.src && (
                        <Image
                            src={header?.buttonMenu?.src}
                            alt={header?.buttonMenu?.alt}
                            fill={false}
                            width={31}
                            height={18}
                        />
                    )}
                </button>
            </header>
            <ul className={styles.floatMenuNavegationList}>
                {
                    newOptions?.map((option: ListItems, index: number) => (
                        <ListSubMenu
                            key={index}
                            title={option.title}
                            href={option.href}
                        />
                    ))
                }
            </ul>
            <div className={styles.floatMenuNavegationLogo}>
                <div className={styles.floatMenuNavegationImg}>
                    {header?.brandImage?.src && (
                        <Image
                            src={header?.brandImage.src}
                            alt={header?.brandImage.alt}
                            fill={false}
                            width={150}
                            height={150}
                        />
                    )}
                </div>
            </div>
        </nav>
    )
})