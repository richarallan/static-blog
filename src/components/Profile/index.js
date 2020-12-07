import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'

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
        <S.ProfileWrapper >
                <S.ProfileLink>
                <Avatar />
                    <S.ProfileAuthor>{title}</S.ProfileAuthor>
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileLink>
                <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile