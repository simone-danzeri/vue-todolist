/* Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del modo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */
const { createApp } = Vue;

createApp({
    data() {
        return {
            newText: "",
            tasks: [
                {
                    text: 'Pulire la casa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: true
                },
                {
                    text: 'Buttare la spazzatura',
                    done: false
                },
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Cambiare la lampadina',
                    done: false
                },
            ]
        };
    },
    methods : {
        removeItem(index) {
            this.tasks.splice(index,1);
        },
        addItem() {
            this.tasks.push({
                text: this.newText,
                done: false
            });
            this.newText = "";
/*             Qui una versione alternativa che ho migliorato con la versione non commentata
            this.tasks[this.tasks.length - 1].text = this.newText;
            this.tasks[this.tasks.length - 1].done = false; */
        }
    }
}).mount('#app');