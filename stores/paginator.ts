import { defineStore } from "pinia";

export interface PaginatorState {
    active: string;
    sections: string[];
};

export const usePaginatorStore = defineStore("paginator", {
    state: (): PaginatorState => {
        return {
            active: "about",
            sections: ["about", "skills", "projects", "articles", "contact"]
        };
    },
    actions: {
        updatePaginator(section: string) {
            this.active = section;
        }
    }
})
