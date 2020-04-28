// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 27 2020
//
// Job entity related messages.
// This file is resposible for all operation related to job entity.
//
// @authors nirajgeorgian@oojob.io (Niraj Kishore)
//
// Copyright (c) 2020 - oojob
'use strict';
var grpc = require('grpc');
var services_job_service_pb = require('../../services/job/service_pb.js');
var oojob_protobuf_place_pb = require('../../oojob/protobuf/place_pb.js');
var oojob_protobuf_metadata_pb = require('../../oojob/protobuf/metadata_pb.js');
var oojob_protobuf_time_pb = require('../../oojob/protobuf/time_pb.js');
var oojob_protobuf_system_pb = require('../../oojob/protobuf/system_pb.js');
var oojob_protobuf_health_pb = require('../../oojob/protobuf/health_pb.js');

function serialize_github_com_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_CreateJobReq(arg) {
  if (!(arg instanceof services_job_service_pb.CreateJobReq)) {
    throw new Error('Expected argument of type job.CreateJobReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_job_CreateJobReq(buffer_arg) {
  return services_job_service_pb.CreateJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_CreateJobRes(arg) {
  if (!(arg instanceof services_job_service_pb.CreateJobRes)) {
    throw new Error('Expected argument of type job.CreateJobRes');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_job_CreateJobRes(buffer_arg) {
  return services_job_service_pb.CreateJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var JobServiceService = exports.JobServiceService = {
  createJob: {
    path: '/job.JobService/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: services_job_service_pb.CreateJobReq,
    responseType: services_job_service_pb.CreateJobRes,
    requestSerialize: serialize_job_CreateJobReq,
    requestDeserialize: deserialize_job_CreateJobReq,
    responseSerialize: serialize_job_CreateJobRes,
    responseDeserialize: deserialize_job_CreateJobRes,
  },
  check: {
    path: '/job.JobService/Check',
    requestStream: false,
    responseStream: false,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
  watch: {
    path: '/job.JobService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
};

exports.JobServiceClient = grpc.makeGenericClientConstructor(JobServiceService);
