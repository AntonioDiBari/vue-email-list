const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      emailsNumber: 3,
      emails: [],
    };
  },
  methods: {
    /**
     * Genera le mail in base ad un numero ben definito, le aggiunge ad un array
     */
    generateMails() {
      for (i = 0; i < this.emailsNumber; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((callResult) => {
            this.emails.push(callResult.data.response);
          });
      }
      console.log(this.emails);
      // this.emailsNumber = this.emails.length;
    },
    emptyMailsArray() {
      this.emails = [];
    },
  },
  created() {},
});

app.mount("#root");
