import type { Request, Response } from "express";
import { ValidationError, UniqueConstraintError } from "sequelize";
import { StatusCodes } from "http-status-codes";
import Patient from "../models/Patient.model";
import EmailNotificationStrategy from "../strategies/EmailNotificationStrategy";
import NotificationContext from "../strategies/NotificationContext";

export class PatientController {
  static getPatients = async (req: Request, res: Response) => {
    try {
      const patients = await Patient.findAll();
      res.json({ data: patients });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ errors: [{ message: "Internal server error" }] });
    }
  };

  static createPatient = async (req: Request, res: Response) => {
    try {
      const patient = await Patient.create(req.body);

      // Send email notification
      const emailStrategy = new EmailNotificationStrategy();
      const notificationContext = new NotificationContext(emailStrategy);
      notificationContext.sendNotification(
        req.body.email_address,
        `Dear ${req.body.name},\n\nYou have been successfully registered as a patient.\n\nWelcome to our service!`,
      );

      res.status(StatusCodes.CREATED).json({ data: patient });
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = error.errors.map(({ message, path: source }) => ({
          message,
          source,
        }));
        const status =
          error instanceof UniqueConstraintError
            ? StatusCodes.CONFLICT
            : StatusCodes.BAD_REQUEST;
        res.status(status).json({ errors });
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ errors: [{ message: "Internal server error" }] });
      }
    }
  };
}
