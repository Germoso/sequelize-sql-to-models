const SequelizeAuto = require('sequelize-auto')

const auto = new SequelizeAuto('portal_empleos_testingdb', 'root', 'password', {
  host: 'localhost',
  singularize: false,
  useDefine: false,
  dialect: 'mysql',
  lang: 'ts',
  directory: './models',
  caseModel: 'o',
  caseFile: 'o',
  caseProp: 'o',
  additional: {
    timestamps: false,
  },
})

auto
  .run()
  .then()
  .catch((e) => {})
