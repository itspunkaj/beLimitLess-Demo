import React from 'react'
import Stories, { WithSeeMore } from 'react-insta-stories';
import AxeBlue from './productSVG/AxeBlue.svg';
import Dove from './productSVG/DoveWhite.svg'
import Loreal from './productSVG/Loreal.svg'
import video from './productSVG/vid.mp4'
import video2 from './productSVG/video2.mp4'
// import { WithSeeMore2 } from 'react-insta-stories'
// import CustomStoryContent from './CustomStoryContent';
import CustomCollapsedComponent from './CustomCollapsedComponent';
const CustomStoryContent = () => {
  return (
    <div>
      <div>
        <h1>Hello!</h1>
        <p>This story would have a 'See More' link at the bottom ✨</p>
      </div>
    </div>
  )
}

const stories = [
  {
    url: video,
    type: 'video',
    header: {
      heading: 'Pankaj Singh',
      subheading: 'Posted 30m ago',
      profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
    },
  },
  {
    url: video2,
    type: 'video',
    header: {
      heading: 'Pankaj Singh',
      subheading: 'Posted 30m ago',
      profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
    },
  }
];

function Story() {
  return (
    <Stories
      stories={stories}
      defaultInterval={4000}
      height={'100%'}
      width={'100vw'}
      loop={true}
    />
  )
}

export default Story