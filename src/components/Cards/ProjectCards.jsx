import React from 'react'
import styled from 'styled-components'


const ActionLink = styled.a`
    flex: 1;
    text-align: center;
    padding: 10px 12px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.25s ease;
    border: 1px solid ${({ theme }) => theme.text_primary + 30};
    color: ${({ theme }) => theme.text_primary};
    &:hover {
        transform: translateY(-1px);
        background: ${({ theme }) => theme.primary + 20};
        border-color: ${({ theme }) => theme.primary + 40};
    }
`;

const Actions = styled.div`
    display: flex;
    gap: 10px;
    margin-top: auto;
`;

const Card = styled.div`
    width: 330px;
    min-height: 520px;
    background: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease;
    border: 1px solid ${({ theme }) => theme.text_primary + 10};
    backdrop-filter: blur(4px);
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 36px rgba(0,0,0,0.35);
        filter: brightness(1.06);
    }
`;

const ImageWrap = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(135deg, rgba(132,59,206,0.25), rgba(0,70,209,0.25));
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.25);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 4px 10px;
    border-radius: 999px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 11px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({project,setOpenModal}) => {
    const hasGithub = project.github && project.github.length > 0;
    const hasWeb = project.webapp && project.webapp.length > 0;
    const onCardClick = () => setOpenModal({state: true, project: project});
    return (
        <Card onClick={onCardClick}>
            <ImageWrap>
                {project.image ? (
                    <Image src={project.image} alt={project.title} />
                ) : null}
            </ImageWrap>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={`${project.title}-tag-${index}`}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, idx) => (
                    <Avatar key={`${project.title}-m-${idx}`} src={member.img}/>
                ))}
            </Members>
            {(hasGithub || hasWeb) && (
                <Actions onClick={(e) => e.stopPropagation()}>
                    {hasWeb && <ActionLink href={project.webapp} target="_blank" rel="noreferrer">Live</ActionLink>}
                    {hasGithub && <ActionLink href={project.github} target="_blank" rel="noreferrer">Code</ActionLink>}
                </Actions>
            )}
        </Card>
    )
}

export default ProjectCards