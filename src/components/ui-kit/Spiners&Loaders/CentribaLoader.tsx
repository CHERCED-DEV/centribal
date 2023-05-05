import Image from 'next/image'
import React, { memo } from 'react'
import Logo from '../../../../public/assets/logos/newman-White.svg'

const CentribaLoader = () => {
    return (
        <div className='loader'>
            {
                Logo && (
                    <Image
                        className='loader__img'
                        src={Logo}
                        alt='newman'
                        width={293}
                        height={131}
                        priority={true}
                    />
                )
            }

        </div>
    )
}

export default memo(CentribaLoader);