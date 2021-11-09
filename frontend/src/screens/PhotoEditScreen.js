import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listPhotoDetails, updatePhoto } from '../actions/photoActions'
import { PHOTO_UPDATE_RESET } from '../constants/photoConstants'



const PhotoEditScreen = ({ match, history }) => {
    const photoId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [dimension, setDimension] = useState('')
    const [uploading, setUploading] = useState(false)
    
    const dispatch = useDispatch()

    const photoDetails = useSelector((state) => state.photoDetails)
    const { loading, error, photo } = photoDetails

    const photoUpdate = useSelector((state) => state.photoUpdate)
    const { 
        loading: loadingUpdate, 
        error: errorUpdate, 
        success: successUpdate 
    } = photoUpdate

    useEffect(() => {
            if(successUpdate) {
                dispatch({ type: PHOTO_UPDATE_RESET})
                history.push('/admin/photolist')
            } else {
                if(!photo.name || photo._id !== photoId) {
                    dispatch(listPhotoDetails(photoId))
                } else {
                    setName(photo.name)
                    setPrice(photo.price)
                    setImage(photo.image)
                    setCategory(photo.category)
                    setCountInStock(photo.countInStock)
                    setDescription(photo.description)
                    setDimension(photo.dimension)
                }
            }
        }, [dispatch, history, photoId, photo, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try{
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
        dispatch(updatePhoto({
            _id: photoId,
            name,
            price,
            category,
            image,
            description,
            dimension,
            countInStock
        }))
        
    }
    return (
        <>
            <Link to='/admin/photolist' className='btn btn-light my-3'>
                RETOUR
            </Link>
            <FormContainer>
            <h1 className='my-5'>Gérer les photos</h1>
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message>{errorUpdate}</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
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

                <Form.Group controlId='price'>
                    <Form.Label>Prix</Form.Label>
                    <Form.Control 
                    type='number' 
                    placeholder='Entrez un prix'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}>
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

                <Form.Group controlId='countInStock'>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control 
                    type='number' 
                    placeholder='Entrez le stock'
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}>
                    </Form.Control>
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
            
            
        </FormContainer>
        </>
        
    )
}

export default PhotoEditScreen