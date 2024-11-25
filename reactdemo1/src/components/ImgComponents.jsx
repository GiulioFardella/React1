import {Component} from "react"
class ImgComponent extends Component {
render (){
    return(
        <section>
            <h1> Immagini </h1>
            <img src = {this.props.src} alt="img"/>
        </section>

    )
}}

export default ImgComponent