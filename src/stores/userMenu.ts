import { action, makeAutoObservable, makeObservable, observable } from 'mobx'

interface DataType {
    name: string
    avatarUrl: string
    organization: string
    activeOrders: number
    responses: number
    activePlan: {
        name: string
        expires: number
    }
    incomingOrders: {
        all: number
        new: number
    }
    alerts: {
        electronicSignatures: boolean
    }
}

export class UserMenu {
    data: DataType = {
        name: '',
        avatarUrl: '',
        organization: '',
        activeOrders: 0,
        responses: 0,
        activePlan: {
            name: '',
            expires: 0,
        },
        incomingOrders: {
            all: 0,
            new: 0,
        },
        alerts: {
            electronicSignatures: false,
        },
    }

    constructor() {
        makeAutoObservable(this)
    }

    @action
    getMenuData() {
        fetch('../userMenuData.json')
            .then((res) => res.json())
            .then((data) => {
                this.data = data
            })
    }
}

const UserMenuStore = new UserMenu()

export default UserMenuStore
