import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'

const Profile = () => {
    //usei chaves pq vou tratar dados
    const { 
        site: {
            siteMetadata: {title, position, description}
        },
    } = useStaticQuery(
        graphql `
            query MyQuery {
                site {
                  siteMetadata {
                    author
                    description
                    title
                    position
                  }
                }
              }
              `
    )
    return (
        <div className="Profile-wrapper">
            <h1>{title}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Profile