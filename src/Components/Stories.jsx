
import Stories, { WithSeeMore, WithHeader } from 'react-insta-stories';
import video from './productSVG/vid3.mp4'
import video2 from './productSVG/vid2.mp4'
// import video3 from './productSVG/vid3.mp4
import CustomVideoStory from './CustomVideoStory';


function Story() {
  const stories = [
    {
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
          Experience
        </div>
      ),
      header: {
        heading: 'Pankaj Singh',
        subheading: 'Posted 30m ago',
        profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp',
        style: {
          height: 'fit-content',
          width: 'fit-content'
        }
      },
    },
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
          Motivation
        </div>
      ),
      header: {
        heading: 'Pankaj Singh',
        subheading: 'Posted 30m ago',
        profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
      },

    },
  ];
  return (
    <Stories
      stories={stories}
      height={'100%'}
      width={'100vw'}
      loop={true}
      storyContainerStyles={{
        height: '100%',
        maxHeight: '200%',
        width: '100%',
        maxWidth: '100%'
      }}
      storyStyles={{
        height: '100%',
        width: '100%',
        margin: 0
      }}
    />
  )
}

export default Story