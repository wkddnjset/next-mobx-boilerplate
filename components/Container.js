import styled from 'styled-components'


const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 0px) and (max-width: 767.98px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 720px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) { 
    width: 930px;
  }
  @media (min-width: 1300px) { 
    width: 1200px;
  }
`

export default Container