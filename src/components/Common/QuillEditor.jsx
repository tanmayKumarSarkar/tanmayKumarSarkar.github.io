import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { writeJsonFile } from "write-json-file";
import _editorData from "/src/assets/editorData.json";

function QuillEditor() {
  const [editorData, setEditorData] = useState(_editorData["contents"]);
  const [option, setOption] = useState(editorData[0]);
  const [value, setValue] = useState(option.data);

  const handleChange = (e) => {
    let _name = e.target.value;
    let _option = editorData.find((ed) => ed.name == _name);
    setOption(_option);
    setValue(_option.data);
  };

  const save = (isNew, val) => {
    let _name = "";
    if (isNew) {
      _name = prompt("Please enter a Name:");
      if (!_name) return;
      let newOption = { name: _name, data: val };
      setEditorData((d) => {
        return [newOption, ...d];
      });
      //   console.log(editorData.find((ed) => ed.name == _name));
      setOption(newOption);
    } else {
      _name = option.name;
      setEditorData((d) => {
        let new_ed = d;
        new_ed.find((ed) => ed.name == _name).data = val;
        return [...new_ed];
      });
    }
    // console.log("name: ", _name, ", data: ", val);
    // console.log(editorData);
  };

  useEffect(() => {
    setEditorData((d) => {
      let new_ed = d;
      let _name = option.name;
      new_ed.find((ed) => ed.name == _name).data = value;
      return [...new_ed];
    });
  }, [value]);

  function format(html) {
    var tab = "\t";
    var result = "";
    var indent = "";
    console.log(html);
    html.split(/>\s*</).forEach(function (element) {
      if (element.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }

      result += indent + "<" + element + ">\r\n";

      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
        indent += tab;
      }
    });
    console.log(result);
    return result.substring(1, result.length - 3);
  }

  return (
    <div className="min-h-[calc(100vh-49px)]">
      <div className="h-14 bg-[#040016]"></div>
      <div className="flex justify-around">
        <select onChange={handleChange} value={option.name}>
          {editorData?.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        <div>
          <button
            className="bg-slate-300 rounded-lg px-5 ml-2 mt-1 border border-gray-500 border-solid hover:bg-slate-400 hover:text-white"
            onClick={() => save(true, value)}
          >
            Save As
          </button>
          <button
            className="bg-slate-300 rounded-lg px-5 ml-2 mt-1 border border-gray-500 border-solid hover:bg-slate-400 hover:text-white"
            onClick={() => save(false, value)}
          >
            Save
          </button>
        </div>
      </div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div className="mt-4 ">HTML Editor Text :</div>
      <div className="mt-4 p-4 border border-solid border-black bg-[#eee]">
        {format(value)}
      </div>
      JSON:
      <div>{JSON.stringify(editorData)}</div>
    </div>
  );
}

export default QuillEditor;
