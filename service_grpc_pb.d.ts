// GENERATED CODE -- DO NOT EDIT!

// package: job
// file: services/job/service.proto

import * as services_job_service_pb from "./service_pb";
import * as oojob_protobuf_system_pb from "@oojob/oojob-protobuf/system_pb";
import * as oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as oojob_protobuf_cursor_pb from "@oojob/oojob-protobuf/cursor_pb";
import * as grpc from "grpc";

interface IJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createJob: grpc.MethodDefinition<services_job_service_pb.Job, oojob_protobuf_system_pb.Id>;
  readJob: grpc.MethodDefinition<oojob_protobuf_system_pb.Id, services_job_service_pb.Job>;
  updateJob: grpc.MethodDefinition<services_job_service_pb.Job, oojob_protobuf_system_pb.Id>;
  deleteJob: grpc.MethodDefinition<oojob_protobuf_system_pb.Id, oojob_protobuf_system_pb.Id>;
  readAllJobsByCompany: grpc.MethodDefinition<oojob_protobuf_cursor_pb.Pagination, services_job_service_pb.JobAllResponse>;
  readAllJobs: grpc.MethodDefinition<oojob_protobuf_cursor_pb.Pagination, services_job_service_pb.JobAllResponse>;
  check: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const JobServiceService: IJobServiceService;

export class JobServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createJob(argument: services_job_service_pb.Job, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  createJob(argument: services_job_service_pb.Job, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  createJob(argument: services_job_service_pb.Job, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  readJob(argument: oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<services_job_service_pb.Job>): grpc.ClientUnaryCall;
  readJob(argument: oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.Job>): grpc.ClientUnaryCall;
  readJob(argument: oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.Job>): grpc.ClientUnaryCall;
  updateJob(argument: services_job_service_pb.Job, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  updateJob(argument: services_job_service_pb.Job, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  updateJob(argument: services_job_service_pb.Job, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  deleteJob(argument: oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  deleteJob(argument: oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  deleteJob(argument: oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_system_pb.Id>): grpc.ClientUnaryCall;
  readAllJobsByCompany(argument: oojob_protobuf_cursor_pb.Pagination, callback: grpc.requestCallback<services_job_service_pb.JobAllResponse>): grpc.ClientUnaryCall;
  readAllJobsByCompany(argument: oojob_protobuf_cursor_pb.Pagination, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.JobAllResponse>): grpc.ClientUnaryCall;
  readAllJobsByCompany(argument: oojob_protobuf_cursor_pb.Pagination, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.JobAllResponse>): grpc.ClientUnaryCall;
  readAllJobs(argument: oojob_protobuf_cursor_pb.Pagination, callback: grpc.requestCallback<services_job_service_pb.JobAllResponse>): grpc.ClientUnaryCall;
  readAllJobs(argument: oojob_protobuf_cursor_pb.Pagination, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.JobAllResponse>): grpc.ClientUnaryCall;
  readAllJobs(argument: oojob_protobuf_cursor_pb.Pagination, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.JobAllResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
}
