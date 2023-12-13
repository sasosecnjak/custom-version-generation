// Utils

/**
 * Function to prepare version strings based on the given parameters
 * @param {string} marketingVersion 
 * @param {string} buildNumberSeparator 
 * @param {string} versionPostfix 
 * @param {number} runNumberBase 
 * @param {number} runNumber 
 * @param {string} gitSha 
 * @returns Object with the custom version strings
 */
exports.prepareVersions = function prepareVersions(marketingVersion, buildNumberSeparator, versionPostfix, runNumberBase, runNumber, gitSha) {
    // Preconditions check
    if (marketingVersion.length < 1) { throw new Error('Marketing version is empty') }
    if (buildNumberSeparator.length < 1) { throw new Error('Build number separator is empty') }
    if (runNumberBase < 0) { throw new Error('Run number base needs to be greater or equal to 0, but it is ' + runNumberBase) }
    if (runNumber < 0) { throw new Error('Run number needs to be greater or equal to 0, but it is ' + runNumber) }
    if (gitSha.length < 7) { throw new Error('Git SHA too short') }

    // Construct strings
    const buildNumber = runNumberBase + runNumber;
    const buildNumberString = buildNumber.toString();
    const storeTechVersion = marketingVersion + buildNumberSeparator + buildNumberString
    const gitShort = gitSha.slice(0,7) || ""
    const techVersion = storeTechVersion + "-" + gitShort + versionPostfix

    return {
        marketingVersion: marketingVersion,
        buildNumber: buildNumber,
        buildNumberString: buildNumberString,
        storeTechVersion: storeTechVersion,
        gitShort: gitShort,
        techVersion: techVersion
    }
}