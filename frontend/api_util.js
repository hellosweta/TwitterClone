const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      type: 'POST',
      dataType: 'json',
      data: {
        'user_id': id
      }

    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      type: 'DELETE',
      dataType: 'json',
      data: {
        'user_id': id
      }
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax({
      url: '/users/search',
      type: 'GET',
      dataType: 'json',
      data: {
        'query': queryVal
      },
      success: success
    });
  }
};

module.exports = APIUtil;
