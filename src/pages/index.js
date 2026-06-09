import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function ProjectCard({title, description, links}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-actions">
        {links}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Lava Crafter Docs" description="Technical documentation for Lava Note and Map Timeline Tool.">
      <main className="container margin-vert--lg">
        <header className="hero hero--primary margin-bottom--lg">
          <div className="hero__inner">
            <h1 className="hero__title">Lava Crafter Docs</h1>
            <p className="hero__subtitle">
              Technical documentation for two projects: lava_note and map_timeline_tool.
            </p>
            <div className="project-actions">
              <a className="button button--lg hero-button hero-button--map" href="https://lava-crafter.github.io/map_timeline_tool/" target="_blank" rel="noreferrer">
                Go to Map Timeline Tool site
              </a>
              <Link className="button button--secondary button--lg hero-button" to="/docs/map-timeline-tool/overview">
                Map Timeline Tool technical docs
              </Link>
              <Link className="button button--secondary button--lg hero-button" to="/docs/lava-note/technical/overview">
                Lava Note technical docs
              </Link>
            </div>
          </div>
        </header>

        <section className="project-grid">
          <ProjectCard
            title="lava_note"
            description="Tech docs for the handwriting, PDF annotation, math editor, storage, and performance architecture."
            links={(
              <>
                <Link className="button button--primary" to="/docs/lava-note/technical/overview">Open technical docs</Link>
              </>
            )}
          />
          <ProjectCard
            title="map_timeline_tool"
            description="Tech docs for the point logging app: architecture, data model, map/location flow, export/import, and testing."
            links={(
              <>
                <Link className="button button--primary" to="/docs/map-timeline-tool/overview">Open technical docs</Link>
                <a className="button button--secondary" href="https://lava-crafter.github.io/map_timeline_tool/" target="_blank" rel="noreferrer">Open project site</a>
              </>
            )}
          />
        </section>
      </main>
    </Layout>
  );
}
