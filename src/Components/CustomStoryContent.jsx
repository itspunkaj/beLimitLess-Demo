
import { WithSeeMore } from 'react-insta-stories'
import CustomCollapsedComponent from './CustomCollapsedComponent'

const CustomStoryContent = ({ story, action }) => {
  return <WithSeeMore story={story} action={action}>
    <div>
      <h1>Hello!</h1>
      <p>This story would have a 'See More' link at the bottom ✨</p>
    </div>
  </WithSeeMore>
}

export default CustomStoryContent