import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import notificationIcon from '~/assets/notification.svg'

import { Avatar } from '~/components/Avatar'

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

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown__container}>
                <Avatar
                    name={name}
                    avatarUrl={avatarUrl}
                    organization={organization}
                    withNotification
                />
            </div>
            <div className={styles.dropdown__content}>
                <Avatar
                    name={name}
                    avatarUrl={avatarUrl}
                    organization={organization}
                    withNotification
                />

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

                <Avatar
                    name={name}
                    avatarUrl={avatarUrl}
                    organization={organization}
                />

                <Avatar
                    name={name}
                    avatarUrl={avatarUrl}
                    organization={organization}
                />
            </div>
        </div>
    )
})

export default Dropdown
