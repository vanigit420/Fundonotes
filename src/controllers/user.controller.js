import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';






/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const Userregistration = async (req, res, next) => {
  try {
    const data = await UserService.Userregistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};
export const Userlogin = async (req, res, next) => {
  try {
    const data = await UserService.Userlogin(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User login successfully'
    });
  } catch (error) {
    next(error);
  }
};


