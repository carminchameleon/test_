import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Corporation from '../Components/Board/Coporation';
import Tech from '../Components/Board/Tech';
import Industry from '../Components/Board/Industry';
import styled from 'styled-components';

const Board = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageList = ['Corporation', 'Industry', 'Tech'];
  const [indusData, setIndusData] = useState([]);
  const [corData, setCorData] = useState([]);
  const [techData, setTechData] = useState([]);

  const setPage = (pageId) => {
    setCurrentPage(pageId);
    pageUI(pageId);
  };

  const pageUI = (currentPage) => {
    if (currentPage === 0) {
      return <Corporation corData={corData} />;
    }
    if (currentPage === 1) {
      return <Industry indusData={indusData} />;
    }
    if (currentPage === 2) {
      return <Tech techData={techData} />;
    }
  };

  async function fetchData() {
    try {
      const data = await axios.get(
        'https://data.roa.ai/v1/trend?start_date=20200530&end_date=20200606'
      );
      setIndusData(data.data.data.industry);
      setTechData(data.data.data.tech);
      setCorData(data.data.data.corporation);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <BannerContainer>
        <BannerHolder>
          <BannerTitle>Chart Board</BannerTitle>
        </BannerHolder>
      </BannerContainer>
      <NavConatiner>
        <NavHolder>
          <NavWrapper>
            {pageList.map((item, index) => {
              if (index === currentPage) {
                return (
                  <ColorList>
                    <NavLink
                      onClick={() => {
                        setPage(index);
                      }}
                    >
                      {item}
                    </NavLink>
                  </ColorList>
                );
              } else {
                return (
                  <NavList>
                    <NavLink
                      onClick={() => {
                        setPage(index);
                      }}
                    >
                      {item}
                    </NavLink>
                  </NavList>
                );
              }
            })}
          </NavWrapper>
        </NavHolder>
      </NavConatiner>
      {pageUI(currentPage)}
    </Container>
  );
};
export default Board;

const Container = styled.div`
  width: 100%;
`;

const NavConatiner = styled.nav`
  height: 40px;
  background-color: #6294eb;
  font-size: 13px;
  line-height: 15px;
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 60px;
`;

const NavHolder = styled.div`
  max-width: 1070px;
  margin: 0 auto;
`;

const NavWrapper = styled.ul`
  position: static !important;
  left: 0 !important;
  top: 0 !important;
  height: auto !important;
  width: auto !important;
  margin: 0 !important;
  padding: 0 !important;
`;

const NavList = styled.li`
  float: left;
  height: 40px;
  padding-top: 10px;
  :hover {
    background-color: #4c74c8;
    cursor: pointer;
  }
  :acitve {
    opacity: 0.3;
  }
`;

const ColorList = styled.div`
  float: left;
  height: 40px;
  padding-top: 10px;
  border-bottom: 5px solid;
  border-bottom-color: #4166b8;
  :hover {
    background-color: #4c74c8;
    cursor: pointer;
  }
`;

const NavLink = styled.li`
  color: #fff;
  text-decoration: none;
  outline: 0;
  letter-spacing: 1px;
  margin: 0 8px;
`;

const BannerContainer = styled.div`
  background: #333;
  text-align: center;
  position: relative;
  background-color: #959595;
`;

const BannerHolder = styled.div`
  max-width: 1090px;
  padding: 61px 15px 22px;
  margin: 0 auto;
  min-height: 100px;
  position: relative;
`;

const BannerTitle = styled.h1`
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 0 33px;
`;
