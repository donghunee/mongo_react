import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

const WriteWrap = styled.div`
  width: 80rem;
`;

const TitleInput = styled.input`
  font-size: 2rem;
  font-weight: bolder;
  outline: none;
  padding: 1rem;
  border: 1px solid grey;
  width: 100%;
  border-radius: 0.5rem;
  box-sizing: border-box;
`;

const QuillWrap = styled.div`
  .ql-editor {
    border: 1px solid grey;
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank:before {
    left: 0px;
  }
`;

function WriteComponent() {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 작성해주세요~",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        console.log(quill.root.innerHTML);
      }
    });
  }, []);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = "";
  }, []);

  return (
    <WriteWrap>
      <TitleInput />
      <QuillWrap>
        <div ref={quillElement} />
      </QuillWrap>
    </WriteWrap>
  );
}

export default WriteComponent;
