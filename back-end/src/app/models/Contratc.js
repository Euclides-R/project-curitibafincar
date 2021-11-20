import Sequelize, { Model } from "sequelize";

class Contratc extends Model {
    static init (sequelize) {
        super.init(
            {
                type_contratc: Sequelize.STRING(100),
                companies: Sequelize.STRING(100),
                amount_times: Sequelize.STRING(100),
                entry_date: Sequelize.DATE,
                installments_date: Sequelize.DATE           
            },
            {
                sequelize,
            }
        );
        return  this;
    }
}

export default Contratc;
