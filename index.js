#!/usr/bin/env node
const AwsTools = require('./tools/aws-tools');
const argv = require('yargs').argv

if (process.argv.length < 3) {
  console.log("No command provided.");
  process.exit(1);
}

let command = process.argv[2];

if (command.trim() == 'create-aws-docker-run-file') {
  AwsTools.createAWSDockerRunFile(argv);
}