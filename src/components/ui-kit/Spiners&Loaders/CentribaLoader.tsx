import Image from 'next/image'
import React, { memo } from 'react'
import Logo from '../../../../public/assets/logos/centribalLoader.svg'

export const CentribaLoader = () => {
    return (
        <div className='loader'>
            {
                Logo && (
                    <Image
                        className='loader__img'
                        src={Logo}
                        alt='newman'
                        width={248}
                        height={262}
                        priority={true}
                    />
                )
            }

        </div>
    )
}

 