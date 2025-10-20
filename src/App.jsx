
import './app.scss'
import Header from './componets/header'
import Banner from './componets/banner'
import Categorias from './componets/categorias'
import Produtos from './componets/produtos'
import Parceiros from './componets/parceiros'
import Marcas from './componets/marcas'
import Newsletter from './componets/newsletter'
import Footer from './componets/footer'

function App() {
  

  return (
    <>
      <main>        
        <Header />
        <Banner />
        <Categorias />
        <Produtos carroselOption={0} />
        <Parceiros />
        <Produtos carroselOption={1} />
        <Parceiros />
        <Marcas />
        <Produtos carroselOption={1} />
        <Newsletter />
        <Footer />
      </main>
       
    </>
  )
}

export default App
