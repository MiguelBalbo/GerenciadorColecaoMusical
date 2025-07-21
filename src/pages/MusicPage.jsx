import { useSearchParams } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function TaskPage(){
    
    const [searchParams] = useSearchParams()
    const artista = searchParams.get("artista")
    const album = searchParams.get("album")
    const urlSpotify = searchParams.get("spotify")
    const urlCapa = searchParams.get("capa")
    const navigate = useNavigate();
    const wikiLink = `https://pt.wikipedia.com/wiki/${album}`;

    return (
    <div className="w-screen h-screen bg-gray-700 justify-center space-y-4 p-5">
        <div className="flex justify-center space-x-15">
            <a href="#" className="text-gray-50 mt-5" onClick={navigate(-1)}>
                <ChevronLeftIcon />
            </a>
            <h1 className="text-5xl text-gray-100 text-center my-3 mb-10"> Detalhes do álbum - {album} </h1> 
        </div>
        <div className="flex justify-center">
            <div className="bg-gray-500 p-5 justify-center itens-center w-1/4 h-120 mx-7 rounded-xl">
                <img src={urlCapa} alt={album} className="w-85 rounded-xl my-3"/>
                <h2 className="text-gray-50 text-2xl">💿 Álbum: {album}</h2>
                <h2 className="text-gray-50 text-2xl">🎤 Artista: {artista}</h2>
            </div>
            <div>
             <iframe data-testid="embed-iframe" src={urlSpotify} className="w-100 h-120 mx-7" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div>
                <iframe src={wikiLink} frameborder="0" className="w-100 h-120 mx-7 rounded-xl"></iframe>
            </div>
        </div>
        
    </div>
    )
}

export default TaskPage