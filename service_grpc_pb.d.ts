// GENERATED CODE -- DO NOT EDIT!

// package: job
// file: service.proto

import * as service_pb from "./service_pb";
import * as grpc from "grpc";

interface IJobService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createJob: grpc.MethodDefinition<service_pb.CreateJobReq, service_pb.CreateJobRes>;
}

export const JobService: IJobService;

export class JobClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createJob(argument: service_pb.CreateJobReq, callback: grpc.requestCallback<service_pb.CreateJobRes>): grpc.ClientUnaryCall;
  createJob(argument: service_pb.CreateJobReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.CreateJobRes>): grpc.ClientUnaryCall;
  createJob(argument: service_pb.CreateJobReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<service_pb.CreateJobRes>): grpc.ClientUnaryCall;
}
