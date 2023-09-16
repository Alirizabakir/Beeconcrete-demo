import {ref} from "vue";
import {defineStore} from "pinia";

export interface BreadCrumbs {
    name: string;
}

export const useGlobalStore = defineStore("global", () => {
    const breadCrumbs = ref<string>('');

    function setBreadCrumbs(title: string) {
        breadCrumbs.value = title;
    }

    return {
        breadCrumbs,
        setBreadCrumbs,
    };
});
