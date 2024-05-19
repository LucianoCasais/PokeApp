import React from 'react'
import {Row,Col,InputGroup,InputGroupText,Input} from 'reactstrap'
import axios from 'axios'
import {useState,useEffect} from 'react'
import CardPokemon from '../components/Cardpokemon'
import {Container} from 'reactstrap'

export const HomePage = () => {
  const [pokemones,setPokemones] = useState([])
  const [allPokemones,setAllPokemones] = useState([])
  const [listado,setListado] = useState([])
  const [filtro,setFiltro] = useState('')
  const [offset,setOffset] = useState(0)
  const [limit,setLimit] = useState(151)
  useEffect( () =>{
    getPokemones(offset)
    getAllPokemones()
  },[])

  const getPokemones = async(o) =>{
    const liga = 'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+o;
    axios.get(liga).then( async(response) =>{
      const respuesta = response.data
      setPokemones(respuesta.results)
      setListado(respuesta.results)
      //console.log(pokemones)
    })
  }
  const getAllPokemones = async() =>{
    const liga = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    axios.get(liga).then( async(response) =>{
      const respuesta = response.data
      setAllPokemones(respuesta.results)
    })
  }
  const buscar = async(e) =>{
    if (e.keyCode == 13) {  //significa que: si al presionar la tecla Enter en el buscador
      if(filtro.trim() != ''){
        setListado([])
        setTimeout( () =>{
          setListado(allPokemones.filter(p => p.name.includes(filtro)))
        },100)
      }
    } else if(filtro.trim() == '') {    //si la barra del buscador esta vacio, vuelve a traer la lista de pokemones completa
      setListado([])
      setTimeout(() => {
        setListado(pokemones)
      }, 100)
    }
  }
  return (
    <Container className='shadow bg-black mt4'>
      <Row>
        <Col>
          <InputGroup className='mt-4'>
            <InputGroupText><i className='fa-solid fa-magnifying-glass'></i></InputGroupText>
            <Input value={filtro} onChange={(e) => {setFiltro(e.target.value)}}
             onKeyUpCapture={buscar} placeholder='¿Que Pokémon quieres buscar?'></Input>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        {listado.map( (pok,i)=>(
          <CardPokemon poke={pok} key={i} />
        )) }
        { listado.length == 0 ?<Col className='text-center fs-2 mb-3'>No hay Pokemones</Col>: '' }
      </Row>
    </Container>
  )
}

export default HomePage