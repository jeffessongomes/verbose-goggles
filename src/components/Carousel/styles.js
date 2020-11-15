import styled from 'styled-components';

export const Mobile = styled.div`
  @media only screen and (max-width: 990px) {
    margin-top: -200px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -125px;

  div.slider{

    width: 100vw;
    height: 600px;

    overflow: hidden;

    div.slides{
      width: 500%;
      height: 500px;
      display: flex;

      div.btn-arrows{
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 250px;
        padding: 0 40px;
        width: 100%;

        button{
          background: transparent;
          outline: none;
          border: none;
        }
      }

      input#radio1:checked ~ .first{
        margin-left: 0;
      }
      
      input#radio2:checked ~ .first{
        margin-left: -20%;
      }

      input{
        display: none;
      }

      div.slide{
        width: 20%;
        transition: 2s;

        img{
          width: 100%;
          object-fit: cover;
          object-position: center;
          height: 600px;
        }
      }
    }

    div.navigation-manual{
      position: absolute;
      width: 100%;
      margin-top: -20px;
      display: flex;
      justify-content: center;
    
      label.manual-btn{
        padding: 5px;
        border-radius: 50%;
        cursor: pointer;
        transition: .3s;

        &:not(:last-child){
          margin-right: 20px;
        }
      }
    }
  }

  div.navigation-auto{
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;

    margin-top: 480px;

    div{
      background: rgba(255, 255, 255, 0.4);
      padding: 5px;
      border-radius: 50%;
      transition: 1s;

      &:not(:last-child){
        margin-right: 20px;
      }
    }
  }

  input#radio1:checked ~ .navigation-auto .auto-btn1{
    background: #FFF;
  }

  input#radio2:checked ~ .navigation-auto .auto-btn2{
    background: #FFF;
  }
`;
