/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */
import type { ScalarTestingFileBase64Operations } from "../../gen/file-base64/operations.js";

export const reducer: ScalarTestingFileBase64Operations = {
  addFileBase64Operation(state, action, dispatch) {
    if (!Array.isArray(state.files)) {
      state.files = [];
    }
    const newFileBase64 = {
      id: action.input.id,
      file: action.input.file ?? null,
    };
    state.files.push(newFileBase64);
  },
  removeFileBase64Operation(state, action, dispatch) {
    state.files = state.files.filter((file) => file.id !== action.input.id);
  },
};
