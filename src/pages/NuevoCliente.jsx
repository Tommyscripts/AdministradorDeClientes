import {useNavigate, Form, useActionData} from 'react-router-dom'
import Formulario from '../components/Formulario'
import Errores from '../components/Errores'

export async function action({request}) {
     const formData = await request.formData()
     const datos = Object.fromEntries(formData)
     const errores = []
          if(Object.values(datos).includes('')){
              errores.push('Todos los campos son obligatorios')
          }
          if(Object.keys(errores).length){
            return errores
          }
     return {}
} 

const NuevoCliente = () => {

  const navigate = useNavigate()
  const errores = useActionData()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'> Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>

        <div className="flex justify-end">
            <button
              className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
              onClick={() => navigate(-1)}
            >
              volver
            </button>
        </div>
        <div className='bg-white shadow rounder-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
          {errores?.length && errores.map((error, i) => <Errores key={1}>{error}</Errores> )}
          <Form 
            method='post'
          >
            <Formulario />
            <input
               type="submit"
               className='mt-5 w-full bg-blue-800 uppercase p-3  font-bold text-white text-lg'
               value="Registrar cliente"
            />
            </Form>
        </div>
    </>
  )
}

export default NuevoCliente
