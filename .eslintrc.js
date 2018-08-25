module.exports = {
  extends: [
    'airbnb-base',
    'standard',
    'plugin:jest/recommended'
  ],
  env: {
    node: true,
    browser: true
  },
  plugins: [
    'import'
  ],
  rules: {
    'no-console': 0,
    // 禁止直接修改函数参数（参数为Object时修改属性值除外）
    'no-param-reassign': ['error', { props: false }],
    // 强制使用结构赋值（对象的赋值表达式除外）
    'prefer-destructuring': ['error', { AssignmentExpression: { object: false } }],
    // 禁止导入未在package.json的依赖项（devDependencies除外）
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
