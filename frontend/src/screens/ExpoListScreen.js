import React, { useEffect } from 'react'
import { LinkContainer} from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listExpos, deleteExpo, createExpo } from '../actions/expoActions'
import { EXPO_CREATE_RESET } from '../constants/expoConstants'

const ExpolistScreen = ({ history }) => {

    const dispatch = useDispatch()

    const expoList = useSelector(state => state.expoList)
    const { loading, error, expos } = expoList

    const expoDelete = useSelector(state => state.expoDelete)
    const { 
        loading: loadingDelete, 
        error: errorDelete, 
        success: successDelete 
    } = expoDelete

    const expoCreate = useSelector(state => state.expoCreate)
    const { 
        loading: loadingCreate, 
        error: errorCreate, 
        success: successCreate ,
        expo: createdExpo,
    } = expoCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: EXPO_CREATE_RESET })

        if (!userInfo.isAdmin) {
           history.push('/login')
        }

        if(successCreate){
            history.push(`/admin/expo/${createdExpo._id}/edit`)
        } else {
            dispatch(listExpos())
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createdExpo])

    const deleteHandler = (id) => {
        if(window.confirm('Êtes vous sûr de vouloir poursuivre ?')){
           dispatch(deleteExpo(id))
        }
    }

    const createExpoHandler = () => {
        dispatch(createExpo())
    }

    return (
        <>
            <Row>
                <Col>
                <h1 className='my-5'>Photos (porfolio)</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createExpoHandler}>
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
                        <th>CATEGORY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expos.map(expo => (
                        <tr key={expo._id}>
                            <td>{expo._id}</td>
                            <td>{expo.name}</td>
                            <td>
                                {expo.category}
                            </td>
                            <td>
                                <LinkContainer to={`/admin/expo/${expo._id}/edit`}>
                                    <Button 
                                        variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>
                                    </Button>
                                </LinkContainer>
                                <Button 
                                    variant='danger' className='btn-sm' 
                                    onClick={() =>
                                        deleteHandler(expo._id)}>
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

export default ExpolistScreen
