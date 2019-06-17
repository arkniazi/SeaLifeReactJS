import  React,{Component} from 'react';
import Header from '../header';
import Banner from '../HomeSections/Banners';

export default class Home extends Component{

    render(){
        return(
            <div>
                <Header />
                <Banner />
            </div>
        )
    }
}