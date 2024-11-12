
import Stories from 'react-insta-stories';
import video from './productSVG/vid4.mp4'
import video2 from './productSVG/vid6.mp4'
import CustomVideoStory from './CustomVideoStory';
// import video3 from './productSVG/vid3.mp4'

const stories2 = [
  {
    // content : () => <CustomVideoStory url={video2}/>,
    url: video2,
    type: 'video',
    seeMore: ({ close }) => (
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <h2>Additional Content</h2>
        <p>Here is some more information about this story.</p>
        <button onClick={close}>Close</button>
      </div>
    ),
    seeMoreCollapsed: () => (
      <div className='shadow-lg mb-1 text-lg bg-primaryPink rounded-full w-32 mx-auto text-white p-[10px] text-center'>
        Experience
      </div>
    ),
    header: {
      heading: 'Sandeep Kumar',
      subheading: 'Posted 5Days ago',
      profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
    },
  },
  {
    // content : () => <CustomVideoStory url={video}/>,
    url: video,
    type: 'video',
    seeMore: ({ close }) => (
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <h2>Additional Content</h2>
        <p>Here is some more information about this story.</p>
        <button onClick={close}>Close</button>
      </div>
    ),
    seeMoreCollapsed: () => (
      <div className='shadow-lg mb-1 text-lg bg-primaryPink rounded-full w-32 mx-auto text-white p-[10px] text-center'>
        Motivation
      </div>
    ),
    header: {
      heading: 'Sandeep Kumar',
      subheading: 'Posted 5Days ago',
      profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
    },
  },

];

function Stories2() {
  return (
    <Stories
      stories={stories2}
      height={'100%'}
      width={'100vw'}
      loop={true}
    />
  )
}

export default Stories2