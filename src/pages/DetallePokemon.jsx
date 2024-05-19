import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Row,Col,Card,CardBody,CardText,Badge,Progress, Container} from 'reactstrap'
import axios from 'axios'
import CardPokemon from '../components/Cardpokemon'

export const DetallePokemon = () => {
  const {id} = useParams ()
  const [pokemon,setPokemon] = useState([])
  const [especie,setEspecie] = useState([])
  const [habitat,setHabitat] = useState('Desconocido')
  const [descripcion,setDescripcion] = useState([])
  const [imagen,setImagen] = useState([])
  const [tipos,setTipos] = useState([])
  const [habilidades,setHabilidades] = useState([])
  const [estadisticas,setEstadisticas] = useState([])
  const [cardClass,setCardClass] = useState('d-none')
  useEffect( () =>{
    getPokemon()
  },[])

  const getPokemon = async()=>{
    const liga = 'https://pokeapi.co/api/v2/pokemon/'+id;
    axios.get(liga).then(async(response)=>{
      const respuesta = response.data
      setPokemon(respuesta)
      setImagen(respuesta.sprites.other['official-artwork'].front_default)
      await getTipos(respuesta.types)
      await getHabilidades(respuesta.abilities)
      await getEspecie(respuesta.species.name)
      await getEstadisticas(respuesta.stats)
      setCardClass('')
    })
  }

  const getTipos = async(tip)=>{
    let listaTipos = []
    tip.forEach( (t) =>{
      axios.get(t.type.url).then( async(response) =>{
        listaTipos.push(response.data.names[5].name)
        setTipos(listaTipos)
      })
    })
  }

  const getHabilidades = async(hab)=>{
    let listaHabilidades = []
    hab.forEach( (h) =>{
      axios.get(h.ability.url).then( async(response) =>{
        listaHabilidades.push(response.data.names[5].name)
        setHabilidades(listaHabilidades)
      })
    })
  }

  const getEstadisticas = async(es)=>{
    let listaEstadisticas = []
    es.forEach( (h) =>{
      axios.get(h.stat.url).then( async(response) =>{
        listaEstadisticas.push({'nombre' :response.data.names[5].name, 'valor':h.base_stat})
        setEstadisticas(listaEstadisticas)
      })
    })
  }

  const getEspecie = async(esp)=>{
    const liga = 'https://pokeapi.co/api/v2/pokemon-species/'+id;
    axios.get(liga).then(async(response)=>{
      const respuesta = response.data
      setEspecie(respuesta)
      if (respuesta.habitat != null) {
        await getHabitat(respuesta.habitat.url)
      }
      await getDescripcion(respuesta.flavor_text_entries)
  })
}
  const getHabitat = async(hab)=>{
    axios.get(hab).then(async(response) =>{
      setHabitat(response.data.names[1].name)
    })
  }

  const getDescripcion = async(desc)=>{
    let texto = '';
    desc.forEach( (d)=>{
      if(d.language.name == 'es'){
        texto = d.flavor_text
      }
    })
    setDescripcion(texto)
  }
  
  return (
    <Container className='bg-dark mt-3'>
      <Row>
        <Col>
        <Card className='shadow mt-3 mb-3'>
          <CardBody className='mt-3'>
            <Row>
              <Col className='text-end'>
                <Link to='/' className= 'btn btn-dark'>
                  <i className='fa-solid fa-home'></i> Inicio
                </Link>
              </Col>
            </Row>
            <Row className={cardClass}>
              <Col md='6'>
                <CardText className='h1 text-capitalize'>{pokemon.name}</CardText>
                <CardText className='fs-3'>{descripcion}</CardText>
                <CardText className='fs-5'>Altura: <b>{(pokemon.height)/10} m</b></CardText>
                <CardText className='fs-5'>Peso: <b>{(pokemon.weight)/10} kg</b></CardText>
                <CardText className='fs-5'>
                  Tipo: {tipos.map( (tip,i) => (
                  <Badge pill className='me-1' color='danger' key={i}>
                    {tip}
                  </Badge>
                  ))}
                </CardText>
                <CardText className='fs-5'>
                  Habilidades: {habilidades.map( (hab,i) => (
                  <Badge pill className='me-1' color='danger' key={i}>
                    {hab}
                  </Badge>
                  ))}
                </CardText>
                <CardText className='fs-5 text-capitalize'>Habitat: <b>{habitat}</b></CardText>
              </Col>
              <Col md='6'>
                <img src={imagen}></img>
              </Col>
              <Col md='12 mt-3'>
                <CardText className='fs-4 text-center'><b>Estadisticas</b></CardText>
              </Col>
              {estadisticas.map( (es,i) => (
              <Row key={i}>
                  <Col xs='6' md='3'><b>{es.nombre}</b></Col>
                  <Col xs='6' md='9'>
                    <Progress className='my-2' value={es.valor}>{es.valor}</Progress>
                  </Col>
              </Row>
              ))}
            </Row>
          </CardBody>
        </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DetallePokemon