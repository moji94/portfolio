import React from 'react'
import styled from 'styled-components'

export const Projects = () => {
  return (
    <Container>
      <Top>
        <Tittle>
          <TittleTop>
            <div></div>
            <p>TAKE A LOOK AT MY</p>
          </TittleTop>
          <TittleBottom>
            <p>PROJECTS</p>
          </TittleBottom>
        </Tittle>
      </Top>
      <Details>
        <Box>
          <Pic>
            <img
              src={'/images/belderchin.png'}
              alt={'belderchin'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>Belderchin</h2>
            <p>
              Technologies Used: React, REST API, ChartJS Completely built with
              hooks and functional components Emulates time passage, and stock
              prices update randomly as each "day" passes Real-time updates on
              stock and portfolio performance, visualized with interactive
              charts
            </p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/GoldenCloud.png'}
              alt={'GoldenCloud'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>Golden Cloud</h2>
            <p>
              Technologies Used: React, REST API, ChartJS Completely built with
              hooks and functional components Emulates time passage, and stock
              prices update randomly as each "day" passes Real-time updates on
              stock and portfolio performance, visualized with interactive
              charts
            </p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/mehan.jpg'}
              alt={'MehanTrade'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>Mehan Trade</h2>
            <p>
              Technologies Used: React, REST API, ChartJS Completely built with
              hooks and functional components Emulates time passage, and stock
              prices update randomly as each "day" passes Real-time updates on
              stock and portfolio performance, visualized with interactive
              charts
            </p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/salomba.png'}
              alt={'salomba'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>Salom Ba</h2>
            <p>
              Technologies Used: React, REST API, ChartJS Completely built with
              hooks and functional components Emulates time passage, and stock
              prices update randomly as each "day" passes Real-time updates on
              stock and portfolio performance, visualized with interactive
              charts
            </p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/patcher.png'}
              alt={'patcher'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>Patcher</h2>
            <p>
              Technologies Used: React, REST API, ChartJS Completely built with
              hooks and functional components Emulates time passage, and stock
              prices update randomly as each "day" passes Real-time updates on
              stock and portfolio performance, visualized with interactive
              charts
            </p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/dezlive.png'}
              alt={'dezlive'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>Dez Live</h2>
            <p>
              Technologies Used: React, REST API, ChartJS Completely built with
              hooks and functional components Emulates time passage, and stock
              prices update randomly as each "day" passes Real-time updates on
              stock and portfolio performance, visualized with interactive
              charts
            </p>
          </Text>
        </Box>
        <Box>
          <Pic>
            <img
              src={'/images/forcegame.png'}
              alt={'forcegame'}
              width="200"
              height="200"
            />
          </Pic>
          <Text>
            <h2>Force Game</h2>
            <p>
              Technologies Used: React, REST API, ChartJS Completely built with
              hooks and functional components Emulates time passage, and stock
              prices update randomly as each "day" passes Real-time updates on
              stock and portfolio performance, visualized with interactive
              charts
            </p>
          </Text>
        </Box>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Top = styled.div`
  width: 60%;
  height: 55px;
`
const Tittle = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`
const TittleTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  div {
    width: 45px;
    margin-left: 30px;
    border-top: 1.5px solid #333;
  }
  p {
    margin-left: 20px;
    color: #333;
    font-size: 10px;
  }
`
const TittleBottom = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-left: 30px;
    font-size: 25px;
    color: #333;
  }
`
const Details = styled.div`
  width: 60%;
  height: auto;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding-top: 30px;
`
const Box = styled.div`
  width: 90%;
  height: 300px;
  box-shadow: 1px 30px 30px #eee;
  border: 1px solid #eee;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
const Pic = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  img {
    border-radius: 25px;
  }
`
const Text = styled.div`
  width: 60%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #333;
  h2 {
    margin-bottom: 30px;
  }
`