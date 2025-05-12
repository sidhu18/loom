import { getCurrencies, getLocales } from "react-native-localize";

const DEFAULT = {
    languageTag: 'en-US',
    currency: 'USD',
};

export const getUserLocaleInfo = () => {
    const locale = getLocales().find(Boolean);
    const currency = getCurrencies().find(Boolean);

    if (locale && currency) {
        return ({
            languageTag: locale.languageTag,
            currency: currency,
        })
    }
    return DEFAULT;
}
