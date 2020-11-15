import styled from 'styled-components';

export const Container = styled.div`
  background: #2E2236;
  height: 808px;

  h2{
    padding: 94.95px 0 0 0;
    margin-bottom: 60px;

    text-align: center;
    font-size: 48px;
    color: #FFF;

    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-800) var(--unnamed-font-size-48)/var(--unnamed-line-spacing-58) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing--0-48);
    font: normal normal 800 48px/58px Mulish;
    letter-spacing: -0.48px;
    font-weight: bolder;
  }

  div{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div{
      display: flex;
      flex-direction: column;

      div.playerContainer{
        position: relative;
        div.playIcon{
          width: 770px;
          height: 439px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 0px 0px;

          button{
           
            border: 5px solid #4EEF61;
            
            background: transparent;

            height: 103.44px;
            width: 103.44px;
            margin: 0;
            
            border-radius: 50%;
            
            &.paused{

              animation-name: NotPausedEffect;
              animation-duration: .3s;
              animation-iteration-count: 1;
              animation-timing-function: ease-in-out;
              animation-fill-mode: both;

              @keyframes pausedEffect{
                from{
                  bottom: 0;
                  left: 0;
                  margin: 0 0 15px 15px;
                }
                to{
                  position: absolute;
                  display: block;
                  bottom: 50%;
                  left: 50%;
                  transform: translate(-50%, 50%);
                }
              }
            }

            &.playing{
              position: absolute;


              animation-name: playingEffect;
              animation-duration: .3s;
              animation-iteration-count: 1;
              animation-timing-function: ease-in-out;
              animation-fill-mode: both;

              @keyframes playingEffect{
                from{
                  position: absolute;
                  display: block;
                  bottom: 50%;
                  left: 50%;
                  transform: translate(-50%, 50%);
                }to{
                  bottom: 0;
                  left: 0;
                  margin: 0 0 15px 15px;
                }
              }
            }

          }
        }

        video.player{
          width: 770px;
          height: 439px;

          border-radius: 10px;
        }
      }

      strong{
        font-size: 18px;
        font-family: 'Mulish', serif;
        font-weight: normal;

        font-weight: 800;
        letter-spacing: 0px;
        color: #FFF;
        padding: 5px 0 0 20px;
      }
    }
    div{
      position: relative;
      button{
        background: transparent;
        outline: none;
        border: none;
        width: 16px;
        height: 8px;

        margin-left: 235px;
        margin-top: -20px;
        margin-bottom: 30px;

      }
      
      ul{
        scroll-behavior: smooth;

        height: 439px;
        width: 300px;

        direction: rtl;
        overflow-y: scroll;

        margin-left: 90px;

        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));

        -webkit-mask-size: 100% 135%;
        -webkit-mask-repeat: no-repeat;

        &::-webkit-scrollbar {
          width: 10px;
          height: 200px;
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.25);
          border-radius: 5px;
        }


        li{
          display: flex;
          align-items: center;
          list-style: none;
          margin-bottom: 20px;
          position: relative;

          &:last-child{
            margin: 0;
          }

          svg{
            margin-right: -10px;
          }

          div{
            display: flex;
            align-items: center;

            div{
              position: absolute;
              border: 5px solid #4EEF61;
              width: 50px;
              height: 50px;
              margin: 0;

              border-radius: 50%;

              display: flex;
              justify-content: center;
              align-items: center;

              svg{
                margin: 0;
                padding: 0;
              }
            }

            &.active{
              border: 3px solid #FFF;
            }

            width: 270px;
            height: 154px;
            padding: 0;
            margin: 0;
            border-radius: 6px;

            img{
              border-radius: 6px;
              width: 100%;
              height: 100%;
              padding: 0;
              object-fit: cover;
            }
            
          }
        }
      }
    }
  }

`;


export const Mobile = styled.div`
  @media only screen and (max-width: 990px) {
    div{
      div{
        ul{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;

          flex-wrap: wrap;
          -webkit-mask-image: none;

          direction: initial;
          overflow-y: hidden;
          
          margin: 0 0 0 0;
          padding: 0 20px;


          li{
            margin: 5px !important;

            & + li{
              margin: 0;
            }

            div.active{
              padding: 0;
            }
          }

          &::-webkit-scrollbar {
            width: 100px;
            height: 10px;
            background: transparent;
          }

          &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 1);
            border-radius: 5px;
          }

        }
      }
    }
  }  
`;
