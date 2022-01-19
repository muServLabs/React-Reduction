const { useBabelRc, override } = require("customize-cra");

module.exports = override(useBabelRc());

//https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f
//https://medium.com/@leonardobrunolima/react-tips-working-with-relative-path-using-create-react-app-fe55c5f97a21