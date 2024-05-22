const samplingLSKey = 'sampling_ls_key';
function checkIfSampled() {
    const isAlreadySampled = Boolean(localStorage.getItem(samplingLSKey) || 'false');
    if (isAlreadySampled) return true;

    let nlsObject = __nls || null;
    if (nlsObject && nlsObject.isAnalyzeSampled) {
        if (nlsObject.isAnalyzeSampled()) {
            localStorage.setItem(samplingLSKey, 'true');
            return true;
        }
    }
}

function renderSampling(isEnable) {
    const sampledToast = document.getElementById('sampled');
    if (!sampledToast) {
        if (isEnable) {
            alert('Sampling enabled');
        } else {
            return;
        }
    }
    if (isEnable) {
        sampledToast.innerText = "Sampling enabled"
        sampledToast.classList.add('sampled');
    } else {
        sampledToast.innerText = "Sampling disabled"
        sampledToast.classList.remove('sampled');
    }
}

function initSamplingCheck() {

    var initSamplingCheckInterval = setInterval(function (check = 0) {
        const isAlreadySampled = checkIfSampled();
        renderSampling(isAlreadySampled);
        if (isAlreadySampled || check === 10) {
            clearInterval(initSamplingCheckInterval);
            return;
        } else {
            check++;
        }
    }, 1000);
}


// initSamplingCheck();

function forceSampling() {
    let nlsObject = __nls || null;
    if (nlsObject && nlsObject.isAnalyzeSampled && nlsObject.forceSampleAnalyze) {
        if (nlsObject.isAnalyzeSampled()) {
            alert('already sampled');
            return true;
        }
        nlsObject.forceSampleAnalyze();
        window.location.reload();
    }
}