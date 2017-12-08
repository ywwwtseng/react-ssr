import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  background-image: url('assets/background.png');
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  
  .userList {
    min-width: 180px;
    width: 180px;
    height: 100%;
    user-select: none;
    background: rgba(0,0,0,0.1);
    color: rgba(0,0,0,0.7);
    padding: 1rem;
    
    .online {
      display: inline-block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background: #289765;
      margin-right: 5px;
    }
    
    h1 {
      font-weight: 400;
      font-size: 17px;
      margin-bottom: 4px;
      color: rgba(255,255,255,0.6);
    }
    
    span {
      font-weight: 300;
    }
    
    h3 {
      margin-top: 20px;
      font-weight: 400;
      font-size: 16px;
      color: rgba(255,255,255,0.6);
    }
    
    ul {
      div:not(.online) {
        display: inline-block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        border: 1px solid rgba(0,0,0,0.7);
        margin-right: 5px;
      }
    }
  }
  
  .channel {
    flex: 1;
    height: 100%;
    background: rgba(255,255,255,0.8);
  }
`;