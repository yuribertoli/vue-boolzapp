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
                    setting: false,
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    setting: false,
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    setting: false,
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
                    setting: false,
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    setting: false,
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    setting: false,
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
                    setting: false,
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    setting: false,
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    setting: false,
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
                    setting: false,
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    setting: false,
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

            //Se rimane solo un oggetto vuoto (usato per il metodo deleteMessage), lo elimino prima di aggiungere altri oggetti
            if (this.contacts[this.attivo].messages[0].date == "") {
                this.contacts[this.attivo].messages.splice(0, 1);
            }

            if (this.input != "") { //evito di aggiungere valori vuoti

                //creo una variabile dove inserisco un oggetto con frase i valori della variabile input, data e status (quindi anche classe, visto che hanno lo stesso nome)
                let oggetto = {setting: false, date: '10/01/2020 15:30:55', text: this.input, status: 'sent'};

                //aggiungo all'array l'oggetto creato, tenendo conto dell'indice dell'avatar corrente
                this.contacts[this.attivo].messages.push(oggetto);

                //resetto il valore
                this.input = "";

                //rendo visibile il this dentro setTimeout
                let that = this;

                //Dopo 1 secondo creo un oggetto dentro messages per avere una risposta automatica all'utente
                setTimeout(function() {

                    let risposta = {setting: false, date: '10/01/2020 15:30:56', text: 'ok', status: 'received'};

                    that.contacts[that.attivo].messages.push(risposta);

                }, 1000);

            }       
        },

        //funzione per aprire il sottomenu di ogni "li" tag nei messaggi del main
        showSettings(indice) {
            this.contacts[this.attivo].messages[indice].setting = !this.contacts[this.attivo].messages[indice].setting;
        },

        //prendo il contenuto di data e lo aggiungo ad una frase che mostro in un alert
        showData(indice){
            let pippo = this.contacts[this.attivo].messages[indice].date;
            let frase = `Il messaggio è stato scritto il ${pippo}`;
            return alert(frase);
        },

        //elimino l'oggetto selezionato dentro l'array messages
        deleteMessage(indice){

            this.contacts[this.attivo].messages.splice(indice, 1);

            //Se elimino l'ultimo messaggio lascio un oggetto per non interferire con gli altri methods
            if (this.contacts[this.attivo].messages.length == 0) {

                let oggetto = {setting: false, date: '', text: "Chat vuota!", status: 'empty'};
                this.contacts[this.attivo].messages.push(oggetto);
            }
        }
    },
});