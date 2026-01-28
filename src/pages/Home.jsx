import MovieCard from "../components/MovieCard";
import {useState,useEffect} from "react";
import "../css/Home.css"

import {searchMovies,getPopularMovies} from "../services/api";

function Home(){
    const[searchQuery,setSearchQuery]=useState("");
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const loadPopularMovies=async()=>{
            try{
                const PopularMovies=await getPopularMovies();
            setMovies(PopularMovies)            }
        catch(err){
            console.log(err);
            setError("Failed to load");
        }
        finally{
            setLoading(false);
        }
        };
        loadPopularMovies();
    },[]);
    const handleSearch=async (e)=>{
        e.preventDefault();
        if(!searchQuery.trim()) return 
        setLoading(true)
        if(loading) return
        setLoading(true)
        try{
            const searchResults= await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null);
        }catch(err){
            console.log(err)
            setError("failed to search movies")
        } finally{
            setLoading(false)
        }


        



    };
    return(<div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
             type="text" placeholder="Search for Movies" 
             className="search-input"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
             />
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? <div className="loading">Loading..</div>:<div className="movies-grid">
            {movies.map((movie) => (

             movie.title.toLowerCase().startsWith(searchQuery) && (  <MovieCard movie={movie} key={movie.id}/>)
                ))}
        </div>}
        
    </div>
    );
     
}
export default Home;

// usse this state eto conditionally render this movie card only if th ebeginning of the  begin with search text
//ui gets updataed everytime the state changes when the state gets changes by calling this function the entire part of the component changes re rendere