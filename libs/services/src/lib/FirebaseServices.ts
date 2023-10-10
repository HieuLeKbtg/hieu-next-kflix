import { db } from '@libs/registries'
import { onValue, push, ref, set, Unsubscribe } from 'firebase/database'

type GetFieldParams<T> = {
    path: string
    callback: (values: T) => void
}

type PostFieldParams<T> = {
    path: string
    data: T
    callback?: () => void
}

class FirebaseServices {
    private databaseRef = ref(db)

    public async getAll<T>(callback: (value: T) => void): Promise<Unsubscribe> {
        return onValue(
            this.databaseRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    callback(snapshot.val())
                }
            },
            // read data from cache, load only one time
            // if you would like to get once without listening new updates from firebase, we can use get() method
            {
                onlyOnce: true
            }
        )
    }

    public getFieldData<T>(params: GetFieldParams<T>) {
        const { path, callback } = params

        const fieldRef = ref(db, path)
        onValue(fieldRef, (snapshot) => {
            if (snapshot.exists()) {
                callback(snapshot.val())
            }
        })
    }

    public async addFieldData<T>(params: PostFieldParams<T>) {
        const { path, data, callback } = params
        const fieldRef = ref(db, path)
        const newRef = push(fieldRef)
        set(newRef, data)
            .then(() => {
                // Data saved successfully!
                // Do something here if needed!!
                if (callback) {
                    callback()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const firebaseServices: FirebaseServices = new FirebaseServices()
