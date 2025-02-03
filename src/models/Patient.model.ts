import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "patients", timestamps: false })
class Patient extends Model {
  @Column({
    type: DataType.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: { msg: "Name cannot be empty" },
      notNull: { msg: "Name cannot be empty" },
    },
  })
  name: string;

  @Column({
    type: DataType.STRING(80),
    allowNull: false,
    unique: { name: "email_address", msg: "Email address already registered" },
    validate: {
      isEmail: { msg: "Must be a valid email address" },
      notNull: { msg: "Email address cannot be empty" },
    },
  })
  email_address: string;

  @Column({ type: DataType.STRING(20) })
  phone_number: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    validate: {
      isUrl: { msg: "Must be a valid image URL" },
      notNull: { msg: "Document photo cannot be empty" },
    },
  })
  document_image: string;
}

export default Patient;
