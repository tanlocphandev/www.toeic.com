import EditorToolbar, { formats, modules } from "@/components/shared/Editor/EditorToolbar";
import { forwardRef, Fragment } from "react";
import ReactQuill from "react-quill";

const Editor = forwardRef(function Editor(props, ref) {
    const { value, onChange } = props;

    return (
        <Fragment>
            <EditorToolbar />

            <ReactQuill
                theme="snow"
                className="text-editor"
                bounds={"#editor"}
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                ref={ref}
                {...props}
            />
        </Fragment>
    );
});

Editor.displayName = "Editor";

export default Editor;
