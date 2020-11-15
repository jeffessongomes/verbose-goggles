import styled from 'styled-components';

export const Mobile = styled.div`
  @media only screen and (max-width: 990px) {
    justify-content: center;
    align-items: center;

    div.titleContainer{
      h2{
        width: 100% !important;
        margin: 0;
        align-content: center;
        display: flex;
        justify-content: center;
        text-align: center;
      }
    }

  }
`;

export const Container = styled.div`
  background: #2E2236;

  height: 735px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  flex-wrap: wrap;

  div.titleContainer{

  
    h2{
      width: 370px;
      margin-right: 30px;
      color: #FFF;
      font-size: 48px;
      text-align: left;
      font-family: 'Mulish', sans-serif;
      letter-spacing: -0.48px;
      font-weight: 800;
    }
  }

  div + div{
    width: 770px;
    border-radius: 6px;

    div.card-header{
      background: #FFFFFF;
      border-bottom: 1px solid #E0E0E0;
      padding: 30px 40px;

      &.active{
        background: #F7F7F7;

        h2{
          button{
            color: #4EEF61 !important;
          }

          svg{
            transform: rotate(180deg);
            fill: #4EEF61;
          }
        }
      }

      h2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;

        button{
          color: #3B3B3B;
    
          width: 630px;

          font-size: 18px;
          color: #3B3B3B;
          text-align: left;
          font-weight: 800;
          font-family: 'Mulish', sans-serif;

          &:hover{
            text-decoration: none;
            color: #3B3B3B;
          }

          &:focus{
            text-decoration: none;
            box-shadow: none;
          }
        }
      }
    }

    div.card-body{
      background: #F7F7F7;
      padding-left: 0;

      p{
        color: #3B3B3B;
        font-family: 'Mulish', sans-serif;
        font-size: 18px;
        text-align: left;
        font-weight: normal;

        padding-left: 55px;

        width: 630px;
      }
    }

  }

`;
