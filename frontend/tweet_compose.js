class TweetCompose {
  constructor() {
    this.$form = $(".tweet-compose");
    this.$form.on("submit", (event) => this.submit);
  }

  submit(event) {
    event.preventDefault();
    this.$form.serializeJSON();
  }
}
