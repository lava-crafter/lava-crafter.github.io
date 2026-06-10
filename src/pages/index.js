import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
  const {i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-CN';

  const copy = isZh
    ? {
        title: 'Lava Crafter 文档',
        description: 'Lava Note 与 Map Timeline Tool 的技术文档。',
        heroTitle: 'Lava Crafter 文档',
        heroSubtitle: '两个项目的技术文档：lava_note 和 map_timeline_tool。',
        primaryHeroButton: '前往 Map Timeline Tool 网站',
        mapDocsButton: 'Map Timeline Tool 技术文档',
        lavaDocsButton: 'Lava Note 技术文档',
        lavaCardTitle: 'lava_note',
        lavaCardDescription: '手写输入、PDF 标注、数学编辑、存储与性能架构相关的技术文档。',
        mapCardTitle: 'map_timeline_tool',
        mapCardDescription: '点位记录应用的技术文档：架构、数据模型、地图与定位流程、导入导出和测试。',
        openDocs: '打开技术文档',
        openProjectSite: '打开项目网站',
      }
    : {
        title: 'Lava Crafter Docs',
        description: 'Technical documentation for Lava Note and Map Timeline Tool.',
        heroTitle: 'Lava Crafter Docs',
        heroSubtitle: 'Technical documentation for two projects: lava_note and map_timeline_tool.',
        primaryHeroButton: 'Go to Map Timeline Tool site',
        mapDocsButton: 'Map Timeline Tool technical docs',
        lavaDocsButton: 'Lava Note technical docs',
        lavaCardTitle: 'lava_note',
        lavaCardDescription: 'Tech docs for the handwriting, PDF annotation, math editor, storage, and performance architecture.',
        mapCardTitle: 'map_timeline_tool',
        mapCardDescription: 'Tech docs for the point logging app: architecture, data model, map/location flow, export/import, and testing.',
        openDocs: 'Open technical docs',
        openProjectSite: 'Open project site',
      };

  return (
    <Layout title={copy.title} description={copy.description}>
      <main className="container margin-vert--lg home-page">
        <header className="hero hero--primary margin-bottom--lg home-hero">
          <div className="hero__inner">
            <h1 className="hero__title">{copy.heroTitle}</h1>
            <p className="hero__subtitle">{copy.heroSubtitle}</p>
            <div className="project-actions">
              <a className="button button--lg hero-button hero-button--map" href="https://lava-crafter.github.io/map_timeline_tool/" target="_blank" rel="noreferrer">
                {copy.primaryHeroButton}
              </a>
              <Link className="button button--secondary button--lg hero-button hero-button--soft" to="/docs/map-timeline-tool/overview">
                {copy.mapDocsButton}
              </Link>
              <Link className="button button--secondary button--lg hero-button hero-button--soft" to="/docs/lava-note/technical/overview">
                {copy.lavaDocsButton}
              </Link>
            </div>
          </div>
        </header>

        <section className="project-grid">
          <ProjectCard
            title={copy.lavaCardTitle}
            description={copy.lavaCardDescription}
            links={(
              <>
                <Link className="button button--primary project-button" to="/docs/lava-note/technical/overview">{copy.openDocs}</Link>
              </>
            )}
          />
          <ProjectCard
            title={copy.mapCardTitle}
            description={copy.mapCardDescription}
            links={(
              <>
                <Link className="button button--primary project-button" to="/docs/map-timeline-tool/overview">{copy.openDocs}</Link>
                <a className="button button--secondary project-button project-button--soft" href="https://lava-crafter.github.io/map_timeline_tool/" target="_blank" rel="noreferrer">{copy.openProjectSite}</a>
              </>
            )}
          />
        </section>
      </main>
    </Layout>
  );
}
