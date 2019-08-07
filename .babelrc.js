const presets = [
  [
    require.resolve('@babel/preset-env'),
    { modules: false, loose: true, targets: { node: 'current' } },
  ],
]
const plugins = [require.resolve('@babel/plugin-transform-modules-commonjs')]
module.exports = {
  presets,
  plugins,
}
