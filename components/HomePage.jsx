"use client"

export default function HomePage({ onNavigate }) {
  const categories = [
    { name: "Flores Secas", icon: "🌾" },
    { name: "Acessórios", icon: "🏺" },
    { name: "Bromelíaceas", icon: "🌿" },
    { name: "Para Presentear", icon: "🎁" },
    { name: "Plantas Grandes", icon: "🌳" },
    { name: "Vasos", icon: "🏺" },
  ]

  const bottomCategories = [
    { name: "Kit de Sementes", icon: "📦" },
    { name: "Flores Comestíveis", icon: "🌸" },
    { name: "Hortaliças", icon: "🥬" },
    { name: "Ervas e Condimentos", icon: "🌿" },
    { name: "Flores", icon: "🌺" },
    { name: "Gramas", icon: "🌱" },
  ]

  const products = [
    {
      name: "Jiboia Verde",
      price: "R$ 182,90",
      installments: "ou em até 4x R$ 45,72",
      image: "/green-plant-in-white-pot.jpg",
    },
    {
      name: "Jiboia Verde",
      price: "R$ 182,90",
      installments: "ou em até 4x R$ 45,72",
      image: "/green-plant-in-white-pot.jpg",
    },
    {
      name: "Jiboia Verde",
      price: "R$ 182,90",
      installments: "ou em até 4x R$ 45,72",
      image: "/green-plant-in-white-pot.jpg",
    },
    {
      name: "Jiboia Verde",
      price: "R$ 182,90",
      installments: "ou em até 4x R$ 45,72",
      image: "/green-plant-in-white-pot.jpg",
    },
    {
      name: "Jiboia Verde",
      price: "R$ 182,90",
      installments: "ou em até 4x R$ 45,72",
      image: "/green-plant-in-white-pot.jpg",
    },
    {
      name: "Jiboia Verde",
      price: "R$ 182,90",
      installments: "ou em até 4x R$ 45,72",
      image: "/green-plant-in-white-pot.jpg",
    },
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1>Bem-vindo ao Anêmo</h1>
          <p>Sua loja online de plantas e acessórios para jardinagem</p>
          <img src="/lush-green-forest-canopy.jpg" alt="Plantas verdes" className="hero-image" />
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="category-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-item" onClick={() => onNavigate("product")}>
                <div className="category-circle">{category.icon}</div>
                <div className="category-label">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="product-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card" onClick={() => onNavigate("product")}>
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-installments">{product.installments}</div>
                <button className="btn btn-primary">Comprar</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="decorative-section"></div>

      <section className="categories-section">
        <div className="container">
          <div className="category-grid">
            {bottomCategories.map((category, index) => (
              <div key={index} className="category-item" onClick={() => onNavigate("product")}>
                <div className="category-circle">{category.icon}</div>
                <div className="category-label">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="product-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card" onClick={() => onNavigate("product")}>
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-installments">{product.installments}</div>
                <button className="btn btn-primary">Comprar</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
