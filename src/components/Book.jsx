// sfc typen voor speedrun ❤️
const Book = ({image, title, author}) => {
    return (
        <>
        <img src={image} alt="" height="354px" />
        <h2>{title}</h2>
        <h3>{author}</h3>
        </>
      );
}
 
export default Book;