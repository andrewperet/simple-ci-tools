
const FS = require('fs-extra');

module.exports = {
  createAWSDockerRunFile : createAWSDockerRunFile
}

const AWSDockerRunFileTemplate = {"AWSEBDockerrunVersion": "1",
  "Image": {"Name": "","Update": "true"},"Ports": [{"ContainerPort": ""}],"Logging": "/var/log"
}

function createAWSDockerRunFile(args) {
  let runFile = JSON.parse(JSON.stringify(AWSDockerRunFileTemplate));

  runFile.Ports[0].ContainerPort = args.p;
  runFile.Image.Name = args.n + ':' + args.r;

  FS.writeFileSync(args.o, JSON.stringify(runFile));
}