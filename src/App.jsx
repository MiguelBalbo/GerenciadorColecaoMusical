import AddMusic from "./components/AddMusic";
import Musics from "./components/musics";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  
  const [msc, setMsc] = useState(JSON.parse(localStorage.getItem("mscList")) || []);

  function onMusicClick(mscId){
      const newMusic = msc.map(msc => {
        if(msc.id == mscId){
          return({...msc, isOnCollection: !msc.isOnCollection})
        }

        return msc;
      })

      setMsc(newMusic)
  }

  function onMusicDeleteClick(mscId){
      const newMusic = msc.filter(msc => msc.id != mscId)
      setMsc(newMusic)
  }

  function onMusicAddClick(nomeAlbum, nomeArtista, urlCapa, urlSpotify){
    const newMsc = {
      id: v4(),
      nomeAlbum,
      nomeArtista,
      urlCapa,
      urlSpotify,
      textAlt: nomeAlbum + " " + nomeArtista + " capa",
      isOnCollection: false,
    }
    setMsc([...msc, newMsc])
  }

  async function getUrlCover(nomeAlbum, nomeArtista){
    const response = await fetch (`https://musicbrainz.org/ws/2/release/?query=release:${encodeURIComponent(nomeAlbum)} AND artist:${encodeURIComponent(nomeArtista)}&fmt=json`, {
      method:'GET'
    })
    const data = await response.json();
    console.log(data);

    const officialRelease = data.releases.find(r => r.status === "Official") || data.releases[0];
    console.log(officialRelease);
    
    const releaseId = officialRelease.id;
    console.log(releaseId);
    
    const urlCapa = `https://coverartarchive.org/release/${releaseId}/front`;

    return urlCapa;
  }

  

  useEffect(() => {
    localStorage.setItem("mscList", JSON.stringify(msc))
  },[msc])

  return(
    <div class="w-screen bg-gray-700 flex justify-center">
      <div class="w-4/5 bg-gray-800 ">
        <h1 class="text-5xl text-gray-100 text-center">Gerenciador de álbuns na coleção</h1>
        <AddMusic onMusicAddClick={onMusicAddClick} getUrlCover={getUrlCover}/>
        <Musics msc={msc} onMusicClick={onMusicClick} onMusicDeleteClick={onMusicDeleteClick}/>
      </div>
    </div>
  )
}

export default App;