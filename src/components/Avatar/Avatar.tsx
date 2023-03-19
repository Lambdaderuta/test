import type { FC } from 'react'

import notificationIcon from '~/assets/notification.svg'

import type { AvatarPropsType } from './types'

import styles from './avatar.module.scss'

const Avatar: FC<AvatarPropsType> = ({
    withNotification = false,
    name,
    organization,
    avatarUrl,
}) => {
    return (
        <div className={styles.avatar__wrapper}>
            <div className={styles.avatar__container}>
                <img src={avatarUrl} className={styles.avatar__image} />
                {withNotification && (
                    <img
                        src={notificationIcon}
                        className={styles.avatar__notification}
                        alt="x"
                    />
                )}
            </div>
            <div className={styles.name__wrapper}>
                <span>{organization}</span>
                <span className={styles.name}>{name}</span>
            </div>
        </div>
    )
}

export default Avatar
