(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5115],{74992:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a=t(27490),r=t(12265),l=(t(15007),t(64983)),o=t(99536),d=t(20319),i=["components"],m={},s={_frontmatter:m},p=o.Z;function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.mdx)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"targetableesmodulearray"},"TargetableESModuleArray"),(0,l.mdx)(d.Z,{mdxType:"Docs"}),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)("p",null,"Code examples for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleArray")," class."),(0,l.mdx)("h3",{id:"export-plainhtmlrenderer-and-pagebuilder-in-a-list"},"Export PlainHtmlRenderer and PageBuilder in a list"),(0,l.mdx)("p",null,"This example uses the ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleArray")," class to add ",(0,l.mdx)("inlineCode",{parentName:"p"},"PageBuilder")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"PlainHtmlRenderer")," to the array exported by the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/RichContent/richContentRenderers.js"},(0,l.mdx)("inlineCode",{parentName:"a"},"richContentRenderers.js")," file"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'// Create a TargetableESModuleArray linked to the richContentRenderers.js file\nconst renderers = targetable.esModuleArray(\n  "@magento/venia-ui/lib/components/RichContent/richContentRenderers.js"\n);\n\n// Push PageBuilder and PlainHtmlRenderer to the end of the array\nrenderers.push(\'import * as PageBuilder from "@magento/pagebuilder"\');\nrenderers.push(\n  \'import * as PlainHtmlRenderer from "@magento/venia-ui/lib/components/RichContent/plainHtmlRenderer"\'\n);\n')),(0,l.mdx)("p",null,"The file linked to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleArray"),' class must be a module that export an empty array.\nWithout the module, the loader has nothing to "load" and will not execute.\nCode editors and linters may also complain if the module is missing.'),(0,l.mdx)("p",null,"After the transforms above, ",(0,l.mdx)("inlineCode",{parentName:"p"},"richContentRenderers.js")," enters the bundle as:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'import * as PageBuilder from "@magento/pagebuilder";\nimport * as PlainHtmlRenderer from "@magento/venia-ui/lib/components/RichContent/plainHtmlRenderer";\n\nexport default [PageBuilder, PlainHtmlRenderer];\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-targetables-targetable-es-module-array-index-md-d27240e017ce91378812.js.map