import styled from 'styled-components';

export const Mobile = styled.footer`
  @media only screen and (max-width: 990px) {
    div{
      padding: 30px 10px 0 10px !important;
    }
    div + div{
      padding-top: 130px !important;
    }
  }
`;

export const Container = styled.div`
  height: 284px;
  background: #F7F7F7;
  
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 37px 375px 0 375px;

    img{
      width: 130px;
      height: 52px;
    }

    ul{
      display: flex;
      align-items: center;

      li{
        list-style: none;
        margin-left: 35px; 
      }
    }
  }

  div + div{
    flex: 1;
    padding-top: 150px;
    justify-content: space-between;
    align-items: flex-end;
    background: #F7F7F7;

    p{
      color: #747474;
      font-family: 'Mulish', sans-serif;
      font-weight: normal;
      font-size: 12px;
      letter-spacing: 0;
      text-align: left;
    }
    strong{
      color: #747474;
      font-size: 12px;
      text-align: right;
      font-family: 'Mulish', sans-serif;
      letter-spacing: 0;
      font-weight: normal;
    }
  }
`; 
