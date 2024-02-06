## Esercizio di oggi: Vue Email List

nome repo: vue-email-list

# Descrizione

Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
https://flynn.boolean.careers/exercises/api/random/mail

# Bonus

Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## SVOLGIMENTO

- Inizializzata l'app con Vue
- Richiamo l'API fornita in un ciclo che ripetera n volte
- La mail volta per volta la aggiungo ad un Array dichiarato globalmente
- Stampo l'Array per ogni elemento della sua lunghezza ma lo mostro solo quando ha raggiunto la capienza massima della sua lunghezza
