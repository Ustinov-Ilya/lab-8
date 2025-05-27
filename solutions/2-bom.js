// BEGIN
const solution = (url) => {
    window.location.href = url;

    const codeName = navigator.appCodeName;
    const version = navigator.appVersion;

    return `${codeName}/${version} ${window.location.href = url}`;
}

export default solution
// END