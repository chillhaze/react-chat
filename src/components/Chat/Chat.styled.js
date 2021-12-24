import styled from "@emotion/styled";

export const ChatWrapper = styled.div`
  width: 85%;
  height: 70vh;
  border: 1px solid #c4c2c2;
  border-radius: 4px;
  overflow-y: auto;
  background-color: #fff;
`;
export const MessageBody = styled.div`
  margin: 20px;
  display: flex;
  width: fit-content;
  max-width: 95%;
  background-color: #fff;
  padding: 3px;

  @media (max-width: 550px) {
    margin: 20px 15px;
    max-width: 85%;
    padding: 2px;
  }
`;
export const Name = styled.div`
  margin-top: 5px;

  font-size: 10px;
  overflow: hidden;

  @media (max-width: 550px) {
    font-size: 8px;
  }
`;
export const Message = styled.p`
  min-width: 100px;
  padding: 5px 10px;
  border-radius: 10px 0px 0px 10px;
  overflow-y: hiden;
`;
