import React, { useState } from 'react';
import { Code2, GitBranch, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon } from '../../components/Icons';
import Button from '../../components/Button/Button';
import './Code.css';

export default function CodeSection() {
  const [copied, setCopied] = useState(false);

  const sampleSnippet = `// Reusable React Component Architecture
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const ProjectCard = ({ project, onSelect }) => {
  const { user } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleAction = async (e) => {
    e.stopPropagation();
    try {
      await apiClient.post(\`/api/v1/projects/\${project.id}/bookmark\`);
      setIsBookmarked((prev) => !prev);
    } catch (err) {
      console.error('API Mutation Error:', err.message);
    }
  };

  return (
    <article className="project-card" onClick={onSelect}>
      <header className="card-header">
        <span className="badge">{project.category}</span>
        <button onClick={handleAction} aria-label="Bookmark">
          {isBookmarked ? '★ Saved' : '☆ Save'}
        </button>
      </header>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="section section-bg-dark code-section">
      <div className="container">
        <div className="code-editorial-grid">
          {/* Left Column: Narrative & GitHub Link */}
          <div className="code-narrative-col">
            <span className="eyebrow-badge eyebrow-dark">PRODUCTION CODE</span>

            <h2 className="code-section-title">
              BUILT WITH CODE.<br />
              <span className="text-blue-light">NOT JUST CONCEPTS.</span>
            </h2>

            <p className="code-section-desc">
              Every interface and system I engineer is backed by clean, maintainable, modular JavaScript and React code designed for real production workflows.
            </p>

            <div className="github-explore-card">
              <div className="explore-card-top">
                <GithubIcon size={28} className="github-large-icon" />
                <div>
                  <h3 className="explore-card-title">GitHub</h3>
                  <span className="explore-card-handle">github.com/MathanKumarMP</span>
                </div>
              </div>

              <p className="explore-card-copy">
                Explore the code behind my projects, client builds, and experimental full-stack applications.
              </p>

              <div className="explore-actions">
                <Button
                  href="https://github.com/MathanKumarMP"
                  target="_blank"
                  variant="dark-outline"
                  size="md"
                  icon={ArrowUpRight}
                  ariaLabel="View Mathan Kumar GitHub Profile"
                >
                  View GitHub →
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Large Code Editor Visual */}
          <div className="code-editor-col">
            <div className="dark-code-window">
              <div className="code-window-top">
                <div className="window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="window-tab-active">
                  <Code2 size={13} className="text-blue-light" />
                  <span>ProjectCard.jsx</span>
                </div>
                <button
                  type="button"
                  className="code-copy-btn"
                  onClick={copyCode}
                  aria-label="Copy code snippet"
                >
                  {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="code-window-editor">
                <pre className="code-pre">
                  <code>
                    <span className="line"><span className="ln">01</span><span className="c-comment">// Reusable React Component Architecture</span></span>
                    <span className="line"><span className="ln">02</span><span className="c-keyword">import</span> React, &#123; useState, useEffect &#125; <span className="c-keyword">from</span> <span className="c-string">'react'</span>;</span>
                    <span className="line"><span className="ln">03</span><span className="c-keyword">import</span> &#123; useAuth &#125; <span className="c-keyword">from</span> <span className="c-string">'../hooks/useAuth'</span>;</span>
                    <span className="line"><span className="ln">04</span></span>
                    <span className="line"><span className="ln">05</span><span className="c-keyword">export const</span> <span className="c-component">ProjectCard</span> = (&#123; project, onSelect &#125;) =&gt; &#123;</span>
                    <span className="line"><span className="ln">06</span>  <span className="c-keyword">const</span> &#123; user &#125; = <span className="c-func">useAuth</span>();</span>
                    <span className="line"><span className="ln">07</span>  <span className="c-keyword">const</span> [isBookmarked, setIsBookmarked] = <span className="c-func">useState</span>(<span className="c-bool">false</span>);</span>
                    <span className="line"><span className="ln">08</span></span>
                    <span className="line"><span className="ln">09</span>  <span className="c-keyword">const</span> <span className="c-func">handleAction</span> = <span className="c-keyword">async</span> (e) =&gt; &#123;</span>
                    <span className="line"><span className="ln">10</span>    e.<span className="c-func">stopPropagation</span>();</span>
                    <span className="line"><span className="ln">11</span>    <span className="c-keyword">try</span> &#123;</span>
                    <span className="line"><span className="ln">12</span>      <span className="c-keyword">await</span> apiClient.<span className="c-func">post</span>(<span className="c-string">\`/api/v1/projects/\$&#123;project.id&#125;/bookmark\`</span>);</span>
                    <span className="line"><span className="ln">13</span>      <span className="c-func">setIsBookmarked</span>((prev) =&gt; !prev);</span>
                    <span className="line"><span className="ln">14</span>    &#125; <span className="c-keyword">catch</span> (err) &#123;</span>
                    <span className="line"><span className="ln">15</span>      console.<span className="c-func">error</span>(<span className="c-string">'API Mutation Error:'</span>, err.message);</span>
                    <span className="line"><span className="ln">16</span>    &#125;</span>
                    <span className="line"><span className="ln">17</span>  &#125;;</span>
                    <span className="line"><span className="ln">18</span></span>
                    <span className="line"><span className="ln">19</span>  <span className="c-keyword">return</span> (</span>
                    <span className="line"><span className="ln">20</span>    &lt;<span className="c-tag">article</span> <span className="c-attr">className</span>=<span className="c-string">"project-card"</span> <span className="c-attr">onClick</span>=&#123;onSelect&#125;&gt;</span>
                    <span className="line"><span className="ln">21</span>      &lt;<span className="c-tag">header</span> <span className="c-attr">className</span>=<span className="c-string">"card-header"</span>&gt;</span>
                    <span className="line"><span className="ln">22</span>        &lt;<span className="c-tag">span</span> <span className="c-attr">className</span>=<span className="c-string">"badge"</span>&gt;&#123;project.category&#125;&lt;/<span className="c-tag">span</span>&gt;</span>
                    <span className="line"><span className="ln">23</span>        &lt;<span className="c-tag">button</span> <span className="c-attr">onClick</span>=&#123;handleAction&#125;&gt;</span>
                    <span className="line"><span className="ln">24</span>          &#123;isBookmarked ? <span className="c-string">'★ Saved'</span> : <span className="c-string">'☆ Save'</span>&#125;</span>
                    <span className="line"><span className="ln">25</span>        &lt;/<span className="c-tag">button</span>&gt;</span>
                    <span className="line"><span className="ln">26</span>      &lt;/<span className="c-tag">header</span>&gt;</span>
                    <span className="line"><span className="ln">27</span>      &lt;<span className="c-tag">h3</span>&gt;&#123;project.title&#125;&lt;/<span className="c-tag">h3</span>&gt;</span>
                    <span className="line"><span className="ln">28</span>      &lt;<span className="c-tag">p</span>&gt;&#123;project.description&#125;&lt;/<span className="c-tag">p</span>&gt;</span>
                    <span className="line"><span className="ln">29</span>    &lt;/<span className="c-tag">article</span>&gt;</span>
                    <span className="line"><span className="ln">30</span>  );</span>
                    <span className="line"><span className="ln">31</span>&#125;;</span>
                  </code>
                </pre>
              </div>

              <div className="code-window-footer">
                <div className="footer-git-status">
                  <GitBranch size={12} />
                  <span>main • UTF-8 • React 19 • ESNext</span>
                </div>
                <span className="footer-status-ok">✔ Clean Build</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
