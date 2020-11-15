import {useState, useCallback, useEffect} from 'react';

import {FaPlay, FaPause} from 'react-icons/fa';
import {IoMdArrowDropleft} from 'react-icons/io';
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import { Container, Mobile } from './styles';

import video from '../../assets/video/01.webm';
import video2 from '../../assets/img/video-2.png';
import video3 from '../../assets/img/video-3.png';
import video1 from '../../assets/img/video-1.png';

const Playlist = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isTopList, setIsTopList] = useState(true);
  const [isBottomList, setIsBottomList] = useState(false);

  const [classPlay, setClassPlay] = useState('');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.screen.availWidth < 1000){
      setIsMobile(true);
    }

  }, []);

  const handlePlayer = useCallback((e) => {
    if(!isPlay){
      e.target.play();
      setIsPlay(!isPlay);
      setClassPlay('playing');
    }else{
      e.target.pause();
      setIsPlay(!isPlay);
      setClassPlay('paused');
    }

  }, [isPlay]);

  const handleScrollList = useCallback((e) => {
    if(e.target.scrollTop === 0){
      setIsTopList(true);
    }
    else if(e.target.scrollTop >= 200){
      setIsTopList(false);
      setIsBottomList(true);
    }

    else{
      setIsTopList(false);
      setIsBottomList(false);
    }

  }, []);

  const handleTopScroll = useCallback(() => {
    window.document.getElementById('listVideos').scrollBy(0, -400);

  }, []);

  const handleBottomScroll = useCallback(() => {
    window.document.getElementById('listVideos').scrollBy(0, 400);
  }, []);

  return(
    <Mobile>
      <Container>
        <h2>Trilhas de conhecimento</h2>

        <div>
          <div>
            <div className="playerContainer">
              <div className={`playIcon`}>
                <button className={`${classPlay}`}>
                  {isPlay ? 
                    <FaPause size={35} color="#FFF" />
                    :
                    <FaPlay size={35} color="#FFF" />
                  }
                  </button>
              </div>
              <video 
                src={video} 
                onClick={e => handlePlayer(e)}
                className="player"
                preload={true}
              >
              </video>
            </div>
            <strong>Ana e João</strong>
          </div>
          <div className="list">
            { !isMobile &&
              <button type="button" onClick={handleTopScroll}>  
                <RiArrowUpSLine size={43} color={isTopList ? `#BCBCBC` : `#FFF`} />
              </button>
            }
            <ul id="listVideos" onScroll={e => handleScrollList(e)}>
              <li>
                <div className="active">
                  <img src={video1} alt="Imagem do video" />
                  <div>
                    <FaPlay size={20} color="#FFF" />
                  </div>
                </div>
                {!isMobile &&
                  <IoMdArrowDropleft size={25} color="#FFF" />
                }
              </li>
              <li>
                <div>
                  <img src={video2} alt="Imagem do video" />
                  <div>
                    <FaPlay size={20} color="#FFF" />
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img src={video3} alt="Imagem do video" />
                  <div>
                    <FaPlay size={20} color="#FFF" />
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img src={video2} alt="Imagem do video" />
                  <div>
                    <FaPlay size={20} color="#FFF" />
                  </div>
                </div>
              </li>
            </ul>
            {!isMobile &&
              <button onClickCapture={handleBottomScroll}>
                <RiArrowDownSLine size={43} color={isBottomList? `#BCBCBC` : `#fff` } />
              </button>
            }
          </div>
        </div>
      </Container>
    </Mobile>
  );
};

export default Playlist;
