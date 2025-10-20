import "./banner.scss";
import bannerImage from "/banner.jpg";


export default function Banner(){
    return(
        <section className="banner">

            <img src={bannerImage} alt="Banner da black" width={1440} height={390} />

            <div className="banner-conteiner">
            <div className="banner-texto">
                <h1>Venha conhecer nossas promoções</h1>
                <p><strong>50%Off</strong> nos produtos</p>
                <button>Ver produto</button>
            </div>
            </div>
        </section>
    );
}