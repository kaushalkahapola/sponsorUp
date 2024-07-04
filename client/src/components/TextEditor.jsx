import React, { useState, useRef } from "react";
import ReactQuill from "react-quill"; // Install react-quill here
// install <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> in html.index ( for undo and redo icons)
import "react-quill/dist/quill.snow.css"; // Import Quill styles

// Undo and Redo functions
function undoChange() {
  this.quill.history.undo();
}

function redoChange() {
  this.quill.history.redo();
}

/**
 * RichTextEditor component for editing and formatting rich text content.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.editorHtml - The HTML content of the editor.
 * @param {function} props.setEditorHtml - The function to update the editor's HTML content.
 * @returns {JSX.Element} The RichTextEditor component.
 */
const RichTextEditor = ({ editorHtml, setEditorHtml }) => {
  //const [editorHtml, setEditorHtml] = useState("");
  const quillRef = useRef(null);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
  ];

  return (
    <div
      style={{
        fontFamily: "Arial",
        fontSize: "20px",
        color: "black",
        background: "white",
      }}
    >
      <div id="toolbar">
        <select
          className="ql-header"
          defaultValue=""
          onChange={(e) => e.persist()}
        >
          <option value="1"></option>
          <option value="2"></option>
          <option value=""></option>
        </select>

        <select className="ql-color">
          <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)"></option>
          <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"></option>
          <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"></option>
          <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"></option>
          <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"></option>
          <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"></option>
          <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"></option>
          <option
            value="rgb(255, 255, 255)"
            label="rgb(255, 255, 255)"
          ></option>
          <option
            value="rgb(250, 204, 204)"
            label="rgb(250, 204, 204)"
          ></option>
          <option
            value="rgb(255, 235, 204)"
            label="rgb(255, 235, 204)"
          ></option>
          <option
            value="rgb(255, 255, 204)"
            label="rgb(255, 255, 204)"
          ></option>
          <option
            value="rgb(204, 232, 204)"
            label="rgb(204, 232, 204)"
          ></option>
          <option
            value="rgb(204, 224, 245)"
            label="rgb(204, 224, 245)"
          ></option>
          <option
            value="rgb(235, 214, 255)"
            label="rgb(235, 214, 255)"
          ></option>
          <option
            value="rgb(187, 187, 187)"
            label="rgb(187, 187, 187)"
          ></option>
          <option
            value="rgb(240, 102, 102)"
            label="rgb(240, 102, 102)"
          ></option>
          <option
            value="rgb(255, 194, 102)"
            label="rgb(255, 194, 102)"
          ></option>
          <option
            value="rgb(255, 255, 102)"
            label="rgb(255, 255, 102)"
          ></option>
          <option
            value="rgb(102, 185, 102)"
            label="rgb(102, 185, 102)"
          ></option>
          <option
            value="rgb(102, 163, 224)"
            label="rgb(102, 163, 224)"
          ></option>
          <option
            value="rgb(194, 133, 255)"
            label="rgb(194, 133, 255)"
          ></option>
          <option
            value="rgb(136, 136, 136)"
            label="rgb(136, 136, 136)"
          ></option>
          <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"></option>
          <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"></option>
          <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"></option>
          <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"></option>
          <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"></option>
          <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"></option>
          <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"></option>
          <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"></option>
          <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"></option>
          <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"></option>
          <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"></option>
          <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"></option>
          <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"></option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
        <button className="ql-blockquote"></button>
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-indent" value="-1"></button>
        <button className="ql-indent" value="+1"></button>
        <button className="ql-link"></button>
        <button className="ql-image"></button>
        <button className="ql-video"></button>
        <button className="ql-clean"></button>
        <button className="ql-undo">
          <i className="fas fa-undo"></i>
        </button>
        <button className="ql-redo">
          <i className="fas fa-redo"></i>
        </button>
      </div>
      <ReactQuill
        ref={quillRef}
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        bounds={".app"}
        placeholder="Write something..."
        style={{ height: "400px" }} // Adjust height as needed
      />
    </div>
  );
};

export default RichTextEditor;
