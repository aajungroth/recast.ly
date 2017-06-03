var VideoList = (props) => {

  //exits out of scope of JSX to ESX by utilizing return
  //for(iterate....prop.length)
  //create some feeder array of examplevideoData numbers
  //feed it in somehow...
  return (
    <div className="video-list media">
      {props.videos.map((video)=> <VideoListEntry video={video} />)}
    </div>
  );
};

//line 4 needs some sort of recursive function
//considering using prop to pass in exampleVideoData to videoList



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
