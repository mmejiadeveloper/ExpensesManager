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
        edit(id) {
            location.href = 'create?e=' + id;
        },
        buscar() {
            const link = this.link;
            (async() => {
                const rawResponse = await fetch('filter', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        link
                    })
                });
                const content = await rawResponse.json();
                app.opciones = content.data;
            })();
        },
        optionState(arg) {
            let style = '';
            switch (arg) {
                case 1:
                    style = 'cDis';
                    break;
                case 3:
                    style = 'cPed';
                    break;
                case 5:
                    style = 'cNoDis';
                    break;
            }
            return style;
        },
        borrarYRebuscar() {
            this.link = '';
            this.buscar();
        },
        redondear_numero(num, precision) {
            precision = Math.pow(10, precision);
            return Math.ceil(num * precision) / precision;
        },

        open_month(id) {
            this.month_detail = true;
            this.selected_month = id;
            (async() => {
                const rawResponse = await fetch('/expenses/2020-01', {
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