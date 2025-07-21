import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { AiFillSpotify } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function Musics(props) {

    const navigate = useNavigate();
    
    function onSpotifyClick(music) {
        const query = new URLSearchParams();
        query.set("artista", music.nomeArtista);
        query.set("album", music.nomeAlbum);
        query.set("spotify", music.urlSpotify);
        query.set("capa", music.urlCapa);
        navigate(`/spotify?${query}`)
    }

  return (
    <ul className="space-y-4 w-3xl h-screen mx-auto p-6 bg-gray-700 rounded-md">
      {props.msc.map((music) => (
        <li key={music.id} className="flex gap-2">
          <div className="flex items-center gap-4 bg-gray-900 rounded-xl p-5 w-full">
            {music.isOnCollection && (
              <div>
                <h1>💿</h1>
              </div>
            )}
            <div>
              <img
                src={music.urlCapa}
                alt={music.textAlt}
                className="w-20 rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-gray-50">💿 Álbum: {music.nomeAlbum}</h2>
              <h2 className="text-gray-50">🎤 Artista: {music.nomeArtista}</h2>
            </div>
            <div>
              <a
                href="#"
                onClick={() => props.onMusicClick(music.id)}
                className="bg-gray-700 gap-4 rounded-xl p-2 relative z-10 text-gray-50" 
              >
                {" "}
                Coleção
              </a>
            </div>
          </div>
          <a
            type="button"
            href="#"
            onClick={() => onSpotifyClick(music)}
            className="px-5 bg-gray-900 rounded-xl text-white pt-12.5">
            <AiFillSpotify />
          </a>

          <a
            type="button"
            href="#"
            onClick={() => props.onMusicDeleteClick(music.id)}
            className="px-5 bg-gray-900 rounded-xl text-white pt-12.5"
          >
            <TrashIcon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Musics;
