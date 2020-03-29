// package: job
// file: service.proto

import * as jspb from "google-protobuf";

export class CreateJobReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescriptioon(): string;
  setDescriptioon(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobReq): CreateJobReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJobReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobReq;
  static deserializeBinaryFromReader(message: CreateJobReq, reader: jspb.BinaryReader): CreateJobReq;
}

export namespace CreateJobReq {
  export type AsObject = {
    name: string,
    descriptioon: string,
    category: string,
  }
}

export class CreateJobRes extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobRes): CreateJobRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJobRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobRes;
  static deserializeBinaryFromReader(message: CreateJobRes, reader: jspb.BinaryReader): CreateJobRes;
}

export namespace CreateJobRes {
  export type AsObject = {
    status: boolean,
    id: string,
  }
}

