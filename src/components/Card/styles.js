import styled from 'styled-components';

import background from '../../assets/img/video.png';

export const Container = styled.div`
  width: 370px;
  height: 411px;

  border-radius: 6px;
  box-shadow: 0 0 20px #0000001A;

  div{
    height: 200px;
    background: url(${background});

    border-radius: 6px 6px 0 0;

    display: flex;
    align-items: flex-end;

    div{
      box-shadow: inset 0px -200px 177px -79px rgba(0,0,0,1);
      transition: .3s;

      h2{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-800) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-muli);
        text-align: left;
        font-size: 18px;
        letter-spacing: 0px;
        color: #FFFFFF;
        padding: 20px 30px;
        font: normal normal 800 18px/30px Mulish;

        transition: .3s;
      }

    }
  }

  &:hover{
    div{
      div{
        box-shadow: inset 0px -260px 177px -79px rgba(0,0,0, 1);

        h2{
          color: #A7BD25;
        }
      }
    }
  }

  div + div{
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    background: #FFFFFF;
    
    padding: 30px 40px 0 40px;
    
    p{
      color: #2A2E31;
      text-align: left;
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-muli);
      font: normal normal normal 18px/30px Mulish;
      padding: 0;
      margin: 0;
    }
    strong{
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: left;
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-20) var(--unnamed-font-family-muli);
      font: normal normal bold 14px/20px Mulish;
      color: #BCBCBC;
      letter-spacing: 1.4px;
      text-transform: uppercase;

      padding-bottom: 20px;

      transition: .3s;
      
      &::before{
        content: '';
        width: 100%;
        height: 1px;
        background: #E0E0E0;
        margin-bottom: 20px;
        margin-top: 30px;
        box-shadow: inset 200px 0px 0px 0px transparent;

        transition: .5s;

      }
    }

  }

  &:hover{
    div{
      strong{
        color: #A7BD25;

        &::before{
          box-shadow: inset 300px 0px 0px 0px #A7BD25;
        }
      }
    }
  }

`;
