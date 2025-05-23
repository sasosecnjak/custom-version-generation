const utils = require('../tools/utils');

// Run testing functions
scenario1()
scenario2()
scenario3()
scenario4()
scenario5()
scenario6()
scenario7()
scenario8()
scenario9()
scenario10()
scenario11()
scenario12()
scenario13()
scenario14()

function scenario1() {
    console.log("Scneario 1")
    try {
        const res = utils.prepareVersions("1.0.0", ".", "", 0, 33, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario2() {
    console.log("Scneario 2")
    try {
        const res = utils.prepareVersions("0.0.0", ".", "", 0, 3, "ef1")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario3() {
    console.log("Scneario 3")
    try {
        const res = utils.prepareVersions("0.0.0", ".", "", 0, 3, "")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario4() {
    console.log("Scneario 4")
    try {
        const res = utils.prepareVersions("1.0.0", ".", "", 100, 22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario5() {
    console.log("Scneario 5")
    try {
        const res = utils.prepareVersions("1.0.0", ".", "", -1, 22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario6() {
    console.log("Scneario 6")
    try {
        const res = utils.prepareVersions("1.0.0", ".", "", 0, -22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario7() {
    console.log("Scneario 7")
    try {
        const res = utils.prepareVersions("", ".", "", 0, -22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario8() {
    console.log("Scneario 8")
    try {
        const res = utils.prepareVersions("1", ".", "", 0, 14, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario9() {
    console.log("Scneario 9")
    try {
        const res = utils.prepareVersions("v", ".", "", 0, 122, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario10() {
    console.log("Scneario 10")
    try {
        const res = utils.prepareVersions("1.0.0", "-", "", 0, 33, "a78c09c210c57135013727b60ef834ed19be5f15")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario11() {
    console.log("Scneario 11")
    try {
        const res = utils.prepareVersions("v", ".", "-DEV", 0, 122, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario12() {
    console.log("Scneario 12")
    try {
        const res = utils.prepareVersions("3.1.5", ".", "-DEV", 0, 156, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario13() {
    console.log("Scneario 13")
    try {
        const res = utils.prepareVersions("3.1.5", ".", "-feature/TICKET-1234-some-feature", 0, 156, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario14() {
    console.log("Scneario 14")
    try {
        const res = utils.prepareVersions("3.1.5", ".", "-feature/TICKET-1234-some_feature_with_longer_underscored_title", 0, 156, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}