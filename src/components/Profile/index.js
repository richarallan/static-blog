import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor'

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
                <S.ProfileLink to={`/`} cover direction="left" bg={getThemeColor()} duration={0.6}>
                <Avatar />
                    <S.ProfileAuthor>{title}</S.ProfileAuthor>
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileLink>
                <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile