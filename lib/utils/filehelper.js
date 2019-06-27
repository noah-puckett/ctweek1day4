function getFilePath(pathname) {
    return path.join(__dirname, '../../public', path.normalize(pathmame));
};

module.exports = { getFilePath };