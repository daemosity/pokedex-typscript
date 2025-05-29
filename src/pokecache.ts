export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(number: number) {
        this.#interval = number;
        this.#startReapLoop();
    };

    add<T>(key: string, val: T) {
        const cacheObj = {
            createdAt: Date.now(),
            val: val
        };

        this.#cache.set(key, cacheObj);
    };

    get<T>(key:string): T | undefined {
        const cacheObj = this.#cache.get(key);
        return cacheObj?.val;
    };

    async stopReapLoop() {
        await clearInterval(this.#reapIntervalId);
    };

    async #reap() {
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < Date.now() - this.#interval) {
                await this.#cache.delete(key)
            }
        }
    };

    async #startReapLoop() {
        const id = await setInterval(() => this.#reap(), this.#interval)
        this.#reapIntervalId = id;
    };
};