'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class ResetPassword extends BaseValidator {
  get rules () {
    return {
      password: 'confirmed|min:6|max:30',
    }
  }
}

module.exports = ResetPassword
