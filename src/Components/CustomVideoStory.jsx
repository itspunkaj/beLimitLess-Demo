const CustomVideoStory = ({ url }) => (
  <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
    <video
      src={url}
      autoPlay
      muted
      loop
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

export default CustomVideoStory