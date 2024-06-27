const { createApp } = Vue;

createApp({

    data() {
        return {
            // data
            emails : [],


        };
    },
    methods: {
        // functions
        generateTenEmails(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((axiosEmail)=>{
                        let result = axiosEmail.data.response;
                        this.emails.push(result);
                    
                })
            }
    

            }
    },
    mounted(){
        this.generateTenEmails();
        console.log(this.emails);
        
        
        
    }
}).mount('#app');



// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.