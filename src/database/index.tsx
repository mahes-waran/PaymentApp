import Realm from 'realm';
import { CardInfo } from './allSchemas';

export const databaseOptions = {
    path: 'PaymentApp.realm',
    schema: [CardInfo],
    schemaVersion: 1,
};

// Insert and create object into realm
export const insertNewRealmObject = <T extends Realm.Object>(newObj: T, realmObj: string): Promise<T> => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then((realm) => {
                try {
                    realm.write(() => {
                        realm.create(realmObj, newObj);
                        resolve(newObj);
                    });
                } catch (error) {
                    console.warn(error)
                    reject(error);
                }
            })
            .catch((error) => reject(error));
    });
};


// Update  data from realm  based on id
interface Value {
    id: number;
    name: string;
}

export const updateRealmObject = (value: Value, realmObj: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then((realm) => {
                try {
                    realm.write(() => {
                        let updatingObj = realm.objectForPrimaryKey(realmObj, value.id);
                        if (updatingObj) {
                            updatingObj.name = value.name;
                            resolve();
                        } else {
                            reject(new Error('Object not found'));
                        }
                    });
                } catch (error) {
                    reject(error);
                }
            })
            .catch((error) => reject(error));
    });
};


// Delete  data from realm  based on id
export const deleteRealmObject = (Id: number, realmObj: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then((realm) => {
                try {
                    realm.write(() => {
                        let deletingObj = realm.objectForPrimaryKey(realmObj, Id);
                        if (deletingObj) {
                            realm.delete(deletingObj);
                            resolve();
                        } else {
                            reject(new Error('Object not found'));
                        }
                    });
                } catch (error) {
                    reject(error);
                }
            })
            .catch((error) => reject(error));
    });
};


// Delete  all object data from realm
export const deleteAllRealmObject = (realmObj: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then((realm) => {
                try {
                    realm.write(() => {
                        let allObj = realm.objects(realmObj);
                        realm.delete(allObj);
                        resolve();
                    });
                } catch (error) {
                    reject(error);
                }
            })
            .catch((error) => reject(error));
    });
};

// Retrive data from realm
export const queryAllRealmObject = <T extends Realm.Object>(realmObj: string): Promise<Realm.Results<T>> => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions)
            .then((realm) => {
                try {
                    const allData: any = realm.objects<T>(realmObj);
                    resolve(allData);
                } catch (error) {
                    reject(error);
                }
            })
            .catch((error) => reject(error));
    });
};


export default new Realm(databaseOptions);    