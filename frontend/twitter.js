const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
  const $followToggleButtons = $('.follow-toggle');
  $followToggleButtons.each((index, button) => {
    new FollowToggle(button);
  });

  const $userSearches = $('.users-search');
  $userSearches.each((index, nav) => {
    new UsersSearch(nav);
  });
});
