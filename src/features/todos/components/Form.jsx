import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  // 값을 리덕스로 보내기 위한 훅 
  const dispatch = useDispatch()
  // 타이틀useState 
  const [title, setTitle] = useState('');
  // 바디값useState
  const [body, setBody] = useState('');

  // 타이틀값이 바뀌면 
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value)
  }

  const onChangeBodyHandler = (e) => {
    setBody(e.target.value)
  }

  // form에서 submit이 작동되면
  const onSubmitHandler = (event) => {
    // 일단 멈춰봐 진정해 
    event.preventDefault();
    // 만약에 두개다 값이 비워있지 않다면 ? 
    if (body !== '' && title !== '') {
      // 리덕스 addTodo 타입으로 입력된 title,body 값 보내기러기
      dispatch(addTodo(title, body))
    }
    else {
      alert('값 입력하셈')
    }
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={title}
          onChange={onChangeTitleHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={body}
          onChange={onChangeBodyHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
