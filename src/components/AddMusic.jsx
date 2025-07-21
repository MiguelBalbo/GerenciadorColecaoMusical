import { CirclePlusIcon, DeleteIcon } from "lucide-react";
import { useState } from "react";

function AddMusic (props) {
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [spotify, setSpotify] = useState("");
    

    return(
        <div className="space-y-4 w-3xl mx-auto p-6 bg-gray-700 rounded-md my-5">
            <input type="text" placeholder="Digite o nome do álbum *" className="w-full text-gray-50 bg-gray-800 p-2 rounded-md border-gray-900 border-1" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <input type="text" placeholder="Digite o nome do artista *" className="w-full text-gray-50 bg-gray-800 p-2 rounded-md border-gray-900 border-1" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <input type="text" placeholder= "Digite o link do Spotify" className="w-full text-gray-50 bg-gray-800 p-2 rounded-md border-gray-900 border-1" value={spotify} onChange={(event) => setSpotify(event.target.value)} />
            <div className="flex gap-5">
                <a href="#" className="text-gray-50 bg-gray-800 p-2 rounded-md flex gap-2 w-30" onClick={async () => {
                    if (!artist.trim() || !album.trim()){
                        return alert ("Digite pelo menos o nome do artista e do álbum")
                    }
                    const urlCover = await props.getUrlCover(artist,album);
                    console.log(urlCover);

                    const spotifySplit = spotify.split("/"); 
                    const spotifyNewUrl = `${spotifySplit[0]}//${spotifySplit[2]}/embed/${spotifySplit[4]}/${spotifySplit[5]}/${spotifySplit[6]}?utm_source=generator`;
                    console.log(spotifyNewUrl)

                    props.onMusicAddClick(artist, album, urlCover, spotifyNewUrl); 
                    setArtist(""); 
                    setAlbum("");  
                    setSpotify("")
                    }}> <CirclePlusIcon /> Adicionar</a>
                <a href="#" className="text-gray-50 bg-red-900 p-2 rounded-md flex gap-2 w-45" onClick={() => {
                    setArtist(""); 
                    setAlbum(""); 
                    setSpotify("")
                    }}> <DeleteIcon /> Limpar formulário</a>
            </div>
        </div>
    )
}

export default AddMusic;