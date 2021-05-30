import React, {useState, useReducer, useEffect, useRef} from 'react';
import './assets/css/font.css';
import './assets/css/style.css';

//import plugin and reducer
import styled from '@emotion/styled';
import swal from 'sweetalert';
import { useQuery } from '@apollo/client';
import {GET_POKEMONS, GET_POKEMON_DETAIL} from './query';
// import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {TYPE} from './reducer/type';
import {reducer} from './reducer';

//import outer (main) component
import Home from './components/home';
import Detail from './components/detail';
import My from './components/mypoke';

//styled_container
const Container = styled.div`
  min-height: 100vh;
  background: var(--main-bg);
  margin: 0 auto;
  max-width: 500px;
  position: relative !important;
  overflow-x: hidden;
`

//set pokemon context to send all data
export const PokemonContext = React.createContext()

function App() {
  //use reducer to handle owned pokemon and pokemon nick name
  const [pokemon_nickname, dispatchNickName] = useReducer(reducer, [], () => {
    const data = localStorage.getItem('nickNameStorage')
    return data ? JSON.parse(data) : []
  });
  const [pokemon_owned, dispatchOwned] = useReducer(reducer, [], () => {
    const data = localStorage.getItem('ownedStorage')
    return data ? JSON.parse(data) : []
  });

  //set ref to make a window scrolling effects for container
  const container_ref = useRef();

  //set initiial state for pokemon name
  const [name, setName] = useState('')

  //set initial state and limit
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)

  //handle state and limit for the next or prev state
  const setListPrev = () => {
    setOffset(prev => prev - 20)
    container_ref.current.scrollTop = 0
  }
  const setListNext = () => {
    setOffset(prev => prev + 20)
    container_ref.current.scrollTop = 0
  }

  //get pokemon lists
  const PokemonLists = useQuery(GET_POKEMONS, {
    variables: {limit: limit, offset: offset}
  });

  //get pokemon detail
  const PokemonDetail = useQuery(GET_POKEMON_DETAIL, {
    variables: {name: name}
  });

  //catch pokemon action
  const catchPokemon = (data) => {
    console.log(data)
    swal({
      title: `Are you sure want to catch ${data.name}?`,
      text: "You only have 50% Probability to Catch This Pokemon",
      icon: "info",
      buttons: true,
    })
    .then((willCatch) => {
      if (willCatch) {
        if(Math.random() < 0.5){
          swal({
            text: `Yay, You got ${data.name}. Give This Pokemon a Nickname`,
            icon: 'success',
            content: "input",
            button: {
              text: "Submit",
              closeModal: false,
            },
          })
          .then(nickname => {
            //dispatch action for nickname
            dispatchNickName({type: TYPE.PUT_NICKNAME, payload: {name: data.name, nickname: nickname, image: data.sprites.front_default}})
            dispatchOwned({type: TYPE.PUT_OWN, payload: {name: data.name}})
            swal.stopLoading();
            swal.close();
          })
          .catch(err => {
            if (err) {
              swal("Oh no", "Something When Wrong", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          })
        }
        else{
          swal("Opps! Not Your Lucky Day", {
            icon: "warning",
          });
        } 
      } else {
        swal("Catch Cancelled");
      }
    });
  }

  //release pokemon action
  const releasePokemon = (data, e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once released, you will not be able to recover this pokemon",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willRelease) => {
      if (willRelease) {
        dispatchNickName({type: TYPE.RELEASE_NICKNAME, payload: {id: data.id}})
        dispatchOwned({type: TYPE.RELEASE_OWN, payload: {name: data.name}})
        swal("Poof! Your pokemon has been released!", {
          icon: "success",
        });
      } else {
        swal("Your pokemon is safe!");
      }
    });
  }
  
  //useeffect to save data to local storage
  useEffect(() => {
    localStorage.setItem('nickNameStorage', JSON.stringify(pokemon_nickname));
  }, [pokemon_nickname])

  useEffect(() => {
    localStorage.setItem('ownedStorage', JSON.stringify(pokemon_owned));
  }, [pokemon_owned])

  //set scroll top top when detail changes
  useEffect(() => {
    container_ref.current.scrollTop = 0
  }, [name])

  //set global state value
  const ValueProvider = {
    loading_lists: PokemonLists.loading,
    data_lists: PokemonLists.data,
    error_lists: PokemonLists.error,
    loading_detail: PokemonDetail.loading,
    data_detail: PokemonDetail.data,
    error_detail: PokemonDetail.error,
    limit: limit,
    offset: offset,
    name: name,
    pokemon_nickname: pokemon_nickname,
    pokemon_owned: pokemon_owned,
    setListPrev: setListPrev,
    setListNext: setListNext,
    setName: setName,
    catchPokemon: catchPokemon,
    releasePokemon: releasePokemon
  }

  return (
    <PokemonContext.Provider value={ValueProvider}>
      <Router>
        <Container ref={container_ref}>
          <Switch>
            <Route path='/' exact  component={Home}/>
            <Route path='/my'  component={My}/>
            <Route path='/:name'  component={Detail}/>
            <Route path='*' exact={true}  />
          </Switch>
        </Container>
      </Router>
    </PokemonContext.Provider>
  );
}

export default App;
