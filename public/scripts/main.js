const app = new Vue({
    el: '#app',
    data: {
        expenses: [],
        link: '',
        pagina: 1,
        numero: 7,
        total_cost_expenses: 0,
        month_detail: false,
        selected_month: '',
        saves: 0,
        show_saves: false,
        write_mode: false,
        row: {
            cost: '0',
            type: 'expense',
            date: '',
            reason: ''
        },
        row_default: {},
        loading: false
    },

    mounted() {
        this.row_default = this.row;
        this.load_expenses('/expenses');
    },

    computed: {
        can_save: function() {
            return (this.row.cost != '0') && ((this.row.date.length > 0 && this.row.reason.length > 0) && this.loading == false) ? false : true;
        }
    },

    methods: {
        load_expenses(endpoint) {
            (async() => {
                const rawResponse = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const content = await rawResponse.json();
                this.expenses = content.data.expenses;
                this.total_cost_expenses = content.data.totalCost;
                this.saves = content.data.saves;
            })();

        },
        to_money(cost) {
            return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(cost)
        },
        to_date(date) {
            return new Date(date).toDateString()
        },
        open_month(id, month) {
            this.month_detail = true;
            this.selected_month = month;
            this.load_expenses(`/expenses/${id}`);
        },
        go_menu() {
            this.month_detail = false;
            this.selected_month = '';
            this.load_expenses('/expenses');
        },
        create_update() {
            this.write_mode = !this.write_mode;
        },

        reset_row() {
            this.row.cost = '0';
            this.row.type = 'expense';
            this.row.date = '';
            this.row.reason = '';
        },

        validate_form() {

        },

        save(endpoint) {
            this.loading = true;
            (async() => {
                const rawResponse = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.row)
                });
                const content = await rawResponse.json();
                const month_to_go = `${this.row.date.split('-')[1]}-${this.row.date.split('-')[0]}`;
                this.loading = false;
                alert(content.data.status == 1 ? 'Ok saved' : 'Error');
                this.reset_row();
                this.write_mode = false;
                this.open_month(month_to_go, 'month');
            })();
        }
    }
});