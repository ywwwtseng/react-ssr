import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url('assets/background.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  
  form {
    width: 100%;
    max-width: 450px;
    background: rgba(255,255,255,0.9);
    border-radius: 3px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    
    .topBar {
      padding: 2rem 1rem 0;
      
      h1 {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 4px;
      }
      
      p {
        font-size: 12px;
      }
    }
    
    .bottomBar {
    
      .fieldsContainer {
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
      }
      
      label {
        margin-top: 12px;
      }
      
      input {
        background: transparent;
        border-top: none;
        border-bottom: 1px solid rgba(0,0,0,0.36);
        border-left: none;
        border-right: none;
        padding: 4px 0;
        font-size: 15px;
      }
       
      button {
        font-size: 15px;
        padding: 12px 0;
        width: 100%;
        border: none;
        background: transparent;
        border-radius: 0;
        color: #3BADEB;
        cursor: pointer;
      }
    }
  }
`;