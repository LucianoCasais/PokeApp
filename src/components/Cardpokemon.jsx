import {Row,Col,Card,CardBody,CardFooter,CardImg,Badge} from 'reactstrap'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


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
    <Col sm='4' lg='3' className='mb-3'>
      <Card className={'card-hover shadow border-4 border-danger'+cardClass}>
        <CardImg src={imagen} height='170' className='p-2' />
        <CardBody className='text-center'>
          <Badge pill color='danger'># {pokemon.id} </Badge>
          <label className='text-capitalize fw-bold'>{pokemon.name}</label>
        </CardBody>
        <CardFooter className='bg-danger'>
          <Link to={'/pokemon/'+pokemon.name} className='btn btn-dark'>Información</Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default CardPokemon