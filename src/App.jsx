export default function App(){
    document.title = "HOME";

// SPA: (S)ingle (P)age (A)pplication, mas não é estático
  return(
    <div>
      <h1>App</h1> 
      <div>
        <figure>
          <figcaption>
            Produtos em oferta...
          </figcaption>
          <img src="/img/grocery.webp" alt="mercado" />
        </figure>
      </div>
    </div>
  )

}