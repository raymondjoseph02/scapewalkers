import GalleryCard from "./GalleryCard";

const Gallary = () => {
  return (
    <section className="w-full bg-white_100">
      <div className="w-full xl:w-[80%]  gallery_container ">
        <GalleryCard size="small" />
        <GalleryCard size="medium" />
        <GalleryCard size="normal" />
        <GalleryCard size="large" />
        <GalleryCard size="small" />
        <GalleryCard size="small" />
        <GalleryCard size="medium" />
        <GalleryCard size="normal" />
        <GalleryCard size="large" />
        <GalleryCard size="small" />
        <GalleryCard size="small" />
        <GalleryCard size="medium" />
        <GalleryCard size="normal" />
        <GalleryCard size="large" />
        <GalleryCard size="small" />
        <GalleryCard size="small" />
        <GalleryCard size="medium" />
        <GalleryCard size="normal" />
        <GalleryCard size="large" />
        <GalleryCard size="small" />
      </div>
    </section>
  );
};
// const galleryContainer: React.CSSProperties = {
//   margin: 0,
//   position: "relative",
//   left: "50%",
//   transform: "translateX(-50%)",
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, 320px)",
//   gap: "20px",
//   gridAutoRows: "auto",
//   backgroundColor: "#ffffff",
// };
export default Gallary;
