import './App.css';
// import image from "../public/photo/autumn-7554430.jpg"
import styles from "./style/App.module.scss"
function App() {
  const photoList = [
    // '.DS_Store',
    'aesthetic-9093322.jpg',
    'autumn-7554430.jpg',
    'book-illustration-8643149.jpg',
    'books-8934573.jpg',
    'cactus-7856967.jpg',
    'cat-5320572.jpg',
    'chilli-8661184.jpg',
    'corn-9064747.jpg',
    'darling-7853389.jpg',
    'fish-8673535.jpg',
    'flowers-8780868.jpg',
    'horses-9057949.jpg',
    'japan-9074037.jpg',
    'lizard-8796682.jpg',
    'lock-8704819.jpg',
    'mountains-7957191.jpg',
    'mountains-7957191_副本.jpg',
    'mountains-8811206.jpg',
    'octopus-8562474.jpg',
    'open-book-7637805.jpg',
    'owl-9079962.jpg',
    'robin-9094847.jpg',
    'rose-8940207.jpg',
    'snake-7256057.jpg',
    'snake-7256057_副本.jpg',
    'squash-8120435.jpg',
    'squash-8120435_副本.jpg',
    'station-8558516.jpg',
    'strawberries-8295645.jpg',
    'train-8853636.jpg',
    'wave-9067749.jpg',
    'wave-9067749_副本.jpg'
  ];
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          this is a photography exhibition
        </h1>
      </div>

      <div className={styles.contentImage}>
        {photoList.map((photo, index) => {
          return <img className={styles.image} src={'/photo/' + photo} alt={'photo' + index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
