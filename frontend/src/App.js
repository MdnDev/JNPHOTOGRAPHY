import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './screens/Portfolio';
import Galleries from './screens/Galleries';
import Boutique from './screens/Boutique';
import Livres from './screens/Livres';
import Impressions from './screens/Impressions';
import About from './screens/About';
import Contact from './screens/Contact';
import PicDetail from './screens/Detail Components/PicDetail';
import ImpDetail from './screens/Detail Components/ImpDetail';


import PaysageScreen from './screens/PaysageScreen';
import PayDetail from './screens/Detail Components/PayDetail';
import PortraitCompDetail from './screens/Detail Components/PortraitCompDetail';
import PortraitScreen from './screens/PortraitScreen';
import VilleCompDetail from './screens/Detail Components/VilleCompDetail';
import VilleScreen from './screens/VilleScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import PhotoListScreen from './screens/PhotoListScreen';
import ExpoListScreen from './screens/ExpoListScreen';
import PhotoEditScreen from './screens/PhotoEditScreen';
import ExpoEditScreen from './screens/ExpoEditScreen';
import OrderListScreen from './screens/OrderListScreen';





function App() {

  
  return (

    <Router>
      
      <Header/>
      <main>
        <Container>

          <Switch>
            
            <Route exact path="/" component={Portfolio}/>
            <Route path="/expo/:id" component={PicDetail}/>
           
            <Route path="/galleries" component={Galleries}/>
            <Route path="/paysage/:id" component={PayDetail}/>
            <Route path="/paysage" component={PaysageScreen}/>
            
            
            <Route exact path="/portrait" component={PortraitScreen}/>
            <Route path="/portrait/:id" component={PortraitCompDetail}/>
            
            
            <Route path="/ville/:id" component={VilleCompDetail}/>
            <Route path="/ville" component={VilleScreen}/>
            
           
            
            <Route path="/boutique" component={Boutique}/>
            <Route path="/livres" component={Livres}/>

            <Route path="/impressions" component={Impressions}/>
            <Route path="/impression/:id" component={ImpDetail}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>

            <Route path="/register" component={RegisterScreen}/>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/profile" component={ProfileScreen}/>
            <Route path="/shipping" component={ShippingScreen}/>
            <Route path="/payment" component={PaymentScreen}/>
            <Route path="/placeorder" component={PlaceOrderScreen}/>
            <Route path="/order/:id" component={OrderScreen}/>
            <Route path="/admin/orderlist" component={OrderListScreen}/>
            <Route path="/admin/userlist" component={UserListScreen}/>
            <Route path="/admin/photolist" component={PhotoListScreen}/>
            <Route path="/admin/expolist" component={ExpoListScreen}/>
            <Route path="/admin/user/:id/edit" component={UserEditScreen}/>
            <Route path="/admin/photo/:id/edit" component={PhotoEditScreen}/>
            <Route path="/admin/expo/:id/edit" component={ExpoEditScreen}/>
            
            
            
            
          </Switch>

        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
