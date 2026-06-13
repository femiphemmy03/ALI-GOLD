import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const setCategory = (id) => {
    if (id === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', id);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="shop-page container section">
      <div className="section-head">
        <span className="eyebrow">Catalogue</span>
        <h2>Shop everything</h2>
      </div>

      <div className="shop-layout">
        <aside className="shop-filters">
          <h4>Categories</h4>
          <button
            className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}
          >
            All Products
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter-pill ${activeCategory === c.id ? 'active' : ''}`}
              onClick={() => setCategory(c.id)}
            >
              <span className="pill-icon">{c.icon}</span> {c.name}
            </button>
          ))}
        </aside>

        <div className="shop-results">
          <p className="results-count">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</p>
          <div className="product-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
