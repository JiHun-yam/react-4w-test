import React from 'react'
import styled from 'styled-components'
import { deleteTodo, toggleStatusTodo } from '../../../redux/modules/todos'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Todo({ item }) {


    const dispatch = useDispatch()
    // disoatch를 사용해서 리덕스로 값 보냄 
    const onClickDeleteHandler = (payload) => {
        dispatch(deleteTodo(payload))
    }
    // 값을 가져와 리덕스로 toggleStatusTodo로 보내는 함수 
    const onClickDoneHandler = (payload) => {
        dispatch(toggleStatusTodo(payload))
    }
    // 상세페이지 만들기 위해 
    const navigate = useNavigate();

    // usenavigate를 이용해서 item:id로 이동하고 
    // 이동하면서 item 값을 같이 보냄
    const onClickDeatilPage = () => {
        navigate(`/${item.id}`, {
            state: item
        })
    }



    return (
        <StTodoContainer >

            <div onClick={onClickDeatilPage} >상세보기</div>

            <div>
                <h2 className="todo-title">{item.title}</h2>
                <div>{item.body}</div>
            </div>
            <StDialogFooter>
                <StButton
                    borderColor="red"
                    // 함수의 인자값을 보내기 위해 이렇게 구현 
                    onClick={() => onClickDeleteHandler(item.id)}
                >
                    삭제하기
                </StButton>
                <StButton
                    borderColor="green"
                    onClick={() => onClickDoneHandler(item)}
                > {item.isDone ? "취소!" : "완료!"}
                </StButton>
            </StDialogFooter>
        </StTodoContainer>
    )
}

export default Todo

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
