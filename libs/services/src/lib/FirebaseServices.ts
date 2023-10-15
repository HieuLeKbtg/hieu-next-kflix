import { db } from '@libs/registries'
import {
    onValue,
    push,
    ref,
    remove,
    set,
    Unsubscribe,
    update
} from 'firebase/database'

type GetFieldParams<T> = {
    path: string
    callback: (values: T) => void
}

type PostFieldParams<T> = {
    path: string
    data: T
    callback?: () => void
}

type EditFieldsParams<T> = Pick<PostFieldParams<T>, 'path' | 'callback'> & {
    data: object
}

type DeleteFieldsParams = { path: string; callback?: () => void }

/**
 * In general:
 * onValue: listen data from firebase, will be triggered when having changes
 * push: add to a list of data, everytime we push a new node to firebase, db will automatically generate a unique key
 * set: write or replace data with a defined path
 * update: edit data with a defined path
 * references: https://firebase.google.com/docs/database/admin/save-data
 */

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
            callback(snapshot.exists() ? snapshot.val() : {})
        })
    }

    public addFieldData<T>(params: PostFieldParams<T>) {
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

    public EditFieldData<T>(params: EditFieldsParams<T>) {
        const { path, data, callback } = params
        const fieldRef = ref(db, path)

        // there is another way to write codes to update if we would like to update in multiple places
        // please refer to official docs: https://firebase.google.com/docs/database/web/read-and-write#update_specific_fields
        update(fieldRef, data)
            .then(() => {
                //  updated data successfully!
                // Do something here if needed!!
                if (callback) {
                    callback()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    public DeleteFieldData(params: DeleteFieldsParams) {
        const { path, callback } = params
        const fieldRef = ref(db, path)

        remove(fieldRef)
            .then(() => {
                //  updated data successfully!
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
