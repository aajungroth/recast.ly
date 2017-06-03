"use strict";

var App = function App() {
  return React.createElement("div", null, React.createElement(Nav, null), React.createElement("div", { className: "col-md-7" }, React.createElement(VideoPlayer, null)), React.createElement("div", { className: "col-md-5" }, React.createElement(VideoList, null)));
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
"use strict";

var Nav = function Nav() {
  return React.createElement("nav", { className: "navbar" }, React.createElement("div", { className: "col-md-6 col-md-offset-3" }, React.createElement(Search, null)));
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
"use strict";

var Search = function Search() {
  return React.createElement("div", { className: "search-bar form-inline" }, React.createElement("input", { className: "form-control", type: "text" }), React.createElement("button", { className: "btn hidden-sm-down" }, React.createElement("span", { className: "glyphicon glyphicon-search" })));
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
"use strict";

var VideoList = function VideoList() {
  return React.createElement("div", { className: "video-list media" }, React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null));
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
"use strict";

var VideoListEntry = function VideoListEntry() {
  return React.createElement("div", { className: "video-list-entry" }, React.createElement("div", { className: "media-left media-middle" }, React.createElement("img", { className: "media-object", src: "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg", alt: "" })), React.createElement("div", { className: "media-body" }, React.createElement("div", { className: "video-list-entry-title" }, "Video Title"), React.createElement("div", { className: "video-list-entry-detail" }, "Video Description")));
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
"use strict";

var VideoPlayer = function VideoPlayer() {
  return React.createElement("div", { className: "video-player" }, React.createElement("div", { className: "embed-responsive embed-responsive-16by9" }, React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", allowFullScreen: true })), React.createElement("div", { className: "video-player-details" }, React.createElement("h3", null, "Video Title"), React.createElement("div", null, "Video Description")));
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
'use strict';

// Put your YouTube API keys here!

window.YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';
'use strict';

// DO NOT EDIT THIS FILE
// This is an example response from the YouTube Search API
// when searching with the query 'react tutorial'

window.exampleVideoData = [{
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
  id: {
    kind: 'youtube#video',
    videoId: '4ZAEBxGipoA'
  },
  snippet: {
    publishedAt: '2015-08-02T20:52:58.000Z',
    channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
    title: 'React JS Tutorial for Beginners - 1 - Introduction',
    description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'thenewboston',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/tS3xe6KXEJbntCAmn01SmEuSYxg',
  id: {
    kind: 'youtube#video',
    videoId: 'mFEoarLnnqM'
  },
  snippet: {
    publishedAt: '2014-08-08T21:31:58.000Z',
    channelId: 'UCKKQaFUwyPb6iC-42rFRz2Q',
    title: 'Thinking in React, a step by step screencast tutorial',
    description: 'A step by step video tutorial that takes you through the correct way of coding Facebook React views. Check out the rest of the tagtree library: http://tagtree.tv.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/FZYrgJg7qfkv0yfImJPujBKBmLk',
  id: {
    kind: 'youtube#video',
    videoId: '0ByoQm-vnYw'
  },
  snippet: {
    publishedAt: '2015-12-08T20:51:18.000Z',
    channelId: 'UClLXKYEEM8OBBx85DOa6-cg',
    title: 'React Tutorial for Beginners',
    description: 'Get the full course here: http://devslopes.com/react In this video you will learn how to setup your project for React development and you will build a simple React ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/nSaavPWVkTWpn2p-ClwNj7xszf8',
  id: {
    kind: 'youtube#video',
    videoId: 'o5E894TmHJg'
  },
  snippet: {
    publishedAt: '2015-03-09T08:19:59.000Z',
    channelId: 'UCMYct3vtNaMwZAA3_DNsWMw',
    title: 'Flux Tutorial - Writing a Simple App in Flux and React',
    description: 'Hey! Write something in the comments, even if it\'s critical. I\'d love to hear feedback! (also, please thumbs-up if you like the vid, and I\'ll make more). Personally I ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'bengrunfeld',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/3E7u1VZ18KYyfLIA6RgI2w-7nRI',
  id: {
    kind: 'youtube#video',
    videoId: 'Pd6Ub7Ju2RM'
  },
  snippet: {
    publishedAt: '2015-02-13T18:50:38.000Z',
    channelId: 'UCr5lOCcjZzNprLrhxO0WZQw',
    title: 'Learn React, Flux, and Flow: Part I',
    description: 'Brought to you by Formidable Labs and SeattleJS, Colin Megill walks us through Facebook\'s React framework in part one of this three-part series. The workshop ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}];
// TODO: Render the `App` component to the DOM
"use strict";
"use strict";

var searchYouTube = function searchYouTube(options, callback) {
  // TODO
};

window.searchYouTube = searchYouTube;
// Put your YouTube API keys here!
window.YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';
// DO NOT EDIT THIS FILE
// This is an example response from the YouTube Search API
// when searching with the query 'react tutorial'
window.exampleVideoData = [{
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
  id: {
    kind: 'youtube#video',
    videoId: '4ZAEBxGipoA'
  },
  snippet: {
    publishedAt: '2015-08-02T20:52:58.000Z',
    channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
    title: 'React JS Tutorial for Beginners - 1 - Introduction',
    description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'thenewboston',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/tS3xe6KXEJbntCAmn01SmEuSYxg',
  id: {
    kind: 'youtube#video',
    videoId: 'mFEoarLnnqM'
  },
  snippet: {
    publishedAt: '2014-08-08T21:31:58.000Z',
    channelId: 'UCKKQaFUwyPb6iC-42rFRz2Q',
    title: 'Thinking in React, a step by step screencast tutorial',
    description: 'A step by step video tutorial that takes you through the correct way of coding Facebook React views. Check out the rest of the tagtree library: http://tagtree.tv.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/FZYrgJg7qfkv0yfImJPujBKBmLk',
  id: {
    kind: 'youtube#video',
    videoId: '0ByoQm-vnYw'
  },
  snippet: {
    publishedAt: '2015-12-08T20:51:18.000Z',
    channelId: 'UClLXKYEEM8OBBx85DOa6-cg',
    title: 'React Tutorial for Beginners',
    description: 'Get the full course here: http://devslopes.com/react In this video you will learn how to setup your project for React development and you will build a simple React ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/nSaavPWVkTWpn2p-ClwNj7xszf8',
  id: {
    kind: 'youtube#video',
    videoId: 'o5E894TmHJg'
  },
  snippet: {
    publishedAt: '2015-03-09T08:19:59.000Z',
    channelId: 'UCMYct3vtNaMwZAA3_DNsWMw',
    title: 'Flux Tutorial - Writing a Simple App in Flux and React',
    description: 'Hey! Write something in the comments, even if it\'s critical. I\'d love to hear feedback! (also, please thumbs-up if you like the vid, and I\'ll make more). Personally I ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'bengrunfeld',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/3E7u1VZ18KYyfLIA6RgI2w-7nRI',
  id: {
    kind: 'youtube#video',
    videoId: 'Pd6Ub7Ju2RM'
  },
  snippet: {
    publishedAt: '2015-02-13T18:50:38.000Z',
    channelId: 'UCr5lOCcjZzNprLrhxO0WZQw',
    title: 'Learn React, Flux, and Flow: Part I',
    description: 'Brought to you by Formidable Labs and SeattleJS, Colin Megill walks us through Facebook\'s React framework in part one of this three-part series. The workshop ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}];
var A = function () {
  return 'apple';
};
var searchYouTube = (options, callback) => {
  // TODO
};

window.searchYouTube = searchYouTube;
"use strict";

var App = function App() {
  return React.createElement("div", null, React.createElement(Nav, null), React.createElement("div", { className: "col-md-7" }, React.createElement(VideoPlayer, null)), React.createElement("div", { className: "col-md-5" }, React.createElement(VideoList, null)));
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
"use strict";

var Nav = function Nav() {
  return React.createElement("nav", { className: "navbar" }, React.createElement("div", { className: "col-md-6 col-md-offset-3" }, React.createElement(Search, null)));
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
"use strict";

var Search = function Search() {
  return React.createElement("div", { className: "search-bar form-inline" }, React.createElement("input", { className: "form-control", type: "text" }), React.createElement("button", { className: "btn hidden-sm-down" }, React.createElement("span", { className: "glyphicon glyphicon-search" })));
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
"use strict";

var VideoList = function VideoList() {
  return React.createElement("div", { className: "video-list media" }, React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null), React.createElement(VideoListEntry, null));
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
"use strict";

var VideoListEntry = function VideoListEntry() {
  return React.createElement("div", { className: "video-list-entry" }, React.createElement("div", { className: "media-left media-middle" }, React.createElement("img", { className: "media-object", src: "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg", alt: "" })), React.createElement("div", { className: "media-body" }, React.createElement("div", { className: "video-list-entry-title" }, "Video Title"), React.createElement("div", { className: "video-list-entry-detail" }, "Video Description")));
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
"use strict";

var VideoPlayer = function VideoPlayer() {
  return React.createElement("div", { className: "video-player" }, React.createElement("div", { className: "embed-responsive embed-responsive-16by9" }, React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", allowFullScreen: true })), React.createElement("div", { className: "video-player-details" }, React.createElement("h3", null, "Video Title"), React.createElement("div", null, "Video Description")));
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
'use strict';

// Put your YouTube API keys here!

window.YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';
'use strict';

// DO NOT EDIT THIS FILE
// This is an example response from the YouTube Search API
// when searching with the query 'react tutorial'

window.exampleVideoData = [{
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
  id: {
    kind: 'youtube#video',
    videoId: '4ZAEBxGipoA'
  },
  snippet: {
    publishedAt: '2015-08-02T20:52:58.000Z',
    channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
    title: 'React JS Tutorial for Beginners - 1 - Introduction',
    description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'thenewboston',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/tS3xe6KXEJbntCAmn01SmEuSYxg',
  id: {
    kind: 'youtube#video',
    videoId: 'mFEoarLnnqM'
  },
  snippet: {
    publishedAt: '2014-08-08T21:31:58.000Z',
    channelId: 'UCKKQaFUwyPb6iC-42rFRz2Q',
    title: 'Thinking in React, a step by step screencast tutorial',
    description: 'A step by step video tutorial that takes you through the correct way of coding Facebook React views. Check out the rest of the tagtree library: http://tagtree.tv.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/FZYrgJg7qfkv0yfImJPujBKBmLk',
  id: {
    kind: 'youtube#video',
    videoId: '0ByoQm-vnYw'
  },
  snippet: {
    publishedAt: '2015-12-08T20:51:18.000Z',
    channelId: 'UClLXKYEEM8OBBx85DOa6-cg',
    title: 'React Tutorial for Beginners',
    description: 'Get the full course here: http://devslopes.com/react In this video you will learn how to setup your project for React development and you will build a simple React ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/nSaavPWVkTWpn2p-ClwNj7xszf8',
  id: {
    kind: 'youtube#video',
    videoId: 'o5E894TmHJg'
  },
  snippet: {
    publishedAt: '2015-03-09T08:19:59.000Z',
    channelId: 'UCMYct3vtNaMwZAA3_DNsWMw',
    title: 'Flux Tutorial - Writing a Simple App in Flux and React',
    description: 'Hey! Write something in the comments, even if it\'s critical. I\'d love to hear feedback! (also, please thumbs-up if you like the vid, and I\'ll make more). Personally I ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'bengrunfeld',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/3E7u1VZ18KYyfLIA6RgI2w-7nRI',
  id: {
    kind: 'youtube#video',
    videoId: 'Pd6Ub7Ju2RM'
  },
  snippet: {
    publishedAt: '2015-02-13T18:50:38.000Z',
    channelId: 'UCr5lOCcjZzNprLrhxO0WZQw',
    title: 'Learn React, Flux, and Flow: Part I',
    description: 'Brought to you by Formidable Labs and SeattleJS, Colin Megill walks us through Facebook\'s React framework in part one of this three-part series. The workshop ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}];
// TODO: Render the `App` component to the DOM
"use strict";
"use strict";

var searchYouTube = function searchYouTube(options, callback) {
  // TODO
};

window.searchYouTube = searchYouTube;
// Put your YouTube API keys here!
window.YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';
// DO NOT EDIT THIS FILE
// This is an example response from the YouTube Search API
// when searching with the query 'react tutorial'
window.exampleVideoData = [{
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
  id: {
    kind: 'youtube#video',
    videoId: '4ZAEBxGipoA'
  },
  snippet: {
    publishedAt: '2015-08-02T20:52:58.000Z',
    channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
    title: 'React JS Tutorial for Beginners - 1 - Introduction',
    description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'thenewboston',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/tS3xe6KXEJbntCAmn01SmEuSYxg',
  id: {
    kind: 'youtube#video',
    videoId: 'mFEoarLnnqM'
  },
  snippet: {
    publishedAt: '2014-08-08T21:31:58.000Z',
    channelId: 'UCKKQaFUwyPb6iC-42rFRz2Q',
    title: 'Thinking in React, a step by step screencast tutorial',
    description: 'A step by step video tutorial that takes you through the correct way of coding Facebook React views. Check out the rest of the tagtree library: http://tagtree.tv.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/FZYrgJg7qfkv0yfImJPujBKBmLk',
  id: {
    kind: 'youtube#video',
    videoId: '0ByoQm-vnYw'
  },
  snippet: {
    publishedAt: '2015-12-08T20:51:18.000Z',
    channelId: 'UClLXKYEEM8OBBx85DOa6-cg',
    title: 'React Tutorial for Beginners',
    description: 'Get the full course here: http://devslopes.com/react In this video you will learn how to setup your project for React development and you will build a simple React ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/nSaavPWVkTWpn2p-ClwNj7xszf8',
  id: {
    kind: 'youtube#video',
    videoId: 'o5E894TmHJg'
  },
  snippet: {
    publishedAt: '2015-03-09T08:19:59.000Z',
    channelId: 'UCMYct3vtNaMwZAA3_DNsWMw',
    title: 'Flux Tutorial - Writing a Simple App in Flux and React',
    description: 'Hey! Write something in the comments, even if it\'s critical. I\'d love to hear feedback! (also, please thumbs-up if you like the vid, and I\'ll make more). Personally I ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'bengrunfeld',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/3E7u1VZ18KYyfLIA6RgI2w-7nRI',
  id: {
    kind: 'youtube#video',
    videoId: 'Pd6Ub7Ju2RM'
  },
  snippet: {
    publishedAt: '2015-02-13T18:50:38.000Z',
    channelId: 'UCr5lOCcjZzNprLrhxO0WZQw',
    title: 'Learn React, Flux, and Flow: Part I',
    description: 'Brought to you by Formidable Labs and SeattleJS, Colin Megill walks us through Facebook\'s React framework in part one of this three-part series. The workshop ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}];
// TODO: Render the `App` component to the DOM
var searchYouTube = (options, callback) => {
  // TODO
};

window.searchYouTube = searchYouTube;
// Put your YouTube API keys here!
window.YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';
// DO NOT EDIT THIS FILE
// This is an example response from the YouTube Search API
// when searching with the query 'react tutorial'
window.exampleVideoData = [{
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
  id: {
    kind: 'youtube#video',
    videoId: '4ZAEBxGipoA'
  },
  snippet: {
    publishedAt: '2015-08-02T20:52:58.000Z',
    channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
    title: 'React JS Tutorial for Beginners - 1 - Introduction',
    description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'thenewboston',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/tS3xe6KXEJbntCAmn01SmEuSYxg',
  id: {
    kind: 'youtube#video',
    videoId: 'mFEoarLnnqM'
  },
  snippet: {
    publishedAt: '2014-08-08T21:31:58.000Z',
    channelId: 'UCKKQaFUwyPb6iC-42rFRz2Q',
    title: 'Thinking in React, a step by step screencast tutorial',
    description: 'A step by step video tutorial that takes you through the correct way of coding Facebook React views. Check out the rest of the tagtree library: http://tagtree.tv.',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/mFEoarLnnqM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/FZYrgJg7qfkv0yfImJPujBKBmLk',
  id: {
    kind: 'youtube#video',
    videoId: '0ByoQm-vnYw'
  },
  snippet: {
    publishedAt: '2015-12-08T20:51:18.000Z',
    channelId: 'UClLXKYEEM8OBBx85DOa6-cg',
    title: 'React Tutorial for Beginners',
    description: 'Get the full course here: http://devslopes.com/react In this video you will learn how to setup your project for React development and you will build a simple React ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/0ByoQm-vnYw/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/nSaavPWVkTWpn2p-ClwNj7xszf8',
  id: {
    kind: 'youtube#video',
    videoId: 'o5E894TmHJg'
  },
  snippet: {
    publishedAt: '2015-03-09T08:19:59.000Z',
    channelId: 'UCMYct3vtNaMwZAA3_DNsWMw',
    title: 'Flux Tutorial - Writing a Simple App in Flux and React',
    description: 'Hey! Write something in the comments, even if it\'s critical. I\'d love to hear feedback! (also, please thumbs-up if you like the vid, and I\'ll make more). Personally I ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/o5E894TmHJg/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'bengrunfeld',
    liveBroadcastContent: 'none'
  }
}, {
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/3E7u1VZ18KYyfLIA6RgI2w-7nRI',
  id: {
    kind: 'youtube#video',
    videoId: 'Pd6Ub7Ju2RM'
  },
  snippet: {
    publishedAt: '2015-02-13T18:50:38.000Z',
    channelId: 'UCr5lOCcjZzNprLrhxO0WZQw',
    title: 'Learn React, Flux, and Flow: Part I',
    description: 'Brought to you by Formidable Labs and SeattleJS, Colin Megill walks us through Facebook\'s React framework in part one of this three-part series. The workshop ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/Pd6Ub7Ju2RM/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
}];
// TODO: Render the `App` component to the DOM
var searchYouTube = (options, callback) => {
  // TODO
};

window.searchYouTube = searchYouTube;