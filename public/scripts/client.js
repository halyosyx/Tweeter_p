/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1473245023718
  }
]

  const renderTweets = function(tweets){

    for (const tweet of tweets) {
      console.log(tweet);
      $('#tweets-container').append(createTweetElement(tweet));
    }

  }
  
  const createTweetElement = function(tweetData){
    const name = tweetData.user.name;
    const handle = tweetData.user.handle;
    const avatar = tweetData.user.avatar;
    const tweet = tweetData.content.text;
    const timeCreated = timeago.format(tweetData.created_at);
    
    //Generate Parent elements
    const $tweetArticle = $('<article>').addClass('tweet');
    const $header = $(`<header>`);
    const $content = $('<div>').addClass('content');
    const $footer = $(`<footer>`);

    //Header elements
    const $createName = $(`<span>`).addClass('name').text(name);
    const $createHandle = $('<span>').addClass('handle').text(handle);

    //BodyTweet elements
    const $createTweet = $('<div>').addClass('body').text(tweet);

    //Footer Elements
    const $generateTime = $('<span>').addClass('time').text(timeCreated);
    const $iconContainer = $('<span>').addClass('iconContainer');
    const $flag = $("<i>").addClass("fas fa-flag");
    const $retweet = $("<i>").addClass("fas fa-retweet");
    const $heart = $("<i>").addClass("fas fa-heart");

    $iconContainer.append($flag, $retweet, $heart);
    $header.append($createName, $createHandle);
    $content.append($createTweet);
    $footer.prepend($generateTime, $iconContainer);
    $tweetArticle.append($header, $content, $footer);

    return $tweetArticle
  }

  renderTweets(data);
  
}); 
