import { useState, useEffect, useRef } from 'react';
import getTopArtists from '../api/getTopArtists';
import styles from './graph.module.css';
import { toJpeg } from 'html-to-image';

function Graph({ token }: { token: string }) {
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [freqMax, setFreqMax] = useState(0);
  const [steps, setSteps] = useState(0);
  const colors = ['#00a8ff', '#9c88ff', '#fbc531', '#4cd137', '#487eb0', '#ffcccc', '#32ff7e', '#7efff5', '#ffaf40', '#c7ecee', '#6ab04c'];
  const placeRef = useRef(null)
  const [image, setImage] = useState('');
  
  window.location.hash = '';

  useEffect(() => {
    getTopArtists(token)
      .then( (res: any) => {
        setArtists(res.artists);
        setGenres(res.genres);
        setFreqMax(res.genres[0].freq);

        setTimeout(() => {
          if( placeRef && placeRef.current){
            toJpeg(placeRef.current)
              .then((image: string) => {
                setImage(image)
              });
            }
        }, 1000)

      })

  }, []);

  useEffect(() => {
    if( steps >= 12 && placeRef && placeRef.current) {
      toJpeg(placeRef.current)
        .then((image) => {
          setImage(image)
        });
    }
  }, [steps])

  const addStep = () => {
    setSteps(steps + 1);
  }
  
  return (<>
    <div className={styles.wrap}>
      <div ref={placeRef} className={styles.place}>

        <div className={styles.head}>
          Meu Spotify Ranking
        </div>

        <div>
          <div className={styles.subtitle}>Top Artistas</div>
          <div className={styles.grid}>
          { artists && artists.slice(0, 12).map( (artist: any, index) => (
            <div className={styles.artist} key={`artist-${index}`}>
              <div className={styles.artistRank}><span style={{ backgroundColor: colors[index] || 'white' }}>{index + 1}</span></div>
              <div className={styles.artistName}>{artist.name}</div>
            </div>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.subtitle}>Top Gêneros</div>
          <div className={styles.grid}>
          { genres && genres.slice(0, 12).map( (genre: any, index) => (
            <div className={styles.genre} key={`genre-${index}`}>
              <div className={styles.genreRank}><span style={{backgroundColor: colors[index] || 'white'}}>{index + 1}</span></div>
              <div className={styles.genreName}>{genre.title.toUpperCase()}</div>
              <div className={styles.genreBar}>
                <div style={{ width: `${(genre.freq/freqMax)*100}%`, backgroundColor: colors[index] || 'white'}}></div>
              </div>
            </div>
              
            ))}
          </div>
        </div>

        <div className={styles.foot}>
          geradordetudo.app.br/spotify-ranking
        </div>

      </div>
    </div>

    {image && <>
      <p><strong>Clique na imagem abaixo para salvar e compartilhar:</strong></p>
      <a href={image} download="meu-spotify-ranking.jpg" className={styles.wrapImage}>
        <img src={image}/>
      </a>
    </>}
    
    {!image && <>
      Carregando imagem...
    </>}
  </>)
};

export default Graph;
