


class ThronesService {

    _apiBase = 'https://anapioficeandfire.com/api/';


    getResource = async (url) => {
    const res = await fetch(url);
  
    if (!res.ok) {
     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
  
    return await res.json();
  };


    getAllCharacters = async () => {
      let allCharacters = [];
      let page = 1;
      const pageSize = 50;

    while (true) {
     const res = await this.getResource(`${this._apiBase}characters?page=${page}&pageSize=${pageSize}`);
    
       if (res.length === 0) break;

        allCharacters = [...allCharacters, ...res];
          page++;
  }
  
  const charactersWithActors = allCharacters.filter(char => 
    Array.isArray(char.playedBy) && char.playedBy.length > 0 && char.playedBy[0] !== ""
  );

  return charactersWithActors;
}

    getAllHouses  = async () => {
      let allHouses = [];
      let page = 1;
      const pageSize = 50;

      while (true) {
        const res = await this.getResource(`${this._apiBase}houses?page=${page}&pageSize=${pageSize}`);
        if (res.length === 0) break;

        allHouses = [...allHouses, ...res];
        page++;
      
      }

      return allHouses;
    }

    // getAllCharacters = async () => {
    //     const res = await this.getResource(`${this._apiBase}characters/`);
    //     return console.log(res);
    //     return res.data.results.map(this._transformCharacter);
    // }
     
    
    // getCharacter = async (id) => {
    //     const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    //     return this._transformCharacter(res.data.results[0]);
    // }


    // _transformCharacter = (char) => {
    //     return {
    //             name: char.name,
    //             description: char.description,
    //             thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    //             homepage: char.urls[0].url,
    //             wiki: char.urls[1].url
    //     }
    // }

}



export default ThronesService;