const filters = {
    toDate: (value) => {
        const date = new Date(value);
        return new Intl.DateTimeFormat('default', { dateStyle: 'short' }).format(date);
    }
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            filters: filters
        }
    }
});
