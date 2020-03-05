/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

module.exports.onCreateNode = ({node, actions}) =>{
    const { createNodeField } = actions
    if(node.internal.type === "MarkdownRemark"){
        console.log(JSON.stringify(node, undefined, 4));
    }
}