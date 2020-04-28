// package: job
// file: services/job/service.proto

import * as jspb from "google-protobuf";
import * as github_com_oojob_protobuf_place_pb from "../../github.com/oojob/protobuf/place_pb";
import * as github_com_oojob_protobuf_metadata_pb from "../../github.com/oojob/protobuf/metadata_pb";
import * as github_com_oojob_protobuf_time_pb from "../../github.com/oojob/protobuf/time_pb";
import * as github_com_oojob_protobuf_system_pb from "../../github.com/oojob/protobuf/system_pb";
import * as github_com_oojob_protobuf_health_pb from "../../github.com/oojob/protobuf/health_pb";

export class Job extends jspb.Message {
  hasIdentity(): boolean;
  clearIdentity(): void;
  getIdentity(): github_com_oojob_protobuf_system_pb.Identifier | undefined;
  setIdentity(value?: github_com_oojob_protobuf_system_pb.Identifier): void;

  getEmployment(): string;
  setEmployment(value: string): void;

  hasSalary(): boolean;
  clearSalary(): void;
  getSalary(): github_com_oojob_protobuf_system_pb.Range | undefined;
  setSalary(value?: github_com_oojob_protobuf_system_pb.Range): void;

  hasExperience(): boolean;
  clearExperience(): void;
  getExperience(): github_com_oojob_protobuf_system_pb.Range | undefined;
  setExperience(value?: github_com_oojob_protobuf_system_pb.Range): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): github_com_oojob_protobuf_time_pb.Time | undefined;
  setTime(value?: github_com_oojob_protobuf_time_pb.Time): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  getWorkingHours(): string;
  setWorkingHours(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasPlace(): boolean;
  clearPlace(): void;
  getPlace(): github_com_oojob_protobuf_place_pb.Place | undefined;
  setPlace(value?: github_com_oojob_protobuf_place_pb.Place): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    identity?: github_com_oojob_protobuf_system_pb.Identifier.AsObject,
    employment: string,
    salary?: github_com_oojob_protobuf_system_pb.Range.AsObject,
    experience?: github_com_oojob_protobuf_system_pb.Range.AsObject,
    time?: github_com_oojob_protobuf_time_pb.Time.AsObject,
    skillsList: Array<string>,
    workingHours: string,
    status: string,
    place?: github_com_oojob_protobuf_place_pb.Place.AsObject,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

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

