import Constants from "../../../constants/Constants";

export default abstract class ApiService {
    private baseURL: string = Constants.API_BASE_URL;
    private version: string = Constants.API_VERSION;

    private cache: Map<string, any> = new Map();

    constructor(baseURL: string = Constants.API_BASE_URL) {
        this.baseURL = baseURL;
    }

    private getCacheKey(method: string, endpoint: string, body?: any): string {
        const bodyKey = body ? JSON.stringify(body) : '';
        return `${method}:${endpoint}:${bodyKey}`;
    }

    private getFromCache<T>(key: string): T | null {
        const entry = this.cache.get(key);
        if (!entry) return null;

        return entry.data;
    }

    private setToCache<T>(key: string, data: T): void {
        this.cache.set(key, data);
    }

    protected async _get<T>(endpoint: string, params: Record<string, any> = {}, useCache = true): Promise<T> {
        const uri = [this.baseURL, this.version].join('/');
        const url = new URL(uri + endpoint);
        Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

        const cacheKey = this.getCacheKey('GET', url.toString());

        if (useCache) {
            const cached = this.getFromCache<T>(cacheKey);
            if (cached) return cached;
        }

        const response = await fetch(url.toString());

        if (!response.ok) {
            throw new Error(`GET ${url.toString()} failed: ${response.status}`);
        }

        const data: T = await response.json();
        if (useCache) this.setToCache<T>(cacheKey, data);

        return data;
    }

    abstract get<T>(): Promise<T>;

    clearCache(): void {
        this.cache = new Map();
    }
}
