import React from "react";

const styles = {
  container: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 3
  },
  button: {
    width: 40,
    height: 40,
    color: "white"
  },
  centerLeft: {
    top: "50%",
    left: -15,
    marginTop: -30,
    position: "absolute"
  },
  centerRight: {
    top: "50%",
    marginTop: -30,
    right: -15,
    position: "absolute"
  },
  hidden: {
    display: "none"
  }
};

var ArrowBackward = "https://img.icons8.com/metro/2x/back.png";
var ArrowForward = "https://img.icons8.com/metro/2x/forward.png";

// Component for left arrow
class CarouselLeftArrow extends React.Component {
  render() {
    return (
      <div className="col leftButton">
        <button
          onClick={this.props.onClick}
          style={{
            "background-color": "white",
            border: "1px solid grey",
            "border-radius": "15px",
            cursor: "pointer"
          }}
        >
          <img class="arrowImg" alt="arrow_backward" src={ArrowBackward} />
        </button>
      </div>
    );
  }
}

// Component for right arrow
class CarouselRightArrow extends React.Component {
  render() {
    return (
      <div className="col rightButton">
        <button
          onClick={this.props.onClick}
          style={{
            "background-color": "white",
            border: "1px solid grey",
            "border-radius": "15px",
            cursor: "pointer"
          }}
        >
          <img class="arrowImg" alt="arrow_forward" src={ArrowForward} />
        </button>
      </div>
    );
  }
}

// Component for slide
class CarouselSlide extends React.Component {
  render() {
    return (
      <li
        style={
          this.props.index === this.props.activeIndex
            ? {
                "margin-right": "auto",
                "margin-left": "auto",
                display: "block",
                "max-width": "1050px",
                "list-style-type": "none",
                "text-align": "center"
              }
            : {
                "margin-right": "auto",
                "margin-left": "auto",
                display: "none",
                "max-width": "1050px",
                "list-style-type": "none",
                "text-align": "center"
              }
        }
      >
        <div style={styles.container}>
          <div>
            <img
              src={this.props.image}
              style={{
                width: "40%",
                height: "100%",
                objectFit: "fill",
                display: "block",
                margin: "auto"
              }}
              alt={""}
            />
          </div>
        </div>
      </li>
    );
  }
}

// Carousel component
class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e, slidesLength) {
    e.preventDefault();

    let index = this.state.activeIndex;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e, slidesLength) {
    e.preventDefault();

    let index = this.state.activeIndex;
    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    const { images } = this.props;
    console.log("inside carousel", this.props);
    return (
      <div className=" row carousel">
        <CarouselLeftArrow
          onClick={e => this.goToPrevSlide(e, images.length)}
        />

        <div
          style={{
            paddingRight: "27px ",
            paddingLeft: "27px",
            "align-self": "center",
            width: "70%"
          }}
          className="col"
        >
          {this.props.images.map((image, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              image={image}
            />
          ))}
        </div>

        <CarouselRightArrow
          onClick={e => this.goToNextSlide(e, images.length)}
        />
      </div>
    );
  }
}

export default Carousel;
