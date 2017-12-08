import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  background-image: url('assets/background.png');
  background-repeat: no-repeat;
  background-position: 50% 0;
  display: flex;
  overflow: hidden;
  
  .userList {
    min-width: 180px;
    width: 180px;
    height: 100%;
    user-select: none;
    background: rgba(0,0,0,0.1);
    color: rgba(0,0,0,0.8);
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
    
      li {
        margin-top: 2px;
        
        div:not(.online) {
          display: inline-block;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          border: 1px solid rgba(0,0,0,0.8);
          margin-right: 5px;
        }
      }
    }
  }
  
  .channel {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: rgba(255,255,255,0.8);
    
    .topBar {
      display: flex;
      align-items: center;
      padding: 6px;
      background: rgba(255,255,255,0.9);
     
      button {
        margin-left: auto;
        background: transparent;
        color: rgba(0,0,0,0.4);
        border: 1px solid rgba(0,0,0,0.4);
        padding: 1px 2px;
        font-size: 15px;
        cursor: pointer;
        transition: color 300ms, border 300ms;
        
        &:hover {
          color: rgba(0,0,0,0.6);
          border: 1px solid rgba(0,0,0,0.6);
        }
      }
    }
    
    ul {
      padding: 1rem;
      flex: 1;
      
      li.message {
        display: flex;
        margin: 8px 0;
        
        img {
          width: 40px;
          height: 40px;
          border-radius: 5px;
          margin-right: 10px;
          background-size: cover;
          border: 0;
        }
        
        .message-author {
          font-weight: 500;
        }
        
        .message-content {
          margin-top: 4px;
          color: rgba(0,0,0,0.6);
          font-weight: 300;
        }
      }
    }
    
    .input-group {
      padding: 12px;
      
      input {
        background: transparent;
        padding: 8px;
        width: 100%;
        border: 2px solid rgba(0,0,0,0.6);
        border-radius: 2px;
        font-size: 15px;
      }
    }
  }
`;