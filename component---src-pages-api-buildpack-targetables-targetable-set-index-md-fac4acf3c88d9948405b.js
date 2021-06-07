(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4858],{27797:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return i},default:function(){return p}});var t=n(22122),s=n(19756),r=(n(15007),n(64983)),o=n(99536),l=n(83192),i={},d={_frontmatter:i},m=o.Z;function p(e){var a=e.components,n=(0,s.Z)(e,["components"]);return(0,r.mdx)(m,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"targetableset"},"TargetableSet"),(0,r.mdx)(l.Z,{mdxType:"Docs"}),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("p",null,"Code examples for using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetableSet")," class."),(0,r.mdx)("h3",{id:"import-the-class"},"Import the class"),(0,r.mdx)("p",null,"This class is available as a named import from ",(0,r.mdx)("inlineCode",{parentName:"p"},"@magento/pwa-buildpack"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'// The `TargetableSet` class is exported from `@magento/pwa-buildpack` as `Targetables`\nconst { Targetables } = require("@magento/pwa-buildpack");\n')),(0,r.mdx)("h3",{id:"create-a-bound-instance"},"Create a bound instance"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetProvider")," instance passed to your intercept function to create a ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetableSet")," instance bound to that ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetProvider"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'// The `TargetableSet` class is exported from `@magento/pwa-buildpack` as `Targetables`\nconst { Targetables } = require("@magento/pwa-buildpack");\n\nmodule.exports = (targets) => {\n  const targetables = Targetables.using(targets);\n};\n')),(0,r.mdx)("h3",{id:"create-a-targetable-object"},"Create a Targetable object"),(0,r.mdx)("p",null,"Use a bound ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetableSet")," instance to create a Targetable object given the module path (",(0,r.mdx)("inlineCode",{parentName:"p"},"modulePath"),").\nThis path can be module-resolveable (e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},'"@magento/venia-ui/lib/components/Button"'),") or module-root-relative (e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},'"lib/components/Button"'),")."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"NOTE:"),"\nIf the value is module-root-relative, the current module name is added automatically."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const { Targetables } = require('@magento/pwa-buildpack')\n\nmodule.exports = targets => {\n    const targetables = Targetables.using(targets);\n\n    const MainComponent = targetables.module(\n        '@magento/venia-ui/lib/components/Main/main.js'\n    );\n")),(0,r.mdx)("h3",{id:"set-special-features"},"Set special features"),(0,r.mdx)("p",null,"Extensions with special files, like ES Modules, CSS Modules, GraphQL queries, and others, need to set feature flags in the build so their code is loaded correctly.\nTo do this, they can tap the builtin ",(0,r.mdx)("inlineCode",{parentName:"p"},"specialFeatures")," target."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'targets.of("@magento/pwa-buildpack").specialFeatures.tap((features) => {\n  features[targets.name] = {\n    esModules: true,\n    graphqlQueries: true,\n    upward: true,\n  };\n});\n')),(0,r.mdx)("p",null,"You can use a bound ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetableSet")," instance to do the same thing with less code using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setSpecialFeatures()")," function."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'targetables.setSpecialFeatures("esModules", "graphqlQueries", "upward");\n')),(0,r.mdx)("h3",{id:"define-environment-variables"},"Define environment variables"),(0,r.mdx)("p",null,"Extensions can add custom environment configuration settings to a storefront.\nTo do this, they can tap the builtin ",(0,r.mdx)("inlineCode",{parentName:"p"},"envVarDefinitions")," target."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'targets.of("@magento/pwa-buildpack").envVarDefinitions.tap((defs) => {\n  defs.sections.push({\n    name: "Support Chat",\n    variables: [\n      {\n        name: "SUPPORT_CHAT_API_KEY",\n        type: "str",\n        desc: "API key for the chat service",\n      },\n    ],\n  });\n});\n')),(0,r.mdx)("p",null,"You can use a bound ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetableSet")," instance to do the same with less code using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"defineEnvVars()")," function."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'targetables.defineEnvVars("Support Chat", [\n  {\n    name: "SUPPORT_CHAT_API_KEY",\n    type: "str",\n    desc: "API key for the chat service",\n  },\n]);\n')),(0,r.mdx)("p",null,"This method also accepts an array of flag names, a flags object with boolean values, or a mixture of these as arguments."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-targetables-targetable-set-index-md-fac4acf3c88d9948405b.js.map