const app = new Vue ({

    el: "#root",

    data: {

        attivo: 0,

        input: "",

        search: "",

        contacts: [

            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
            },

            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                ],
            },

            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],
            },
        ]            
    },

    methods: {

        //Aggiorno il valore di attivo al valore dell'indice corrente
        selectAvatar(index) {
            this.attivo = index;
        },
        
        //Aggiungo un oggetto all'array messagges dell'indice indicato da attivo
        add() { 
            if (this.input != "") { //evito di aggiungere valori vuoti

                //creo una variabile dove inserisco un oggetto con frase i valori della variabile input, data e status (quindi anche classe, visto che hanno lo stesso nome)
                let oggetto = {date: '10/01/2020 15:30:55', text: this.input, status: 'sent'}

                //aggiungo all'array l'oggetto creato, tenendo conto dell'indice dell'avatar corrente
                this.contacts[this.attivo].messages.push(oggetto);

                //resetto il valore
                this.input = "";

                //rendo visibile il this dentro setTimeout
                let that = this;

                //Dopo 1 secondo creo un oggetto dentro messages per avere una risposta automatica all'utente
                setTimeout(function() {

                    let risposta = {date: '10/01/2020 15:30:56', text: 'ok', status: 'received'};

                    that.contacts[that.attivo].messages.push(risposta);

                }, 1000);

            }       
        }
    },
});