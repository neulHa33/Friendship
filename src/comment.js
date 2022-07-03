import React, { useState } from "react";

function Comment(props) {
  const current = useRecoilValue(userNameState);
  // useRecoilValue : 업데이트 된 상태를 불러오는 함수.
  const { userName, content, date, _ } = props.value;
  const onDelete = props.onDelete;
  const isLogined = props.isLogined;
  const isAuthor = isLogined && current === userName;

  return (
    <div id={userName + date}>
      <div>
        <span>USER 👤 - {userName}</span>
        <h3>{content}</h3>
        <span>{date}</span>
      </div>
      {isAuthor && (
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  );
}

export default Comment;
