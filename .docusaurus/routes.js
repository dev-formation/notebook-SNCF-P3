import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/notebook-SNCF-P3/__docusaurus/debug',
    component: ComponentCreator('/notebook-SNCF-P3/__docusaurus/debug', 'f6a'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/__docusaurus/debug/config',
    component: ComponentCreator('/notebook-SNCF-P3/__docusaurus/debug/config', 'ba5'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/__docusaurus/debug/content',
    component: ComponentCreator('/notebook-SNCF-P3/__docusaurus/debug/content', '37d'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/__docusaurus/debug/globalData',
    component: ComponentCreator('/notebook-SNCF-P3/__docusaurus/debug/globalData', 'f0b'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/__docusaurus/debug/metadata',
    component: ComponentCreator('/notebook-SNCF-P3/__docusaurus/debug/metadata', '672'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/__docusaurus/debug/registry',
    component: ComponentCreator('/notebook-SNCF-P3/__docusaurus/debug/registry', 'b02'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/__docusaurus/debug/routes',
    component: ComponentCreator('/notebook-SNCF-P3/__docusaurus/debug/routes', 'a06'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/markdown-page',
    component: ComponentCreator('/notebook-SNCF-P3/markdown-page', '2e7'),
    exact: true
  },
  {
    path: '/notebook-SNCF-P3/docs',
    component: ComponentCreator('/notebook-SNCF-P3/docs', '00e'),
    routes: [
      {
        path: '/notebook-SNCF-P3/docs/category/fondations',
        component: ComponentCreator('/notebook-SNCF-P3/docs/category/fondations', 'd54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/notebook-SNCF-P3/docs/category/front-end',
        component: ComponentCreator('/notebook-SNCF-P3/docs/category/front-end', '007'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/notebook-SNCF-P3/docs/fondations/architecture-web',
        component: ComponentCreator('/notebook-SNCF-P3/docs/fondations/architecture-web', 'e85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/notebook-SNCF-P3/docs/front-end/introduction-css',
        component: ComponentCreator('/notebook-SNCF-P3/docs/front-end/introduction-css', 'd93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/notebook-SNCF-P3/docs/front-end/introduction-html',
        component: ComponentCreator('/notebook-SNCF-P3/docs/front-end/introduction-html', 'dda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/notebook-SNCF-P3/docs/lexique',
        component: ComponentCreator('/notebook-SNCF-P3/docs/lexique', '69b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/notebook-SNCF-P3/docs/planning',
        component: ComponentCreator('/notebook-SNCF-P3/docs/planning', '0d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/notebook-SNCF-P3/',
    component: ComponentCreator('/notebook-SNCF-P3/', '82a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
