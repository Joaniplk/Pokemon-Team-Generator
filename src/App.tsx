import React from 'react';
import Axios from 'axios';
import PokeData from './types/interfaces';
import { Pokemon } from './components/Pokemon';
import './App.css';

function App():JSX.Element {
  const pokemons:string[] = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidorina",
  "nidoqueen",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglypuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwrath",
  "poliwhirl",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetchd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "grimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
  "electride",
  "exeggcute",
  "exeggutor",
  "cubone",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "koffing",
  "weezing",
  "rhyhorn",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "mr-mime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "magikarp",
  "gyarados",
  "lapras",
  "ditto",
  "eevee",
  "vaporeon",
  "jolteon",
  "flareon",
  "porygon",
  "omanyte",
  "omastar",
  "kabuto",
  "kabutops",
  "aerodactyl",
  "snorlax",
  "articuno",
  "zapdos",
  "moltres",
  "dratini",
  "dragonair",
  "dragonite",
  "mewtwo",
  "mew"
];

  let pokemon1:string = pokemons[Math.floor(Math.random() * pokemons.length)];
  let pokemon2:string = pokemons[Math.floor(Math.random() * pokemons.length)];
  let pokemon3:string = pokemons[Math.floor(Math.random() * pokemons.length)];
  let pokemon4:string = pokemons[Math.floor(Math.random() * pokemons.length)];
  let pokemon5:string = pokemons[Math.floor(Math.random() * pokemons.length)];
  let pokemon6:string = pokemons[Math.floor(Math.random() * pokemons.length)];

  const stateInfo = {
    name:"",
    sprites: {
      front_default: ""
    }
  };

  const [pokeData1, setPokeData1] = React.useState<PokeData>(stateInfo);
  const [pokeData2, setPokeData2] = React.useState<PokeData>(stateInfo);
  const [pokeData3, setPokeData3] = React.useState<PokeData>(stateInfo);
  const [pokeData4, setPokeData4] = React.useState<PokeData>(stateInfo);
  const [pokeData5, setPokeData5] = React.useState<PokeData>(stateInfo);
  const [pokeData6, setPokeData6] = React.useState<PokeData>(stateInfo);

  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  function fetchData(pokemon1: string,pokemon2: string,pokemon3: string,pokemon4: string,pokemon5: string,pokemon6: string,):void{
      Axios.get(apiUrl + pokemon1).then((res) => {
        setPokeData1(res.data);
      });
      Axios.get(apiUrl + pokemon2).then((res) => {
        setPokeData2(res.data);
      });
      Axios.get(apiUrl + pokemon3).then((res) => {
        setPokeData3(res.data);
      });
      Axios.get(apiUrl + pokemon4).then((res) => {
        setPokeData4(res.data);
      });
      Axios.get(apiUrl + pokemon5).then((res) => {
        setPokeData5(res.data);
      });
      Axios.get(apiUrl + pokemon6).then((res) => {
        setPokeData6(res.data);
      });
  }

  React.useEffect(() => {fetchData(pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6);},[]);

  return (
    <div className="App">
      <header>
        <h1 className='title'>PokeTeamRandomizer</h1>
      </header>
        <main className='poketeam'>
          <div className='pokemon-container'>
            <Pokemon name={pokeData1.name} url={pokeData1.sprites.front_default} />
            <Pokemon name={pokeData2.name} url={pokeData2.sprites.front_default} />
            <Pokemon name={pokeData3.name} url={pokeData3.sprites.front_default} />
            <Pokemon name={pokeData4.name} url={pokeData4.sprites.front_default} />
            <Pokemon name={pokeData5.name} url={pokeData5.sprites.front_default} />
            <Pokemon name={pokeData6.name} url={pokeData6.sprites.front_default} />
          </div>
        </main>
        <br />
        <div>
          <button className='newBtn' onClick={() => fetchData(pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6)}>
            Randomize Team
          </button>
        </div>
    </div>
  );
}

export default App;
