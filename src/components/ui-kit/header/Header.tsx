import React, { memo } from 'react';
import Image from 'next/image';
import styles from './utils/header.module.scss';
import { FloatMenuMobile } from './FloatMenuMobile'
import { useRouter } from 'next/router';
import { HeaderConfig } from './utils/header.interface';
import { usePortalProvider } from '@/utils/providers/modalProvider';

interface HeaderPropsConfig {
    pageClass: string
    headerSimple: boolean;
    setHeaderSimple: React.Dispatch<React.SetStateAction<boolean>>;
    header: HeaderConfig;
}

const Header: React.FC<HeaderPropsConfig> = ({ header, pageClass, headerSimple, setHeaderSimple }) => {
    const { handleSubMenu, sethandleSubMenu } = usePortalProvider();
    const router = useRouter();
    const handleEventBack = () => {
        const pathArray = router.asPath.split("/");
        pathArray.splice(-1, 1);
        let backTo = pathArray.join("/");
        if (backTo === "") {
            backTo = "/"
        }
        return router.push(backTo)
    }


    const handleEvent = () => {
        sethandleSubMenu(!handleSubMenu);
    }

    return (
        <>
            <FloatMenuMobile header={header} handleSubMenu={handleSubMenu} pageClass={pageClass} handleEvent={handleEvent} />
            <header id='header' className={styles.headerContainer} >
                <nav className={styles.header}>
                    <div className={styles.headerImg}>
                        {header?.brandImage?.src && (
                            <Image
                                src={header.brandImage.src}
                                alt={header.brandImage.alt}
                                width={header.brandImage.width}
                                height={header.brandImage.height}
                            />
                        )}
                    </div>
                    {
                        headerSimple ? (
                            <button className={styles.headerButton} onClick={handleEvent}>
                                <div className={styles.headerButtonImg}
                                >
                                    {header?.buttonMenu.src && (
                                        <Image
                                            src={header.buttonMenu.src}
                                            alt={header.buttonMenu.alt}
                                            width={header.buttonMenu.width}
                                            height={header.buttonMenu.height}
                                        />
                                    )}
                                </div>
                            </button>
                        ) : (
                            <button className={styles.headerBackToButton} onClick={() => {
                                handleEventBack();
                                setHeaderSimple(!headerSimple);
                            }}>
                                <div className={styles.headerBackToButtonImg}>
                                    {header?.brandImage.src && (
                                        <Image
                                            src={header.backTo.src}
                                            alt={header.backTo.alt}
                                            fill={false}
                                            width={32}
                                            height={32}
                                        />
                                    )}
                                </div>
                            </button>
                        )
                    }
                </nav>
            </header>
        </>
    )
}

export default memo(Header);