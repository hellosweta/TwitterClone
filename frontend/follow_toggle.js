const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = (this.$el.data("user-id") || options.userId);
    this.followState = (this.$el.data("initial-follow-state") || options.followState);
    this.render();
    this.handleClick();
  }

  render() {
    let buttonText = "";
    if (this.followState === "followed") {
      buttonText = "Unfollow!";
    } else {
      buttonText = "Follow!";
    }
    this.$el.prop("disabled", false);

    this.$el.html(buttonText);
  }

  handleClick() {
    this.$el.on("click", event => {
      event.preventDefault();
      const $currentTarget = $(event.currentTarget);
      this.$el.prop("disabled", true);

      if (this.followState === "followed" ){
        APIUtil.unfollowUser(this.userId)
                .then(this.toggleFollows.bind(this))
                .then(this.render.bind(this));
      } else {
        APIUtil.followUser(this.userId)
                .then(this.toggleFollows.bind(this))
                .then(this.render.bind(this));
      }
    });
  }

  toggleFollows(){
      if (this.followState === "followed") {
        this.followState = "unfollowed";
      } else {
          this.followState = "followed";
      }
    }
}


module.exports = FollowToggle;
