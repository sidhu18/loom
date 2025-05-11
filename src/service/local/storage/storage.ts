
import { MMKV } from 'react-native-mmkv'

export class Storage<Schema> {
  protected store: MMKV

  constructor({id}: {id: string}) {
    this.store = new MMKV({id})
  }

  /**
   * Store a value in storage based on keys
   *
   *   `set(key, value)`
   */
  set<Key extends keyof Schema>(
    key:  Key,
    data: Schema[Key],
  ): void {
    this.store.set(key as string, JSON.stringify({data}));
  }

  /**
   * Get a value from storage based on key
   *
   *   `get(key)`
   */
  get<Key extends keyof Schema>(
    key: Key,
  ): Schema[Key] | undefined {
    const res = this.store.getString(key as string)
    if (!res) return undefined
    return JSON.parse(res).data;
  }

  /**
   * Remove a value from storage based on key
   *
   *   `remove(key)`
   */
  remove<Key extends keyof Schema>(key: Key) {
    this.store.delete(key as string)
  }

  /**
   * Remove many values from the same storage by keys
   *
   *   `removeMany([key])`
   */
  removeMany<Key extends keyof Schema>(keys: Key[]) {
    keys.forEach(key => this.remove(key))
  }

  /**
   * Fires a callback when the storage associated with a given key changes
   *
   * @returns Listener - call `remove()` to stop listening
   */
  addOnValueChangedListener<Key extends keyof Schema>(
    key: Key,
    callback: () => void,
  ) {
    return this.store.addOnValueChangedListener(keyValue => {
      if (keyValue === key) {
        callback()
      }
    })
  }
}