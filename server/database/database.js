import { Sequelize} from 'sequelize'
const sequelize = new Sequelize('ecomapp', 'root', 'federico@899', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
})
export default sequelize
