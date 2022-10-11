ts
"compilerOptions": {
    "module": "commonjs", // 
    "declaration": true, declarationとは、TypeScriptのコードをJavaScriptに変換するときに、型情報を残すかどうかを指定するものです。trueにすると、型情報が残ります。
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false