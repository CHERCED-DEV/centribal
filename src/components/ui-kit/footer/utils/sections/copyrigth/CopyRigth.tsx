import React from 'react';
import styles from '../../footer.module.scss';
import { CopyRigthDataProps } from './utils/copyrigth.interface';

const CopyRigth: React.FC<CopyRigthDataProps> = ({copyRight}) => {
  return (
    <section className={styles.footerCopyRigth}>
        <label className={styles.footerCopyRigthTerms}>{copyRight.terms}</label>
        <label className={styles.footerCopyRigthPoweredBy}>{copyRight.powered_by}</label>
    </section>
  )
}

export default CopyRigth;
