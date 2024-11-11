
import Stories, { WithSeeMore, WithHeader } from 'react-insta-stories';
import video from './productSVG/vid4.mp4'
import video2 from './productSVG/vid5.mp4'
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
      seeMoreCollapsed: ()=>(
        <div className='shadow-lg text-2xl bg-black/20 rounded-full text-white p-[10px] text-center'>
          Experience
        </div>
      ),
      header: {
        heading: 'Pankaj Singh',
        subheading: 'Posted 30m ago',
        profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
      }
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
      seeMoreCollapsed: ()=>(
        <div className='shadow-lg text-2xl bg-black/20 rounded-full text-white p-[10px] text-center'>
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
    // storyContainerStyles={{
    //   height: '100%',
    //   width: '100%'
    // }}
    // storyStyles={{
    //   height: '100%',
    //   width: '100%',
    //   margin: '0'
    // }}
    />
  )
}

export default Story