import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/search';
import ImagCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/welcome';

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;         WE DONT NEEDIT ANY MOOR AND DELETE IT FROM .ENV.LOCAL
const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  //console.log(images);
  const submithandler = function submithandler(e) {
    e.preventDefault();
    //console.log(word);
    fetch(`${API_URL}/new-image?query=${word}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })

      .catch((err) => {
        console.log(err);
      });

    setWord(''); // to clear search input and back it to default
  };
  //console.log(word);

  //console.log(process.env.REACT_APP_UNSPLASH_KEY);
  // THIS LINE MUST BE DELETED

  const deleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} submithandler={submithandler} />

      <Container>
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i}>
                <ImagCard image={image} deleteImage={deleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome></Welcome>
        )}
      </Container>
    </div>
  );
}

export default App;
