const app = new Vue({
    el: '#app',
    data: {
        expenses: [],
        link: '',
        pagina: 1,
        numero: 7,
        total_cost_expenses: 0,
        month_detail: false,
        selected_month: ''
    },
    mounted: () => {
        (async() => {
            const rawResponse = await fetch('/expenses', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const content = await rawResponse.json();
            app.expenses = content.data;
            app.total_cost_expenses = app.expenses.reduce((acc, obj) => { return acc + obj.cost; }, 0).toFixed(0)
            app.total_cost_expenses = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(app.total_cost_expenses)
        })();
    },

    methods: {
        open_month(id) {
            this.month_detail = true;
            this.selected_month = id;
            (async() => {
                const rawResponse = await fetch('/expenses/2020-01  ', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const content = await rawResponse.json();
            })();
        }
    }
});