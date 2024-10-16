import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
  {
    src: 'https://webfiles.amrita.edu/2019/12/rE9oOfim-Elec-3-1384.jpg',
    altText: 'Slide 1',
    //caption: 'Slide 1'
  },
  {
    src: 'https://www.tamuc.edu/wp-content/uploads/2019/06/17339-Electrical-Engineering-8083.jpg',
    altText: 'Slide 2',
    //caption: 'Slide 2'
  },
  {
    src: 'https://www.lsbu.ac.uk/__data/assets/image/0008/247958/Students-mapping-electrics.jpg',
    altText: 'Slide 3',
    //caption: 'Slide 3'
  }
];

class CourseCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="d-block w-100" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    const carouselContainerStyle = {
        width: "200%", // Adjust the width as needed
        maxWidth: "1100px", // Adjust the max-width as needed
        margin: "0 auto", // Center the carousel
        marginTop: "-25px",
        marginBottom: "25px",
        //borderRadius: "50px",
      };
  
      const carouselImageStyle = {
        width: "100%",
        height: "500px", // Adjust the height as needed
        objectFit: "cover", // This ensures the image covers the area without distortion
        //borderRadius: "50px",
      };

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        style={carouselContainerStyle}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} style={carouselImageStyle}/>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default CourseCarousel;
