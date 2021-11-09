import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainter from '../components/FormContainer'
import { listExpoDetails, updateExpo } from '../actions/expoActions'
import { EXPO_UPDATE_RESET } from '../constants/expoConstants'

const ExpoEditScreen = ({ match, history }) => {
    const expoId = match.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [dimension, setDimension] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const expoDetails = useSelector((state) => state.expoDetails)
    const { loading, error, expo } = expoDetails

    const expoUpdate = useSelector((state) => state.expoUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate
    } = expoUpdate

    useEffect(() => {
        if(successUpdate) {
            dispatch({type: EXPO_UPDATE_RESET})
            history.push('/admin/expolist')
        } else {
            if(!expo.name || expo._id !== expo.id){
                dispatch(listExpoDetails(expoId))
            } else {
                setName(expo.name)
                setImage(expo.image)
                setCategory(expo.category)
                setDescription(expo.description)
                setDimension(expo.dimension)
            }
        }
    }, [dispatch, history, expoId, expo, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)

        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateExpo({
            _id: expoId,
            name,
            image,
            category,
            description,
            dimension
        }))
    }

    return (
        <>
            <Link to='/admin/expolist' className='btn btn-light my-3'>
                RETOUR
            </Link>
            <FormContainter>
                <h1 className='my-5'>Gérer le Porftolio</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message>{errorUpdate}</Message>}
                {loading ? <Loader />: error ? <Message variant='danger'>{error}</Message> : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control 
                            type='name' 
                            placeholder='Nom'
                            value={name}
                            onChange={(e) => setName(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                                <Form.Control 
                                type='text' 
                                placeholder="Entrez l\'url de l\'image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}>
                                </Form.Control>
                                <Form.File 
                                    id='image-file' 
                                    label='Choisissez le fichier'
                                    custom
                                    onChange={uploadFileHandler}>
                                </Form.File>
                                {uploading && <Loader/>}
                        </Form.Group>

                        <Form.Group controlId='category'>
                            <Form.Label>Catégorie</Form.Label>
                                <Form.Control 
                                type='text' 
                                placeholder="Entrez la catégorie"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>description</Form.Label>
                            <Form.Control 
                            type='text' 
                            placeholder="Ajoutez une description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='dimension'>
                            <Form.Label>dimension</Form.Label>
                            <Form.Control 
                            type='text' 
                            placeholder="Ajoutez une dimension"
                            value={dimension}
                            onChange={(e) => setDimension(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>
                    Mettre à jour
                </Button>
                    </Form>
                )}
            </FormContainter>
        </>
    )
}

export default ExpoEditScreen
