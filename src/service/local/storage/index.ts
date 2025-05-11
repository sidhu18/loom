import { AppSettingsSchema } from "./schema/app.settings.schema";
import { Storage } from "./storage";

const APP_SETTINGS_STORAGE_KEY = 'loom-app-store';
const USER_SETTINGS_STORAGE_KEY = 'user-store';
const DEFAULT_USER_KEY = 'guest';

const getUserStorageKey = (userId: string) => `${userId}-${USER_SETTINGS_STORAGE_KEY}`;

/**
 * Key value store for App settings
 */
export const appSettings = new Storage<AppSettingsSchema>({ id: APP_SETTINGS_STORAGE_KEY });

const currentUserId = appSettings.get('currentLoggedUserId') ?? DEFAULT_USER_KEY;
const userStorageKey = getUserStorageKey(currentUserId);

/**
 * Key value store for User settings
 */
export const userSettings = new Storage({ id: userStorageKey });
