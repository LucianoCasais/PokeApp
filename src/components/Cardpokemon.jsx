import {Col,Card,CardBody,CardFooter,CardImg,Badge} from 'reactstrap'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Cardpokemon.css'


export const CardPokemon = (params) => {
  const [pokemon,setPokemon] = useState([])
  const [imagen,setImagen] = useState('')
  const [cardClass,setCardClass] = useState('d-none')
  const [loadClass,setLoadClass] = useState('')
  useEffect( () =>{
    getPokemon()
  },[]
)
  const getPokemon = async() =>{
    const liga = params.poke.url
    axios.get(liga).then( async(response)=>{
      const respuesta = response.data
      setPokemon(respuesta)
      setImagen(respuesta.sprites.other['official-artwork'].front_default)
      setCardClass('')
    }) 
  }

  return (
  <>
    <ul className='cardGrid'>
    <div className='cardFrame'>
      <div>
        <span className='cardText'>#{pokemon.id} </span>
        <span className='cardTitle'>{pokemon.name}</span>
      
      </div>
      <div className='cardImage'>
        <img src={imagen} alt="pokemon"/>
      </div>
      <button className='cardButton'>
        <Link to={`/pokemon/${pokemon.name}`}>Información</Link>
      </button>

    </div>
    </ul> 
  </>


    // <Col sm='4' lg='3' className='mb-3'>
    //   <Card className={'card-hover shadow border-4 border-danger'+cardClass}>
    //     <CardImg src={imagen} height='270' className='p-2' />
    //     <CardBody className='text-center'>
    //       <Badge pill color='danger'># {pokemon.id} </Badge>
    //       <label className='text-capitalize fw-bold'>{pokemon.name}</label>
    //     </CardBody>
    //     <CardFooter className='bg-danger'>
    //       <Link to={'/pokemon/'+pokemon.name} className='btn btn-dark'>Información</Link>
    //     </CardFooter>
    //   </Card>
    // </Col>
  )
}

export default CardPokemon