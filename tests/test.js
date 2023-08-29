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

function scenario1() {
    console.log("Scneario 1")
    try {
        const res = utils.prepareVersions("1.0.0", ".", 0, 33, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario2() {
    console.log("Scneario 2")
    try {
        const res = utils.prepareVersions("0.0.0", ".", 0, 3, "ef1")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario3() {
    console.log("Scneario 3")
    try {
        const res = utils.prepareVersions("0.0.0", ".", 0, 3, "")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario4() {
    console.log("Scneario 4")
    try {
        const res = utils.prepareVersions("1.0.0", ".", 100, 22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario5() {
    console.log("Scneario 5")
    try {
        const res = utils.prepareVersions("1.0.0", ".", -1, 22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario6() {
    console.log("Scneario 6")
    try {
        const res = utils.prepareVersions("1.0.0", ".", 0, -22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario7() {
    console.log("Scneario 7")
    try {
        const res = utils.prepareVersions("", ".", 0, -22, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario8() {
    console.log("Scneario 8")
    try {
        const res = utils.prepareVersions("1", ".", 0, 14, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario9() {
    console.log("Scneario 9")
    try {
        const res = utils.prepareVersions("v", ".", 0, 122, "abf331fa549e")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}

function scenario10() {
    console.log("Scneario 10")
    try {
        const res = utils.prepareVersions("1.0.0", "-", 0, 33, "a78c09c210c57135013727b60ef834ed19be5f15")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    console.log("")
}