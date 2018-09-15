const isTest = process.env.NODE_ENV === 'test';

module.exports = {
    "plugins": [
        "syntax-dynamic-import",
        "transform-class-properties",
        "transform-object-rest-spread",
        isTest ? 'dynamic-import-node' : null,
    ].filter(Boolean),
    "presets": [
        "react",
        ["env", { modules: isTest ? 'commonjs' : false }],
    ]
}