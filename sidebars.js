/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  doc: [
    'overview',
    {
      'Getting started': [
        'get-started/install',
        'get-started/quick-start',
        //'get-started/pipeline-config',
      ],
    },
    {
      Tutorials: [
        'tutorials/image-deduplication',
        'tutorials/music-recognition-system',
        'tutorials/reverse-image-search',
      ],
    },
    {
      'Supported pipelines': [
        'pipelines/image-embedding',
        'pipelines/music-embedding',
      ],
    },
    /*{
      'Supported operators': [
        'operators/image-loading-and-transforms',
        'operators/model-based-operators',
      ],
    },*/
    {
      Advanced: [
        'advanced/contributing-guide',
        'advanced/architectural-overview',
        'advanced/DAG-details',
        'advanced/engine-details',
        'advanced/layer-details',
        'advanced/hub-integration-and-caching',
        'advanced/image-ensemble-training',
        //'advanced/roadmap',
      ],
    },
  ],
};

module.exports = sidebars;
