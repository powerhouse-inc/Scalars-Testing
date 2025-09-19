/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { describe, it, expect, beforeEach } from "vitest";
import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/file-base64/creators.js";
import {z, type AddFileBase64Input, type RemoveFileBase64Input, type ScalarTestingDocument } from "../../gen/types.js";

describe("FileBase64 Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addFile operation", () => {
    const input: AddFileBase64Input = generateMock(z.AddFileBase64InputSchema());

    const updatedDocument = reducer(document, creators.addFileBase64(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_FILE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeFile operation", () => {
    const input: RemoveFileBase64Input = generateMock(z.RemoveFileBase64InputSchema());

    const updatedDocument = reducer(document, creators.removeFileBase64(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_FILE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
