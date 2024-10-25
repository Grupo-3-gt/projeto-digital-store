import collectionImg1 from "../../assets/img/png-jpeg/collection-1.png"
import collectionImg2 from "../../assets/img/png-jpeg/collection-2.png"
import collectionImg3 from "../../assets/img/png-jpeg/collection-3.png"
import "./style.css"
import icon1 from "../../assets/img/png-jpeg/tshirt-collection.png"
import icon2 from "../../assets/img/png-jpeg/trousers-collection.png"
import icon3 from "../../assets/img/png-jpeg/cap-collection.png"
import icon4 from "../../assets/img/png-jpeg/headphones-collection.png"
import icon5 from "../../assets/img/png-jpeg/sneakers-collection.png"


function Collection () {
    return ( 
       <section>
        <h3> Coleções em Destaque </h3>
      
      <div className="collection-card"> 
        <div>
           <p>30% OFF</p>
            <img src={ collectionImg1}/> 
            <button class='cardbutton'>Comprar</button>

        </div>
        <div>
            <p>30% OFF</p>
            <img src={collectionImg2}/>
            <button class='cardbutton'>Comprar</button>

        </div>
        <div>
            <p>30% OFF</p>
            <img src={collectionImg3}/>
            <button class='cardbutton'>Comprar</button>

        </div>
      </div> 
    
        <div class="icons">
        <h3>Coleções em Destaque</h3>
            <img className="garments" src={icon1}/>
            <img className="garments" src={icon2}/>
            <img className="garments" src={icon3}/>
            <img className="garments" src={icon4}/>
            <img className="garments" src={icon5}/>
            
        </div>
       </section>
    ) 

}
 export default Collection 