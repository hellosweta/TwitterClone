const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor(nav) {
    this.$nav = $(nav);
    this.$input = $('.search-bar');
    this.$ul = $('ul.users');
    this.handleInput();
  }

  handleInput() {
    this.$input.on('input', event => {
      event.preventDefault();
      let query = this.$input.val();

      APIUtil.searchUsers(query, response => {
        this.renderResults(response);
      });

    });
  }

  renderResults(response) {
    this.$ul.children().remove();
    response.forEach(user => {
      let $li = $("<li></li>");
      let button = document.createElement("BUTTON");
      // debugger;
      let followState = (user.followed ? "followed" : "unfollowed");
      let options = { userId: user.id, followState: followState };
      let followToggle = new FollowToggle(button, options);
      let $a = $(`<a href="/users/${user.id}">${user.username}</a>`);
      $li.append($a);
      $li.append(button);
      this.$ul.append($li);

    });
  }
}


module.exports = UsersSearch;
