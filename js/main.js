const { createApp } = Vue;

createApp({

    data() {
        return {
            // data
            email : '',


        };
    },
    methods: {
        // functions
        generateTenEmails(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((axiosEmail)=>{
                        const result = axiosEmail.data.response;
                        console.log(result);
                    
                })
            }
    

            }
    },
    mounted(){
        // mounted
        this.generateTenEmails()
        
        
    }
}).mount('#app');



// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.