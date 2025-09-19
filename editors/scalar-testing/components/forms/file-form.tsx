import {
  type FileBase64,
  type ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

import {
  Form,
  IdField,
  FileField,
  Button,
} from "@powerhousedao/document-engineering";

interface FileFormProps {
  readonly onAddFile: (data: FileBase64) => void;
  readonly filesState: ScalarTestingState["files"];
}

export function FileForm({ onAddFile, filesState }: FileFormProps) {
  const onSubmit = useCallback(
    (data: FileBase64) => {
      onAddFile(data);
    },
    [onAddFile]
  );

  return (
    <FormWrapper title="Add File">
      <State state={filesState} />
      <div className="mb-6">
        <Form
          defaultValues={{ file: null }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <div className="w-[247px]">
            <FileField
              label="File"
              name="file"
              placeholder="Enter your file"
              submitAsBase64={true}
              description="Click to upload a file"
              maxFileSize={10000000}
              allowedFileTypes={[
                "image/png",
                "image/jpg",
                "image/jpeg",
                "application/pdf",
                "text/plain",
                "application/epub+zip",
              ]}
            />
          </div>

          <Button className="w-full mt-2" size="sm" type="submit">
            Add File
          </Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
