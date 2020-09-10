module.exports = {
  async rewrites() {
    return [
      {
        source: "/download",
        destination:
          "https://packaging.cylindo.com/api/packaging/get-content-package",
      },
    ];
  },
};
