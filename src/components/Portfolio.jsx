import React, { useState } from 'react';
import './Portfolio.css';

const worksData = [
  {
    id: 1,
    title: '社内業務効率化システム',
    category: 'Web App',
    description: 'ReactとNode.jsを用いた社内向けタスク管理ツール。',
    imgColor: 'var(--color-accent-3)'
  },
  {
    id: 2,
    title: 'コーポレートサイトリニューアル',
    category: 'Website',
    description: 'モダンなUI/UXを取り入れた企業サイトの全面刷新。',
    imgColor: 'var(--color-accent-2)'
  },
  {
    id: 3,
    title: '売上分析ダッシュボード',
    category: 'Web App',
    description: '複雑なデータを視覚的にわかりやすく表示する分析ツール。',
    imgColor: 'var(--color-accent-4)'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'Website'];

  const filteredWorks = filter === 'All' 
    ? worksData 
    : worksData.filter(work => work.category === filter);

  return (
    <section id="works" className="section portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">WORKS</span>
          <h2 className="section-title">実績</h2>
        </div>
        
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredWorks.map(work => (
            <div key={work.id} className="portfolio-card">
              <div 
                className="portfolio-img-placeholder"
                style={{ backgroundColor: work.imgColor }}
              ></div>
              <div className="portfolio-info">
                <span className="portfolio-category">{work.category}</span>
                <h3 className="portfolio-title">{work.title}</h3>
                <p className="portfolio-desc">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
