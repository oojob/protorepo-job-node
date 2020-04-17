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

export class HealthCheckRequest extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
  export type AsObject = {
    service: string,
  }
}

export class HealthCheckResponse extends jspb.Message {
  getStatus(): HealthCheckResponse.ServingStatusMap[keyof HealthCheckResponse.ServingStatusMap];
  setStatus(value: HealthCheckResponse.ServingStatusMap[keyof HealthCheckResponse.ServingStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
  export type AsObject = {
    status: HealthCheckResponse.ServingStatusMap[keyof HealthCheckResponse.ServingStatusMap],
  }

  export interface ServingStatusMap {
    UNKNOWN: 0;
    SERVING: 1;
    NOT_SERVING: 2;
  }

  export const ServingStatus: ServingStatusMap;
}

