import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  networkSidebar: [
    "intro",
    "network",
    {
      type: "category",
      label: "FTSOv2",
      collapsed: true,
      link: { type: "doc", id: "ftso/overview" },
      items: [
        "ftso/getting-started",
        "ftso/feeds",
        {
          type: "category",
          label: "Guides",
          collapsed: true,
          link: {
            slug: "/category/ftso/guides",
            type: "generated-index",
            description:
              "Learn how to integrate FTSOv2's block-latency feeds into your application.",
          },
          items: [{ type: "autogenerated", dirName: "ftso/guides" }],
        },
        {
          type: "category",
          label: "Solidity Reference",
          collapsed: true,
          link: { type: "doc", id: "ftso/solidity-reference-overview" },
          items: [
            { type: "autogenerated", dirName: "ftso/solidity-reference" },
          ],
        },
        {
          type: "category",
          label: "Scaling",
          collapsed: true,
          link: { type: "doc", id: "ftso/scaling/overview" },
          items: [
            "ftso/scaling/getting-started",
            "ftso/scaling/anchor-feeds",
            {
              type: "category",
              label: "Scaling Guides",
              collapsed: true,
              link: {
                slug: "/category/ftso/scaling/guides",
                type: "generated-index",
                description:
                  "Learn how to integrate the core infrastructure of FTSOv2 into your application.",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "ftso/scaling/guides",
                },
              ],
            },
            {
              type: "category",
              label: "Solidity Reference",
              collapsed: true,
              link: {
                type: "doc",
                id: "ftso/scaling/solidity-reference-overview",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "ftso/scaling/solidity-reference",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "FDC",
      collapsed: true,
      link: { type: "doc", id: "fdc/overview" },
      items: [
        "fdc/getting-started",
        "fdc/attestation-types",
        {
          type: "category",
          label: "Guides",
          collapsed: true,
          link: {
            type: "generated-index",
          },
          items: [{ type: "autogenerated", dirName: "fdc/guides" }],
        },
      ],
    },
    {
      type: "category",
      label: "FAssets",
      collapsed: true,
      link: { type: "doc", id: "fassets/overview" },
      items: [
        "fassets/getting-started",
        {
          type: "category",
          label: "Guides",
          collapsed: true,
          link: {
            type: "generated-index",
          },
          items: [{ type: "autogenerated", dirName: "fassets/guides" }],
        },
      ],
    },
    {
      type: "category",
      label: "Run a Node",
      link: {
        type: "generated-index",
        description: "Participate in Flare by running a node.",
      },
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "run-a-node" }],
    },
  ],
};

export default sidebars;
