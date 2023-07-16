import React, { useEffect } from 'react'
import { LinkContainer} from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listPhotos, deletePhoto, createPhoto } from '../actions/photoActions'
import { PHOTO_CREATE_RESET } from '../constants/photoConstants'

const PhotoListScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const photoList = useSelector(state => state.photoList)
    const { loading, error, photos } = photoList

    const photoDelete = useSelector(state => state.photoDelete)
    const { 
        loading: loadingDelete, 
        error: errorDelete, 
        success: successDelete 
    } = photoDelete

    const photoCreate = useSelector(state => state.photoCreate)
    const { 
        loading: loadingCreate, 
        error: errorCreate, 
        success: successCreate ,
        photo: createdPhoto,
    } = photoCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: PHOTO_CREATE_RESET })

        if (!userInfo.isAdmin) {
           history.push('/login')
        }

        if(successCreate){
            history.push(`/admin/photo/${createdPhoto._id}/edit`)
        } else {
            dispatch(listPhotos())
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createdPhoto])

    const deleteHandler = (id) => {
        if(window.confirm('Êtes vous sûr de vouloir poursuivre ?')){
           dispatch(deletePhoto(id))
        }
    }

    const createPhotoHandler = () => {
        dispatch(createPhoto())
    }

    return (
        <>
            <Row>
                <Col>
                <h1 className='my-5'>Photos à Tirer (Boutique)</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createPhotoHandler}>
                        <i className='fas fa-plus'></i>Intégrer une photo
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <Loader/>}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <Loader/>}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>PRIX</th>
                        <th>CATEGORY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map(photo => (
                        <tr key={photo._id}>
                            <td>{photo._id}</td>
                            <td>{photo.name}</td>
                            <td>{photo.price}€</td>
                            <td>
                                {photo.category}
                            </td>
                            <td>
                                <LinkContainer to={`/admin/photo/${photo._id}/edit`}>
                                    <Button 
                                        variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>
                                    </Button>
                                </LinkContainer>
                                <Button 
                                    variant='danger' className='btn-sm' 
                                    onClick={() =>
                                        deleteHandler(photo._id)}>
                                        <i className='fas fa-trash'></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
             )}
        </>
    )
}

export default PhotoListScreen
