// package: job
// file: services/job/service.proto

import * as jspb from "google-protobuf";
import * as github_com_oojob_protobuf_place_pb from "@oojob/oojob-protobuf/place_pb";
import * as github_com_oojob_protobuf_metadata_pb from "@oojob/oojob-protobuf/metadata_pb";
import * as github_com_oojob_protobuf_time_pb from "@oojob/oojob-protobuf/time_pb";
import * as github_com_oojob_protobuf_system_pb from "@oojob/oojob-protobuf/system_pb";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as github_com_oojob_protobuf_applicants_pb from "@oojob/oojob-protobuf/applicants_pb";
import * as github_com_oojob_protobuf_cursor_pb from "@oojob/oojob-protobuf/cursor_pb";

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

  clearQualificationList(): void;
  getQualificationList(): Array<string>;
  setQualificationList(value: Array<string>): void;
  addQualification(value: string, index?: number): string;

  getType(): string;
  setType(value: string): void;

  hasPlace(): boolean;
  clearPlace(): void;
  getPlace(): github_com_oojob_protobuf_place_pb.Place | undefined;
  setPlace(value?: github_com_oojob_protobuf_place_pb.Place): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  hasApplicants(): boolean;
  clearApplicants(): void;
  getApplicants(): github_com_oojob_protobuf_applicants_pb.Applicant | undefined;
  setApplicants(value?: github_com_oojob_protobuf_applicants_pb.Applicant): void;

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
    qualificationList: Array<string>,
    type: string,
    place?: github_com_oojob_protobuf_place_pb.Place.AsObject,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
    applicants?: github_com_oojob_protobuf_applicants_pb.Applicant.AsObject,
  }
}

export class JobAllResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): void;
  addJobs(value?: Job, index?: number): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JobAllResponse): JobAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobAllResponse;
  static deserializeBinaryFromReader(message: JobAllResponse, reader: jspb.BinaryReader): JobAllResponse;
}

export namespace JobAllResponse {
  export type AsObject = {
    jobsList: Array<Job.AsObject>,
  }
}

