import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";


import Todo from "./Todo.jsx";

const List = () => {
  // 리덕스로 정보 보내기

  // 리덕스로 정보 가져오기
  const todos = useSelector((state) => state.todos);
  console.log(todos)


  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {
          // todos 즉 리덕스 값을 필터를 걸어서 false애만 남기고 그걸 맵을돌려
          // 자료 뿌리기
          todos.filter(item =>
            item.isDone == false
          ).map((item) => {
            return (
              <Todo item={item} key={item.id} />
            )
          })
        }

      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>


        {
          // todos 즉 리덕스 값을 필터를 걸어서 true만 남기고 그걸 맵을돌려
          // 자료 뿌리기
          todos.filter(item =>
            item.isDone == true
          ).map((item) => {
            return (
              <Todo item={item} key={item.id} />
            )
          })
        }

      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;


const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
