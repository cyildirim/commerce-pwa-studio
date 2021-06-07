(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3623],{73772:function(e,n,i){"use strict";i.r(n),i.d(n,{_frontmatter:function(){return d},default:function(){return c}});var t=i(22122),a=i(19756),o=(i(15007),i(64983)),s=i(99536),r=i(93471),d={},m={_frontmatter:d},l=s.Z;function c(e){var n=e.components,i=(0,a.Z)(e,["components"]);return(0,o.mdx)(l,(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"environment-variables"},"Environment variables"),(0,o.mdx)("p",null,"Environment variable definitions are used for validation and documentation of the ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/configuration/"},"configuration management system")," in PWA Studio.\nBuild scripts normally use the ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/load-environment-file/"},"values set in the current environment"),", but it is sometimes necessary to use the definitions themselves, such as when an extension defines its own global config variables."),(0,o.mdx)("h2",{id:"access-environment-variable-definition-object"},"Access environment variable definition object"),(0,o.mdx)("p",null,"There are two ways to access the environment variable definitions object:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Third-party code should use the builtin target ",(0,o.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/api/buildpack/environment/definition-object/"},(0,o.mdx)("inlineCode",{parentName:"a"},"envVarDefinitions"))," when adding definitions."),(0,o.mdx)("li",{parentName:"ul"},"Core Buildpack code uses ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/Utilities/getEnvVarDefinitions.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"getEnvVarDefinitions()")),", which builds environment variable definitions for the project.\nIt starts with core variables listed below and then calls the ",(0,o.mdx)("inlineCode",{parentName:"li"},"envVarDefinitions")," target so installed extensions can add their own variables.")),(0,o.mdx)(r.Z,{mdxType:"Docs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-environment-variables-index-md-47cae258a4bfadd14384.js.map