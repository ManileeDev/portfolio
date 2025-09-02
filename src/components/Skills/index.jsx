import React from 'react'
import styled, { keyframes } from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 24px;
`

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeViewport = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 12px;
  padding: 6px 12px 18px 12px;
  animation: ${scroll} 22s linear infinite;
  &:hover { animation-play-state: paused; }
`;

const Pill = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
`;

const SkillImage = styled.img.attrs({
  referrerPolicy: 'no-referrer'
})`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  const flat = skills.flatMap((group) => group.skills);
  const items = [...flat, ...flat];
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are the technologies I work with. Hover to pause the scroll.</Desc>
        <SkillsContainer>
          <MarqueeViewport>
            <MarqueeTrack>
              {items.map((item, idx) => (
                <Pill key={`${item.name}-${idx}`}>
                  <SkillImage src={item.image} alt={item.name} />
                  {item.name}
                </Pill>
              ))}
            </MarqueeTrack>
          </MarqueeViewport>
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills