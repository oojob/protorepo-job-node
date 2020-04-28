// GENERATED CODE -- DO NOT EDIT!

// package: job
// file: services/job/service.proto

import * as services_job_service_pb from "../../services/job/service_pb";
import * as oojob_protobuf_health_pb from "../../oojob/protobuf/health_pb";
import * as grpc from "grpc";

interface IJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createJob: grpc.MethodDefinition<services_job_service_pb.CreateJobReq, services_job_service_pb.CreateJobRes>;
  check: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const JobServiceService: IJobServiceService;

export class JobServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createJob(argument: services_job_service_pb.CreateJobReq, callback: grpc.requestCallback<services_job_service_pb.CreateJobRes>): grpc.ClientUnaryCall;
  createJob(argument: services_job_service_pb.CreateJobReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.CreateJobRes>): grpc.ClientUnaryCall;
  createJob(argument: services_job_service_pb.CreateJobReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_job_service_pb.CreateJobRes>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
}
