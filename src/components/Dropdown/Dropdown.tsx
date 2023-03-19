import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import { format, formatRelative } from 'date-fns'
import { ru } from 'date-fns/locale'

import notificationIcon from '~/assets/notification.svg'

import styles from './dropdown.module.scss'

import { DropdownPropsType } from './types'

const Dropdown: FC<DropdownPropsType> = observer(({ menuStore }) => {
    const {
        name,
        organization,
        avatarUrl,
        activePlan,
        activeOrders,
        responses,
        incomingOrders,
        alerts,
    } = menuStore.data

    const hasAlerts = !!alerts.electronicSignatures

    const getAvatarNode = (withNotification = false) => (
        <div className={styles.userWrapper}>
            <div className={styles.avatar__container}>
                <img src={avatarUrl} className={styles.avatar} />
                {withNotification && (
                    <img
                        src={notificationIcon}
                        className={styles.avatar__notification}
                        alt="x"
                    />
                )}
            </div>
            <div className={styles.wrapper}>
                <span className={styles.orgName}>{organization}</span>
                <span className={styles.name}>{name}</span>
            </div>
        </div>
    )

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown__container}>
                {getAvatarNode(hasAlerts)}
            </div>
            <div className={styles.dropdown__content}>
                {getAvatarNode(hasAlerts)}

                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={styles.listItem__content}>
                            <div className={styles.activePlan}>
                                <span>{activePlan.name}</span>
                                <span className={styles.activePlan__ends}>
                                    {`Активен до ${format(
                                        new Date(activePlan.expires * 1000),
                                        'd MMMM',
                                        { locale: ru }
                                    )}`}
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listItem__content}>
                            <span>Мои заказы</span>
                            {activeOrders}
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listItem__content}>
                            <span>Исходящие отклики</span>
                            {responses}
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listItem__content}>
                            <span>Входящие заказы</span>
                            <div>
                                {incomingOrders.all}
                                <span className={styles.listItem__dot}>
                                    <span className={styles.listItem__dotInner}>
                                        +{incomingOrders.new}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listItem__content}>Кабинет</div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listItem__content}>
                            <span>Электронные подписи</span>
                            {hasAlerts && (
                                <img src={notificationIcon} alt="x" />
                            )}
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listItem__content}>Выход</div>
                    </li>
                </ul>
                <div className={styles.divider} />
                {getAvatarNode()}
                {getAvatarNode()}
            </div>
        </div>
    )
})

export default Dropdown
