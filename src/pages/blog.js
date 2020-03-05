import React from 'react'
import Layout from '../components/Layout'
import {gatsby, useStaticQuery} from 'gatsby';

const BlogPage = () => {

    let data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
    edges {
      node {
       	frontmatter{
          title
          date
        }
      }
    }
  }
        }
    `)
    return (
        <Layout>

        <div>
            <h1>
                Blog
            </h1>
            <p>
                Posts will show up here later on.
            </p>
        </div>
        <ol>
            {
                data.allMarkdownRemark.edges.map(post => {
                    return(
                        <li>
                            <h2>{post.node.frontmatter.title}</h2>
                            <p>
                                {post.node.frontmatter.date}
                            </p>
                        </li>
                    )
                })
            }
        </ol>
        </Layout>
    )
}

export default BlogPage