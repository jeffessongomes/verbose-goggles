import styled from 'styled-components';

export const Container = styled.nav`
  div.container{
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0;

    background: transparent !important;
    

    a{
      img{ 
        width: 113px;
        height: 46px;
      }
    }

    div {

      ul{
        li{
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-muli);
          letter-spacing: var(--unnamed-character-spacing-0);
          font-weight: normal;
          letter-spacing: 0px;
          
          margin-left: 60px;

          a{
            color: #FFF !important;
          }
        }
      }
    }
  }
`;
