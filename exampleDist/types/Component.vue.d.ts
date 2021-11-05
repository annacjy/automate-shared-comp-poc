import Vue from 'vue';
import { OnNavigation } from './types/events';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    availableFrom: string;
    availableTo: string;
    text: string;
}, {
    onNavigation(value: OnNavigation): void;
    handleSetText(text: string): void;
    handleClearText(): void;
    handleSetDateRanges({ from, to }: {
        from: string;
        to: string;
    }): void;
    handleSearch(): void;
    trackAutocomplete({ id, type }: OnNavigation): void;
    trackSearchButtonClick(): void;
    trackEnterKeypress(): void;
}, {
    activeText: string;
    activeFilters: any;
    autoCompleteValue: any;
    trans: any;
    deviceFormat: any;
    theme: any;
}, {
    withCalendar: boolean;
    withButton: boolean;
    eventName: string;
}>;
export default _default;