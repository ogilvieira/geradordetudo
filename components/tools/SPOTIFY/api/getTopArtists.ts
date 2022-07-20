type Artist = {
  name: string,
  genres: string[],
  image: string
}

type Genre = {
  title: string,
  freq: number,
  artists: Artist[]
}


export default async (token: string) => {
  return await fetch("https://api.spotify.com/v1/me/top/artists", {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then( (res: any) => {
    if(!res?.items) {
      throw new Error();
    }

    const artists = res.items.map((artist: any)=>{
        const name = artist.name;
        const image = artist.images[0].url;
        const genres = artist.genres;

        const artistObj: Artist = {
            name,
            genres,
            image
        }

        return artistObj;
    })

    const unorganizedGenres = res.items.map((artist: any) => {
      const genreArr = artist.genres;
      return genreArr;
    })

    const allGenres = [].concat(...unorganizedGenres)

    var frequency : {
      [key: string]: number
    } = {};

    allGenres.forEach((genre) => {
      if( frequency[genre] ) {
        frequency[genre]++;
      } else {
        frequency[genre] = 1;
      }
    })

    let sortable = [];
    for (var el in frequency) {
      sortable.push([el, frequency[el]]);
    }

    sortable.sort((a:any, b:any) => {
      return a[1] - b[1];
    })


    var genres: Genre[] = [];

    sortable.reverse().forEach((el: any) => {
      genres.push({
        title: el[0],
        freq: el[1],
        artists: artists.filter( (a: any) => a.genres.includes(el[0]))
      })
    });

    const obj : { artists: Artist[], genres: Genre[]} = {
      artists,
      genres
    };

    return obj;

  }).catch(err => {
    console.error(err);
    return null;
  });
}
