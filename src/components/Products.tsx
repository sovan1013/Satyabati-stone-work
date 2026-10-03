import { productsData } from '../data/productsData';

export function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-heading center">
          <p className="section-tag">Products</p>
          <h2>Stone Aggregate Products</h2>
        </div>

        <div className="product-grid">
          {productsData.map((product) => (
            <article key={product.title} className="product-card">
              <div className="product-icon" aria-hidden="true">▣</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>

        <div className="cta-row center">
          <a href="#contact" className="btn btn-primary">
            Enquire About Product
          </a>
        </div>
      </div>
    </section>
  );
}
