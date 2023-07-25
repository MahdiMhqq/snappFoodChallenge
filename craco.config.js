module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
            @import "src/assets/styles/helpers/_variables.scss";
            @import "src/assets/styles/helpers/_placeholders.scss";
            @import "src/assets/styles/helpers/_mixins.scss";
          `,
      },
    },
  },
};
