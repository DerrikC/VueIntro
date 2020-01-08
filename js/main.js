import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

// set up a viewmodel and use the Vue framework

const my_vm = (() => {
    //variables, or define components... whatever

    let vue_VM = new Vue ({
        data: {
            message: "Hello from Vue!",

            collection: [
                {name: "Joe", role: "Prof"},
                {name: "Joe", role: "Prof"},
                {name: "Joe", role: "Prof"}
            ]
        },


        methods: {
            logClicked() {
                console.log('clicked on an element!');
            }
        }
    }).$mount("#app");

})();