// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');

function serialize_job_CreateJobReq(arg) {
  if (!(arg instanceof service_pb.CreateJobReq)) {
    throw new Error('Expected argument of type job.CreateJobReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_job_CreateJobReq(buffer_arg) {
  return service_pb.CreateJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_CreateJobRes(arg) {
  if (!(arg instanceof service_pb.CreateJobRes)) {
    throw new Error('Expected argument of type job.CreateJobRes');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_job_CreateJobRes(buffer_arg) {
  return service_pb.CreateJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var JobService = exports.JobService = {
  createJob: {
    path: '/job.Job/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.CreateJobReq,
    responseType: service_pb.CreateJobRes,
    requestSerialize: serialize_job_CreateJobReq,
    requestDeserialize: deserialize_job_CreateJobReq,
    responseSerialize: serialize_job_CreateJobRes,
    responseDeserialize: deserialize_job_CreateJobRes,
  },
};

exports.JobClient = grpc.makeGenericClientConstructor(JobService);
