const core = require('@actions/core');
const github = require('@actions/github');
const utils = require('./tools/utils');

try {
  // Get Inputs
  const marketingVersion = core.getInput('marketing-version') || '';
  const runNumberBase = Number(core.getInput('run-number-base')) || 0;
  const buildNumberSeparator = core.getInput('build-number-separator') || '.';
  const versionPostfix = core.getInput('version-postfix') || '';
  const gitSha = core.getInput('sha') || '';

  // Get Context Varibales
  const runNumber = github.context.runNumber;

  console.log(`******************** Inputs ********************`)
  console.log(`*`)
  console.log(`* Marketing version: ${marketingVersion}`);
  console.log(`* Run number base: ${runNumberBase}`);
  console.log(`* Build number separator: ${buildNumberSeparator}`);
  console.log(`* Version postfix: ${versionPostfix}`);
  console.log(`* Run number: ${runNumber}`);
  console.log(`* Git SHA: ${gitSha}`);
  console.log(`*`)
  console.log(`************************************************`)

  // Generate version strings
  const res = utils.prepareVersions(marketingVersion, buildNumberSeparator, versionPostfix, runNumberBase, runNumber, gitSha)
  console.log('Generated: ' + JSON.stringify(res, undefined, 2));
  
  core.setOutput("marketing-version", res.marketingVersion);
  core.setOutput("build-number", res.buildNumber);
  core.setOutput("git-short", res.gitShort);
  core.setOutput("store-tech-version", res.storeTechVersion);
  core.setOutput("tech-version", res.techVersion);
  core.setOutput("version-variation", res.versionVariation);
  
} catch (error) {
  core.setFailed(error.message);
}