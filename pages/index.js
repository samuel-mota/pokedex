import React, { useState, useEffect } from 'react'

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps(context) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2')
  .then((responseServer) => {
    if(responseServer.ok) {
      return responseServer.json();
    }
  })
  .then((responseObj) => {
    // console.log(responseObj.pokemon_entries);
    return responseObj.pokemon_entries;
  })

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

const Home = (props) => {
  const { pokemons } = props;
  // const [pokemons, setPokemons] = useState([])

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokedex/2')
  //     .then((responseServer) => {
  //       if(responseServer.ok) {
  //         return responseServer.json();
  //       }
  //     })
  //     .then((responseObj) => {
  //       console.log(responseObj.pokemon_entries);
  //       setPokemons(responseObj.pokemon_entries);
  //     })
  // }, [])
  
  return (
    <div>
      Pokedex API
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            {pokemon.pokemon_species.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home