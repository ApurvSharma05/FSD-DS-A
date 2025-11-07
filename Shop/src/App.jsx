import "./App.css"
import Nav from "./Nav.jsx"
import Card from "./Card"

function App() {
  return(
    <>
      <Nav />
      <div className="card-container">
        <Card
          image="https://m.media-amazon.com/images/I/817vqET828L._UF1000,1000_QL80_.jpg"
          title="IT ENDS WITH US"
          description="sad life story"
        />
        <Card
          image="https://0.academia-photos.com/attachment_thumbnails/92690744/mini_magick20221019-1-rrdxwh.png?1666169459"
          title="IT STARTS WITH US"
          description="happy life story"
        />
        <Card
          image="https://yourbookshelf.net/wp-content/uploads/2023/09/3647347YB-Verity.jpg.webp"
          title="VERITY"
          description="horror life story"
        />
      </div>
    </>
  )
}
export default App;