import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
      flex: 1;
      font-family: 'Mulish', sans-serif;
      font-weight: 800;
      font-size: 48px;
      letter-spacing: -0.48px;
      color: #2E2236;

      padding: 0;
      margin: 0 0 0 178px;
      text-align: center;

    }

    div{
      button{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-left: 20px;
        border: none;
        outline: none;
        background: #FFF;
      
        box-shadow: 0px 10px 20px #0000001A;

        svg{
          fill: #4EEF61;
        }

        &.desabled{
          box-shadow: none;

          cursor: not-allowed;

          svg{
            fill: #E0E0E0;
          }
        }

      }

    }
  }

  ul{
    display: flex;
    margin-left: 10px;
    margin-top: 60px;

    position: relative;

    div.slideFunctions{
      animation-name: fadeIn;
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-iteration-count: 1;
      animation-timing-function: ease-in-out;
      
      @keyframes fadeIn{
        from{
          opacity: 0.25;
        }to{
          opacity: 1;
        }
      }

      li{
        display: flex;
        margin-right: 30px;
        margin-top: 10px;

        li + li{
          margin: 0;
        }

        div {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          
          width: 57px;
          background: linear-gradient(180deg, rgba(11,216,192,1) 0%, rgba(78,239,97,1) 100%);
          border-radius: 6px 0 0 6px;
          height: 228px;

          strong{
            padding-top: 40px;
            font-family: 'Mulish', sans-serif;
            font-size: 28px;
            color: #FFF;
            font-weight: 800;

            margin-left: -10px;

          }
        }

        div + div{
          width: 313px;
          height: 288px;

          background: #FFF;
          border-radius: 6px;

          margin-left: -10px;

          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          
          padding-top: 40px;
          padding-left: 30px;

          box-shadow: 0px 15px 30px #0000001A;

          p{
            width: 253px;

            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 50px;

            text-align: left;
            font-size: 32px;
            font-family: 'Mulish', sans-serif;
            font-weight: 300;
            
            letter-spacing: -0.32px;
            color: #3B3B3B;
          }
        }
      }
    }
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    div.button__container{
      flex: 1;
      justify-content: center;

      margin-left: 140px;

      button.btn-link{
        border-radius: 6px;
        background: #F2F2F2;
        border: none;
        outline: none;

        width: 370px;
        height: 60px;

        color: #3B3B3B;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1.4px;

        margin-top: 60px;

        transition: background .3s;

        &:hover{
          text-decoration: none;
          background: #E0E0E0;

          letter-spacing: 1.68px;
        }
      }
    }

    div{
      div.navigation__manual--functions{
        margin-top: 55px;
        
        input#function1, input#function2, input#function3, input#function4{
          display: none;
        }

        label{
          cursor: pointer;

          color: #000;

          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #4EEF61;

          margin: 0;
          padding: 0;
          margin-left: 20px;

          opacity: .25;
        }

        label.active{
          opacity: 1;

        }
      }
    }
  }

`;

export const Mobile = styled.div`
  @media only screen and (max-width: 990px) {
    > div{
      margin-top: 350px;

      div.ContainerTitleFlex{
        flex-wrap: wrap;
        padding: 0 20px;
        justify-content: center;

        h2{
          margin: 0;
        }
      }

      div.slideFunctions{
        flex-wrap: wrap;
        justify-content: center;
      }

      div.buttonSelectAndButtonHover{
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        flex-direction: column;

        padding: 0 20px;
        justify-content: center;

        div{
          margin: 0;

          button{
            margin: 0;
            margin-bottom: 40px;
          }
        }
      }
    }

  }
`;
