// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 27 2020
// Lasted Updated on Thu May 7 2020 by Naseem Ali
//
// Job entity related messages.
// This file is resposible for all operation related to job entity.
//
// @authors nirajgeorgian@oojob.io (Niraj Kishore)
// @authors naseem.ali.925@gmail.com (Naseem Ali)
//
// Copyright (c) 2020 - oojob
'use strict';
var grpc = require('grpc');
var services_job_service_pb = require('./service_pb.js');
var github_com_oojob_protobuf_place_pb = require('@oojob/oojob-protobuf/place_pb.js');
var github_com_oojob_protobuf_metadata_pb = require('@oojob/oojob-protobuf/metadata_pb.js');
var github_com_oojob_protobuf_time_pb = require('@oojob/oojob-protobuf/time_pb.js');
var github_com_oojob_protobuf_system_pb = require('@oojob/oojob-protobuf/system_pb.js');
var github_com_oojob_protobuf_health_pb = require('@oojob/oojob-protobuf/health_pb.js');
var github_com_oojob_protobuf_applicants_pb = require('@oojob/oojob-protobuf/applicants_pb.js');
var github_com_oojob_protobuf_cursor_pb = require('@oojob/oojob-protobuf/cursor_pb.js');

function serialize_github_com_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_Id(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_system_pb.Id)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_Id(buffer_arg) {
  return github_com_oojob_protobuf_system_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_Pagination(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_cursor_pb.Pagination)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.Pagination');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_Pagination(buffer_arg) {
  return github_com_oojob_protobuf_cursor_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_Job(arg) {
  if (!(arg instanceof services_job_service_pb.Job)) {
    throw new Error('Expected argument of type job.Job');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_job_Job(buffer_arg) {
  return services_job_service_pb.Job.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_job_JobAllResponse(arg) {
  if (!(arg instanceof services_job_service_pb.JobAllResponse)) {
    throw new Error('Expected argument of type job.JobAllResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_job_JobAllResponse(buffer_arg) {
  return services_job_service_pb.JobAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var JobServiceService = exports.JobServiceService = {
  createJob: {
    path: '/job.JobService/CreateJob',
    requestStream: false,
    responseStream: false,
    requestType: services_job_service_pb.Job,
    responseType: github_com_oojob_protobuf_system_pb.Id,
    requestSerialize: serialize_job_Job,
    requestDeserialize: deserialize_job_Job,
    responseSerialize: serialize_github_com_oojob_protobuf_Id,
    responseDeserialize: deserialize_github_com_oojob_protobuf_Id,
  },
  readJob: {
    path: '/job.JobService/ReadJob',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: services_job_service_pb.Job,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_job_Job,
    responseDeserialize: deserialize_job_Job,
  },
  updateJob: {
    path: '/job.JobService/UpdateJob',
    requestStream: false,
    responseStream: false,
    requestType: services_job_service_pb.Job,
    responseType: github_com_oojob_protobuf_system_pb.Id,
    requestSerialize: serialize_job_Job,
    requestDeserialize: deserialize_job_Job,
    responseSerialize: serialize_github_com_oojob_protobuf_Id,
    responseDeserialize: deserialize_github_com_oojob_protobuf_Id,
  },
  deleteJob: {
    path: '/job.JobService/DeleteJob',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: github_com_oojob_protobuf_system_pb.Id,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_github_com_oojob_protobuf_Id,
    responseDeserialize: deserialize_github_com_oojob_protobuf_Id,
  },
  readAllJobsByCompany: {
    path: '/job.JobService/ReadAllJobsByCompany',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_cursor_pb.Pagination,
    responseType: services_job_service_pb.JobAllResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_Pagination,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Pagination,
    responseSerialize: serialize_job_JobAllResponse,
    responseDeserialize: deserialize_job_JobAllResponse,
  },
  readAllJobs: {
    path: '/job.JobService/ReadAllJobs',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_cursor_pb.Pagination,
    responseType: services_job_service_pb.JobAllResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_Pagination,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Pagination,
    responseSerialize: serialize_job_JobAllResponse,
    responseDeserialize: deserialize_job_JobAllResponse,
  },
  check: {
    path: '/job.JobService/Check',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
  watch: {
    path: '/job.JobService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
};

exports.JobServiceClient = grpc.makeGenericClientConstructor(JobServiceService);
