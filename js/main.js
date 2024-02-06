const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      emailsNumber: 10,
      emails: [],
    };
  },
  methods: {
    generateMails() {
      for (i = 0; i < this.emailsNumber; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((callResult) => {
            this.emails.push(callResult.data.response);
          });
      }
      console.log(this.emails);
    },
  },
  created() {
    this.generateMails();
  },
});

app.mount("#root");
