class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
      // videos: [],
      // currentVideo : null
    };

  }

  componentDidMount() {
    this.getYouTubeVideos('Tom');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos)=> {
      this.setState({
        videos: this.videos,
        currentVideo: this.videos[0]
      });
    });
  }

  handleClickFunction(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav handleChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos}
            handleClickFunction={this.handleClickFunction.bind(this)}
          />
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


